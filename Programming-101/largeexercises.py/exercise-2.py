# Find the Factor

def factor(x):
    print(f"The factors of {x} are:")
    for i in range (1, x +1):
        if x % i == 0:
            print(i)

number = int(input("Please enter your number \n"))
factor(number)