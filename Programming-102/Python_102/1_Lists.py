#1
favorite_foods = ["Pizza", "Chicken 65", "Plov"]
print(favorite_foods[0])

print(favorite_foods[-1])

#2
things = ["Coffee Cup", "Speaker", "Monitor", "Keyboard"]
index = 0

while index < len(things):
    print(f"{index}. {things[index]}")
    index += 1 


for item in things:
    print(f"{index}. {item}")
    index += 1



#3
while True:
    
    while True:
        try:
            prompt = int(input("Choose which item is most interesting (1 - 4) \n"))
            if prompt <= len(things) and prompt >= 0:
                break
            else:
                print("You must select a number 1 - 4")
            
        except ValueError:
            print("You entered a non-integer.")


    if prompt == 1:
        print(f"You chose a {things[prompt-1]}. You must like coffee!")
    elif prompt == 2:
        print(f"You chose a {things[prompt - 1]}. You must like hearing stuff")
    elif prompt == 3:
        print(f"You chose a {things[prompt - 1]}. You must like seeing things.")
    else:
        print(f"You chose a {things[prompt - 1]}. You must like typing")
    break