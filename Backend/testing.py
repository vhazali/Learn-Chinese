import json
import random

# Reads json file
json_data = open("data/sample-jumbled-without-newline.json","r")
#parses json file into objects
parsed_json = json.load(json_data)
json_data.close()

# Get the date extracted
date = parsed_json['date extracted']
# Get the number of sentences
count = parsed_json['count']
# questions dictionary
questions = {}
# temp list to hold the multiple choice questions
temp = []

# Parse each sentence to generate questions
for sentence in parsed_json['sentences']:
    # Empty the list
    del temp[:]
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
            temp.append({i:answer})
        else:
            # Generate random words to act as alternative options
            temp.append({i:unichr(ord(answer)+i)})
    temp.append({"ans":str(answer_index)})
    questions[question]=temp

output_json = {
    "count":count,
    "date extracted":date,
}

for q in questions:
    output_json[q]=questions[q]

print output_json

json_string = json.dumps(output_json, ensure_ascii=False).encode('utf8')
print json_string

outfile = open("data/output.json","w+")
outfile.write(json_string)
outfile.close()