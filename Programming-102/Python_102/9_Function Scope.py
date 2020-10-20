# #1
name = "something"

def function(message):
    return (f"{name}, {message}")

print(function("you are bloopy."))
print(function("am I lost?"))
print(function("where's the blurp"))

#2
name = 'blarggle'
print(name)
print("****************")
def rename(stuff):
    global name
    name = stuff
    return name

print(rename("hurrgle"))
print(rename("zergle"))
print(rename("plurggle"))