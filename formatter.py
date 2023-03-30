import json
import re

path_to_fileA = "scenarios.json"

# Opening JSON file
f = open(path_to_fileA)

# returns JSON object as
# a dictionary
data = json.load(f)
print(data)
# exit(0)

# print scenarios and words found:
for key in data:
    delimiter_strs = key['Delimiter']
    my_regex = "\\" + delimiter_strs[0] + r"(.*?)" + "\\" + delimiter_strs[2]

    scenario = key['Scenario']
    print(scenario)
    print(re.findall(my_regex, scenario))


# Closing file
f.close()



