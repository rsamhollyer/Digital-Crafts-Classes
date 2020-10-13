print(1 == 2) #always evaluates to True or False, nothing else


name = "Sam"

print(name != "George")

print(name == "Sam")

print(name > "a") #Capitalized items come 'first' and are less. It's weird but comes first is lower

if 1 > 3:
    print("This will not be printed")
else:
    print("this will be printed")
    
if False:
    print("When will this run") #never will run because False is False and will not run a conditional

if True:
    print("When is True falsey?") #Never, this will always run

did_something = True

if did_something:
    print("check")

if None:
    print("None is never printed")


##Falsey Statements
# None
# False
# 0
# ""
# []
# {}
