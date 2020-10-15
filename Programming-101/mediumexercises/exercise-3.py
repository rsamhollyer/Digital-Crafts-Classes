# How many coins 
answers = ["yes","y","no",]
coins = 0
print(f"You have {coins} coins.")


while True:
    try:
        more = input("Would you like another coin? \n Yes or No: ")
        more = more.lower()
    except: 
        print("Please enter 'yes' or 'no', only.")
    if more == 'yes':
        coins += 1
        print (f"You have {coins} coins.")
    else:
        print("Please enter 'yes' or 'no', only.")
        break