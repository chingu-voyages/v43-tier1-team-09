import json
import re

path_to_fileA = "scenarios.json"

# Opening JSON file
f = open(path_to_fileA)

# returns JSON object as
# a dictionary
data = json.load(f)


# print(data)
# exit(0)

def camelcase_format(input_word):
    word_split = "".join(re.split(r"[;_' ]", input_word.title()))
    return word_split[0].lower() + word_split[1:]


def description_format(input_word):
    word_split = input_word.lower() \
        .replace("_", " ") \
        .replace(";", ", ") \
        .replace("1", " once") \
        .replace("2", " twice") \
        .replace("  ", " ")
    return word_split[0].upper() + word_split[1:]


for key in data:
    delimiter_strs = key['Delimiter']
    my_regex = "\\" + delimiter_strs[0] + r"(.*?)" + "\\" + delimiter_strs[2]

    scenario = key['Scenario']
    word_list = re.findall(my_regex, scenario)

    var_list = list(map(lambda x: camelcase_format(x), word_list))

    description_list = list(map(lambda x: description_format(x), word_list))

    my_Dict =dict(zip(var_list, description_list))

    my_var_Object = {"Variables": my_Dict}

    key.update(my_var_Object)

    print(json.dumps(key))

# Closing file
f.close()

# print scenarios and words found:
