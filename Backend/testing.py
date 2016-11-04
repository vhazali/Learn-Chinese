import json
import random
import sys

if len(sys.argv) < 2:
    print "Error. Input file not specified."
    sys.exit()


input_file = sys.argv[1]

# Reads json file
json_data = open(input_file,"r")
#parses json file into objects
parsed_json = json.load(json_data)
json_data.close()

# Get the date extracted
date = parsed_json['date extracted']
# Get the number of sentences
count = parsed_json['count']

# Dictionary to represent the output json file
output_json = {
    "count":count,
    "date extracted":date,
}

testdict = {}

# Parse each sentence to generate questions
for sentence in parsed_json['sentences']:
    # Empty the dictionary
    options = {}
    # Get a random index to remove from sentence
    index = random.randint(0,len(sentence)-1)
    # Store the correct answer
    answer = sentence[index]
    # Form the new question, with __ as the replacement
    question = sentence[:index] + "__" + sentence[index + 1:]
    # Get a random index to set as correct option
    answer_index = random.randint(1,4)

    for i in range(1,5):
        # write the correct option as the answer
        if i == answer_index:
            options[i] = answer
        else:
            # Generate random words to act as alternative options
            options[i] = unichr(ord(answer)+i)
    options["ans"] = str(answer_index)
    output_json[question] = options

output_file = "data/question-"+date+".json"

json_string = json.dumps(output_json, ensure_ascii=False).encode('utf8')

outfile = open(output_file,"w+")
outfile.write(json_string)
outfile.close()