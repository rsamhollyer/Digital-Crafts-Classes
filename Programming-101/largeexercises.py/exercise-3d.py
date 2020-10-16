# Guess the number V4
import random
random_number = random.randint(1,10)
print(random_number)
guess_counter = 0

# print(random_number) - to check if valid
print("I am thinking of a number from 1 to 10")

your_guess = int(input("What's the number? \n"))

while random_number != your_guess:
    guess_counter += 1
    if guess_counter > 2:
        print(f"Sorry, you lose. The number was {random_number}")
        break
    if your_guess < random_number:
        print(f"Nope, {your_guess} is too low")
        your_guess = int(input("Try again \n"))
    elif your_guess > random_number:
        print(f"Nope, {your_guess} is too high")
        your_guess = int(input("Try again \n"))
if random_number == your_guess: 
    print("Yes! You win!")
