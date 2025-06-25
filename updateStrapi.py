import requests
import json
import pandas as pd

# Strapi API URL and authentication token
STRAPI_URL = "https://n11.eohillinois.org/api/exhibits"  # Replace with your Strapi URL
API_TOKEN = "67664b08649e5baf984d0bed6f84c5b99f3c8a782038a5f943b8dda301a2091d52397f6f57c042e16d976f6c16615298b4780d0d80e2f6ecefe7cfb2c538f3d293ea8954ef7d35947f2f53160b8b540b3c424faaae447d3f358dd45f2de073d5958adbf75a22368dcc3973f1f4be549fb95fa22e23a2d894ea3fb37b6f4260f5"  # Replace with your API token


# THIS IS THE EXHIBITS
# file_path = "EOH 2025 Master Spreadsheet.xlsx"
# df = pd.read_excel(file_path, sheet_name="Exhibit Applications")
# print(df)

# # Headers for the request
# headers = {
#     "Authorization": f"Bearer {API_TOKEN}",
#     "Content-Type": "application/json"
# }

# # Loop through each row in the Excel sheet
# ind = 0
# for index, row in df.iterrows():
#     # if (ind == 1):
#     #     break
#     # ind+= 1
#     # Extract values from specific columns (adjust column names based on your file)
#     exhibit_data = {
#     "Exhibit_Number": str(row["Exhibit ID #"]) if pd.notna(row["Exhibit ID #"]) else "",
#     "Exhibit_Name": str(row["Exhibit Name"]) if pd.notna(row["Exhibit Name"]) else "",
#     "VisGuide_Description": row["Exhibit Description for Visitor's Guide"] if pd.notna(row["Exhibit Description for Visitor's Guide"]) else "",
#     "Building_A": row["Building A"] if pd.notna(row["Building A"]) else "",
#     "Sub_Building_A": row["Sub-Building A"] if pd.notna(row["Sub-Building A"]) else "",
#     "Building_B": row["Building B"] if pd.notna(row["Building B"]) else "",
#     "Sub_Building_B": row["Sub-Building B"] if pd.notna(row["Sub-Building B"]) else "",
#     "Affiliation": row["Affiliated to:"] if pd.notna(row["Affiliated to:"]) else "",
#     "Department": row["Department"] if pd.notna(row["Department"]) else "",
#     "Intended_Audience": row["Intended Audience"] if pd.notna(row["Intended Audience"]) else "",
#     "Tags": (row["Exhibit Tag 1"] if pd.notna(row["Exhibit Tag 1"]) else "") + ", " + (row["Exhibit Tag 2"] if pd.notna(row["Exhibit Tag 2"]) else "") + ", " + (row["Exhibit Tag 3"] if pd.notna(row["Exhibit Tag 3"]) else "")
# }

#     # Send the data to Strapi
#     response = requests.post(STRAPI_URL, headers=headers, json={"data": exhibit_data})

#     # Handle response
#     if response.status_code in [200, 201]:
#         print(f"Successfully added: {row['Exhibit ID #']}")
#     else:
#         print(f"Failed to add: {row['Exhibit ID #']}")
#         print("Status Code:", response.status_code)
#         print("Response:", response.text)








# THIS IS THE SPECIAL EVENTS
# file_path = "EOH 2025 Master Spreadsheet.xlsx"
# df = pd.read_excel(file_path, sheet_name="Special Events")
# print(df)

# # Headers for the request
# headers = {
#     "Authorization": f"Bearer {API_TOKEN}",
#     "Content-Type": "application/json"
# }

# # Loop through each row in the Excel sheet
# ind = 0
# for index, row in df.iterrows():
#     # if (ind == 1):
#     #     break
#     # ind+= 1
#     # Extract values from specific columns (adjust column names based on your file)
#     exhibit_data = {
#     "title": str(row["Exhibit Name"]) if pd.notna(row["Exhibit Name"]) else "",
#     "VisGuide_Description": row["Exhibit Description for Visitor's Guide"] if pd.notna(row["Exhibit Description for Visitor's Guide"]) else "",
#     "Building_A": row["Building A"] if pd.notna(row["Building A"]) else "",
#     "Sub_Building_A": row["Sub-Building A"] if pd.notna(row["Sub-Building A"]) else "",
#     "Building_B": row["Building B"] if pd.notna(row["Building B"]) else "",
#     "Sub_Building_B": row["Sub-Building B"] if pd.notna(row["Sub-Building B"]) else "",
#     "Affiliation": row["Affiliated to:"] if pd.notna(row["Affiliated to:"]) else "",
#     "Department": row["Department"] if pd.notna(row["Department"]) else "",
#     "Intended_Audience": row["Intended Audience"] if pd.notna(row["Intended Audience"]) else "",
#     "Tags": (row["Exhibit Tag 1"] if pd.notna(row["Exhibit Tag 1"]) else "") + ", " + (row["Exhibit Tag 2"] if pd.notna(row["Exhibit Tag 2"]) else "") + ", " + (row["Exhibit Tag 3"] if pd.notna(row["Exhibit Tag 3"]) else "")
# }

#     # Send the data to Strapi
#     response = requests.post(STRAPI_URL, headers=headers, json={"data": exhibit_data})

#     # Handle response
#     if response.status_code in [200, 201]:
#         print(f"Successfully added: {row['Exhibit ID #']}")
#     else:
#         print(f"Failed to add: {row['Exhibit ID #']}")
#         print("Status Code:", response.status_code)
#         print("Response:", response.text)

# THIS IS GETTING ALL THE DATA FROM THE API
# ran on exhibits, events, and faqs
base_url = "https://n11.eohillinois.org/api/faqs"
page_size = 25
response = requests.get(base_url)
page = 1
all_data = []
OUTPUT_FILE = "faqs.json"


while True:
    url = f"{base_url}?pagination[page]={page}&pagination[pageSize]={page_size}"
    print(f"Fetching page {page}...")
    response = requests.get(url)

    if response.status_code != 200:
        print(f"Failed to fetch page {page}: {response.status_code}")
        break

    result = response.json()
    data = result.get("data", [])
    meta = result.get("meta", {}).get("pagination", {})

    if not data:
        break

    all_data.extend(data)

    if page >= meta.get("pageCount", 0):
        break

    page += 1

with open(OUTPUT_FILE, "w") as f:
    json.dump(all_data, f, indent=4)
print(f"Saved {len(all_data)} records to '{OUTPUT_FILE}'.")