from random import randrange

number = int(input("Choose a random number of pizza slices!\n"))
random_number = randrange(100)
print(f"The perfect number of pizza slices {random_number}")

if number > random_number:
    print("THAT'S A LOT OF PIZZA!")
elif number == random_number:
    print("THAT'S PERFECT") 
else:
    print("MOAR")