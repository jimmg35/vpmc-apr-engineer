import pandas as pd
import os
from os import listdir

if __name__ == '__main__':
    repo_path = r'../repository'

    counties = listdir(repo_path)

    for county in counties:
        
        file_path = os.path.join(repo_path, county, 'merged', 'build.csv')

        data = pd.read_csv(file_path)
        print(data)