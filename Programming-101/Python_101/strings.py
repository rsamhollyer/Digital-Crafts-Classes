my_string = "Look, a string"
my_string = "Another string"

string_too = 'look at me, im a string too!'

string_again = '''
WE're 
strings
too
'''



another_string = """
STRINGS
FOR-
EVER
"""
print(my_string, string_too, string_again, another_string)

print("hello"+" world")

message = "Hello World"

name = "Sam"

#F-Strings

combined = f"I want to say {message} to {name}."

print(combined)

#Interpolation
new_string = "blah blah blah %s %s" % (message, name)
print(new_string)