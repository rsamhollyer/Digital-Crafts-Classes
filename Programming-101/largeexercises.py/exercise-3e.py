#Guess the Number game V5

import random


def main():
    number = int(input("I'm thinking of a number between 1 and 10. Can you guess what it is? \n"))
    guess(number)


def guess(number1):
    random_number = random.randint(1,10)
    correct = False
    
    while not correct:
        if number1 > random_number:
            print(f"{number1} is too high. Guess again")
        elif number1 < random_number:
            print(f"{number1} is too low. Guess again")
        elif number1 == random_number:
            break
        number1 = input("What number do you guess? \n")
    
    if number1 == random_number:
        again = input("Great job! Would you like to play again? Y/N \n")
        if again == 'y' or again == 'yes':
            main()

main()