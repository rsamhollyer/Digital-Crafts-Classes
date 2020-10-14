name = input("what is your name?\n")
length = len(name)

if len(name) > 3:
    print('Your name is long enough')
    if len(name) > 15:
        #new block level
        print("That's way to long partner")
    else:
        print(f"Welcome {name}")
#back out to the main block level
else:
    print(f'{length} is too few characters')


