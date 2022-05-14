from email.mime import base
import arcpy
import os
from os import listdir

base_path = r'D:\vpmc-apr-engineer'
total_output_path = []
island_list = ['kinmen', 'lianjiang', 'penghu']

for i in listdir(os.path.join(base_path, 'output')):
    file_path = os.path.join(base_path, 'output', i)
    output_path = os.path.join(base_path, '_src', 'gis-garbage','{}.shp'.format(i[0: i.index('.csv')]))
    prj_file = 'TWD97TM2.prj'
    if(i[0: i.index('.csv')] in island_list):
        prj_file = 'TWD97TM2-119.prj'
    arcpy.management.XYTableToPoint(
        file_path, 
        output_path,
        'coordinate_x', 
        'coordinate_y', 
        '#', 
        os.path.join(base_path, '_src', 'gis', prj_file)
    )
    total_output_path.append(output_path)
    print('產出{}.shp'.format(i[0: i.index('.csv')]))

print('合併所有shp')
arcpy.management.Merge(total_output_path, os.path.join(base_path, '_src', 'gis-output', 'apr-decade-taiwan.shp'))