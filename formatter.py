import json

path_to_fileA = "scenarios.json"

# Opening JSON file
f = open(path_to_fileA)

# returns JSON object as
# a dictionary
data = json.load(f)
print(data)
# exit(0)


# Iterating through the json
# list
for i in data['Scenario']:
    print(i)

# Closing file
f.close()



