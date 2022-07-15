from geocoding import GeoCoder
import pandas as pd
import re
import math
from datetime import datetime
import numpy as np


def parseLicense(licenseNumber):
    return re.findall(r'\d+', licenseNumber)


outColumn = [
    "fuck",
    "date",
    "organization",
    "address",
    "license",
    "licenseYear",
    "licenseCode",
    "latitude",
    "longitude"
]

if __name__ == "__main__":

    myCoder = GeoCoder("./geocoding.json")
    data = pd.read_csv('./data/newTaipei.csv')

    total = []
    for index, row in data.iterrows():
        # if index > 2:
        #     break
        try:
            rowData = [
                '1',
                datetime.strptime(str(int(row["date"])), '%Y%m%d').strftime('%Y/%m/%d'),
                row["organization"],
                row["address"],
                row["license"]
            ]
        except:
            continue

        try:
            licenseNumber = parseLicense(row['license'])
            rowData.append(licenseNumber[0])
            rowData.append(licenseNumber[1])
        except:
            continue

        try:
            x, y = myCoder.address2Geolocation(row["address"])
            if x == None or y == None:
                continue
            rowData.append(y)
            rowData.append(x)
        except:
            continue
        total.append(rowData)
        print(row["organization"])

        
    # 輸出geocoded的表
    joinGeocoded = pd.DataFrame(np.array(total), columns=outColumn)
    joinGeocoded.to_csv("./output/newtaipei.csv", encoding="utf-8-sig", index=False)

