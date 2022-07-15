
import pandas as pd
import re
import math
from datetime import datetime
import numpy as np

def parseLicense(licenseNumber):
    return re.findall(r'\d+', licenseNumber)

def getRidOfUnitMark(value: str):
    return value.replace('㎡', '')

outColumn = [
    "fuck",
    "licenseType",
    "license",
    "licenseYear",
    "licenseCode",
    "baseArea",
    "buildingArea",
    "floorArea",
    "buildingHeight",
    "basementArea",
    "blankArea",
    "buildingStructure",

    "groundLevel",
    "undergroundLevel",

    "buildingCount",
    "householdCount",

    "representative",
    "designer",
    "supervisor",
    "builder",
    "parkingSpace",
    "issueDate",
    "startDate",
    "endDate"
]

if __name__ == "__main__":

    data110 = pd.read_csv('./data/110utf.csv', encoding='utf-8')
    data109 = pd.read_csv('./data/109utf.csv', encoding='utf-8')
    data108 = pd.read_csv('./data/108utf.csv', encoding='utf-8')
    data107 = pd.read_csv('./data/107utf.csv', encoding='utf-8')
    data = pd.concat([data107, data108, data109, data110])
    
    total = []
    for index, row in data.iterrows():
        rowData = ['1', row['執照類別'], row['核發執照字號']]

        try:
            licenseNumber = parseLicense(row['核發執照字號'])
            rowData.append(licenseNumber[0])
            rowData.append(licenseNumber[1])
        except:
            continue

        rowData.append(
            getRidOfUnitMark(row['基地面積'])
        )

        rowData.append(
            getRidOfUnitMark(row['建築面積'])
        )

        rowData.append(
            getRidOfUnitMark(row['總樓地板面積'])
        )

        rowData.append(
            getRidOfUnitMark(row['建築物高度'])
        )

        rowData.append(
            getRidOfUnitMark(row['地下避難面積'])
        )

        rowData.append(
            getRidOfUnitMark(row['法定空地面積'])
        )

        rowData.append(
            row['構造別']
        )

        rowData.append(
            row['地上層數'].replace('層', '')
        )
        rowData.append(
            row['地下層數'].replace('層', '')
        )
        rowData.append(
            row['棟數'].replace('棟', '')
        )
        rowData.append(
            row['戶數'].replace('戶', '')
        )



        rowData.append(
            row['起造人代表人']
        )
        rowData.append(
            row['設計人']
        )
        rowData.append(
            row['監造人']
        )
        rowData.append(
            row['承造人']
        )
        rowData.append(
            row['停車空間']
        )
        rowData.append(
            row['發照日期']
        )
        rowData.append(
            row['實際開工日期']
        )
        rowData.append(
            row['竣工日期']
        )
        total.append(rowData)
    
    outData = np.array(total)
    outData[outData == 'nan'] = np.nan
    joinGeocoded = pd.DataFrame(outData, columns=outColumn)

    # joinGeocoded.where(pd.notnull(joinGeocoded), None)

    joinGeocoded.to_csv("./output/newtaipei-license.csv", encoding="utf-8-sig", index=False)

