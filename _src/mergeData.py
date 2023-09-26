
# 用於合併單一縣市多時期實價登入資料

import os
import csv
import sys
from requests import head
import xlrd
import pandas as pd
from os import listdir
import shutil

def loadSheetsOfCounty(path):
    file_path_template = path
    file_paths = [os.path.join(file_path_template, i) for i in listdir(file_path_template)]

    # raw資料夾內的土地工作表
    land_worksheet_list = []
    land_schema_list = []

    # raw資料夾內的建物工作表
    build_worksheet_list = []
    build_schema_list = []

    # raw資料夾內的停車位工作表
    park_worksheet_list = []
    park_schema_list = []

    # raw資料夾內的交易紀錄工作表
    deal_worksheet_list = []
    deal_schema_list = []

    for i in file_paths:

        # 其他分類
        land_sheet_names = []
        build_sheet_names = []
        park_sheet_names = []

        # 交易紀錄表
        deal_sheet_names = []

        workbook = xlrd.open_workbook(i)
        sheet_names = workbook.sheet_names()
        for j in sheet_names:
            if "不動產買賣" in j:
                deal_sheet_names.append(j)
            if "土地" in j:
                land_sheet_names.append(j)
            if "建物" in j:
                build_sheet_names.append(j)
            if "停車位" in j:
                park_sheet_names.append(j)

        for j in land_sheet_names:
            worksheet = workbook.sheet_by_name(j)
            headers = [str(cell.value) for cell in worksheet.row(0)]
            land_schema_list.append(headers)
            land_worksheet_list.append(worksheet)

        for j in build_sheet_names:
            worksheet = workbook.sheet_by_name(j)
            headers = [str(cell.value) for cell in worksheet.row(0)]
            build_schema_list.append(headers)
            build_worksheet_list.append(worksheet)
        
        for j in park_sheet_names:
            worksheet = workbook.sheet_by_name(j)
            headers = [str(cell.value) for cell in worksheet.row(0)]
            park_schema_list.append(headers)
            park_worksheet_list.append(worksheet)
        
        for j in deal_sheet_names:
            worksheet = workbook.sheet_by_name(j)
            headers = [str(cell.value) for cell in worksheet.row(0)]
            deal_schema_list.append(headers)
            deal_worksheet_list.append(worksheet)
        
    return [land_worksheet_list, build_worksheet_list, park_worksheet_list, deal_worksheet_list, land_schema_list, build_schema_list, park_schema_list, deal_schema_list]
    
def compareSchema(schema_list):
    # 比較各時期資料表schema
    if len(schema_list) == 0:
        return False
    for i in range(1, len(schema_list)):
        if schema_list[i] == schema_list[i-1]:
            continue
        else:
            return False
    return True

def mergeSheets(schema_list, worksheet_list):
    # 合併資料表
    merged_worksheet = [schema_list[0]]
    for worksheet in worksheet_list:
        for j in range(1, worksheet.nrows): #迴圈列印每一行
            merged_worksheet.append(worksheet.row_values(j))
    return merged_worksheet

def exportMergedSheet(merged_worksheet, path, category):
    # 輸出合併資料表
    if os.path.exists(path) == False:
        os.makedirs(path)
    with open(os.path.join(path, f"{category}.csv"), 'w', newline='', encoding='utf-8-sig') as file:
        writer = csv.writer(file)
        for row in merged_worksheet:
            writer.writerow(row)
    print(f"{category} 輸出完畢")
        

def mergeSheetWithException(schema_list, worksheet_list):
    # 合併資料表
    merged_worksheet = [schema_list[0]]
    for worksheet in worksheet_list:
        for j in range(1, worksheet.nrows): #迴圈列印每一行
            merged_worksheet.append(worksheet.row_values(j)[0:8])

    return merged_worksheet



if __name__ == '__main__':


    repo_path = r'../repository'

    counties = listdir(repo_path)

    for county in counties:
        print(county)
        output_path = os.path.join(repo_path, county, 'merged')
        [
            land_worksheet_list, build_worksheet_list, park_worksheet_list, deal_worksheet_list, 
            land_schema_list, build_schema_list, park_schema_list, deal_schema_list
        ] = loadSheetsOfCounty(os.path.join(repo_path, county, 'raw'))

        # for i in land_schema_list:
        #     print(i)
        # print('=============')
        # for i in build_schema_list:
        #     print(i)
        # print('========')
        if compareSchema(land_schema_list):
            merged_worksheet = mergeSheets(land_schema_list, land_worksheet_list)
            exportMergedSheet(merged_worksheet, output_path, 'land')
        else:
            merged_worksheet = mergeSheets(land_schema_list, land_worksheet_list)
            exportMergedSheet(merged_worksheet, output_path, 'land')


        if compareSchema(build_schema_list):
            merged_worksheet = mergeSheets(build_schema_list, build_worksheet_list)
            exportMergedSheet(merged_worksheet, output_path, 'build')
        else:
            merged_worksheet = mergeSheetWithException(build_schema_list, build_worksheet_list)
            exportMergedSheet(merged_worksheet, output_path, 'build')


        if compareSchema(park_schema_list):
            merged_worksheet = mergeSheets(park_schema_list, park_worksheet_list)
            exportMergedSheet(merged_worksheet, output_path, 'park')

        if compareSchema(deal_schema_list):
            merged_worksheet = mergeSheets(deal_schema_list, deal_worksheet_list)
            exportMergedSheet(merged_worksheet, output_path, 'deal')
        print(f"{len(land_schema_list)} {len(build_schema_list)} {len(park_schema_list)} {len(deal_schema_list)}")
        print('=====================')
        

    
            

