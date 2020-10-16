import random
import math


play_again = "yes"

while play_again == 'yes':
    
    guess, counter, secret_number = (None, 0, random.randint(1,10))
    print (secret_number)
        
    while guess != secret_number and counter < 5:
        
        while counter < 5:
            
            counter += 1
            
            try:
                guess = int(input("Please enter a number. \n"))
                break
            except ValueError:
                print("You did not enter a number")
                guess = 0
                
        if guess == secret_number:
            print("Yes, you win")
        elif guess < secret_number:
            print("Nope, too low")
        else:
            print("Nope, too high")


    if counter >= 5:
        print("You guessed too many times ")

    play_again = input("Do you want to play again? \n")
