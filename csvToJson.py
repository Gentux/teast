#!/usr/bin/env python

"""
mv ~/Downloads/Liste*.csv teas.csv
python csvToJson.py > src/utils/data.json
"""

import csv
import json

with open('teas.csv', newline='') as csvfile:
    tea_reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    teas = {}

    title_row = None
    tea_id = 0
    for row in tea_reader:

        if title_row is None:
            title_row = row
            continue

        # Rows structure
        # * nom => name
        # * quantité => quantity
        # * catégorie => type
        # * description => note
        # * marque => shop
        # * temps d'infusion => infuse_times
        # * URL => URL de page de vente
        # * image => image

        tea_id = tea_id + 1
        teas[tea_id] = {
          "name": row[0],
          "tea_id": tea_id,
          "quantity": row[1],
          "type": row[2],
          "note": row[3],
          "shop": row[4],
          "infuse_times": row[5],
          "url": row[6],
          "img": row[7],
        }

print(json.dumps(teas, indent = 2, ensure_ascii = False))
