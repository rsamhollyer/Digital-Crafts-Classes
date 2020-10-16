# Guess a Number. V2
random_number = 5
print("I am thinking of a number from 1 to 10")

your_guess = int(input("What's the number? \n"))

while random_number != your_guess:
    if your_guess < random_number:
        print(f"Nope, {your_guess} is too low")
        your_guess = int(input("Try again \n"))
    elif your_guess > random_number:
        print(f"Nope, {your_guess} is too high")
        your_guess = int(input("Try again \n"))
else:
    print("Yes! You win!")
    