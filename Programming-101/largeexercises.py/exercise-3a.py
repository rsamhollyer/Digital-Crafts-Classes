# Guess a Number 
random_number = 5
print("I am thinking of a number from 1 to 10")

your_guess = int(input("What's the number? \n"))

while random_number != your_guess:
    your_guess = int(input("Nope, try again \n"))
else:
    print("Yes! You win!")
    