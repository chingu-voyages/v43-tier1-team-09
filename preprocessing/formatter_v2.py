import json
import re
from string import printable

path_to_json = "input_scenarios.json"  # table with json object
path_to_output = "../src/model/stories.json"
final_array = []

with open(path_to_json, "r") as read_file:  # Opening JSON file

    data = json.load(read_file)  # returns JSON object as a dictionary

    for key in data:
        my_regex = "{{" + r"(.*?)" + "}}"
        var_list = re.findall(my_regex, key['Scenario'])
        description_list = []

        for var in var_list:
            description = re.findall('[a-zA-Z][^A-Z]*', var)
            description_str = " ".join(
                list(map(lambda x: x.lower(), description)))
            description_str = description_str[0].upper() + description_str[1:]
            description_list.append(description_str)

        for f, b in zip(var_list, description_list):
            print(f, b)

        # join lists into a dictionary
        my_Dict = dict(zip(var_list, description_list))

        my_var_Object = {"Variables": my_Dict}

        key.update(my_var_Object)  # add the "Variables" object

        final_array.append(key) # write each dictionary (json object) to final array


with open(path_to_output, "a") as write_file:
    json.dump(final_array, write_file, indent=4)
