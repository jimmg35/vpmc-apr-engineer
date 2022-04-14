
# 用於合併單一縣市多時期實價登入資料

import os
import csv
import sys
from requests import head
import xlrd
import pandas as pd
from os import listdir

file_path_template = f"../repository/{sys.argv[1]}/raw"
file_paths = [os.path.join(file_path_template, i) for i in listdir(file_path_template)]

# 讀取raw資料夾內的工作表
worksheet_list = []
schema_list = []
for i in file_paths:
    deal_sheet_names = []
    workbook = xlrd.open_workbook(i)
    sheet_names = workbook.sheet_names()
    for j in sheet_names:
        if "不動產買賣" in j:
            deal_sheet_names.append(j)
    for j in deal_sheet_names:
        worksheet = workbook.sheet_by_name(j)
        headers = [str(cell.value) for cell in worksheet.row(0)]
        schema_list.append(headers)
        worksheet_list.append(worksheet)

# 比較各時期資料表schema
for i in range(1, len(schema_list)):
    if schema_list[i] == schema_list[i-1]:
        print(f"{worksheet_list[i-1].name}，有{len(schema_list[i-1])}個欄位")
        if i == len(schema_list) - 1:
            print(f"{worksheet_list[i].name}，有{len(schema_list[i])}個欄位")
            print("==============================")
        continue
    else:
        print(f"發現schema不一致")
        sys.exit()
            
# 合併資料表
merged_worksheet = [schema_list[0]]
for worksheet in worksheet_list:
    for j in range(1, worksheet.nrows): #迴圈列印每一行
        merged_worksheet.append(worksheet.row_values(j))

# 輸出合併資料表
if os.path.exists(f'../repository/{sys.argv[1]}/merged') == False:
    os.makedirs(f'../repository/{sys.argv[1]}/merged')
with open(f'../repository/{sys.argv[1]}/merged/{sys.argv[1]}.csv', 'w', newline='', encoding='utf-8-sig') as file:
    writer = csv.writer(file)
    for row in merged_worksheet:
        writer.writerow(row)

print("輸出完畢")