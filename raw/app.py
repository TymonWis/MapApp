import random

with open('./src.txt', 'r') as file:
    lines = file.readlines()
    third_line = lines[random.randint(0,20)] #reads the 3rd line in the doc
    print(third_line)
