import json
import re
from string import printable

path_to_json = "scenarios.json"
path_to_output = "all_scenarios.json"


# functions for string treatments:
def camelcase_format(input_word):
    word_split = "".join(re.split(r"[;_' ]", input_word.title()))
    return word_split[0].lower() + word_split[1:]


with open(path_to_json, "r") as read_file:  # Opening JSON file

    data = json.load(read_file)  # returns JSON object as a dictionary

    for key in data:
        delimiter_strs = key['Delimiter']
        my_regex = "\\" + delimiter_strs[0] + r"(.*?)" + "\\" + delimiter_strs[2]

        word_list = re.findall(my_regex, key['Scenario'])

        var_list = list(map(lambda x: camelcase_format(x), word_list))  # create list of variables' name

        description_list = word_list  # the variable's value will match exactly with the scenario text

        my_Dict = dict(zip(var_list, description_list))  # join lists into a dictionary

        my_var_Object = {"Variables": my_Dict}

        key.update(my_var_Object)  # add the "Variables" object

        del key['Delimiter']  # remove the "Delimiter" object that we don't need anymore

        with open(path_to_output, "a") as write_file:  # write each dictionary (json object) to output file
            json.dump(key, write_file, indent=4)
            write_file.write(',')
