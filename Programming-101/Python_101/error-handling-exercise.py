#1
# your_number = input("Please enter a number\n")

# try:
#     your_number = int(your_number)
#     while your_number >= 0:
#         print(your_number)
#         your_number -= 1
# except ValueError:
#     print("Please enter a valid number")

#2

number_one = input("Please enter a number \n")
number_two = input("Please enter another number \n")

try:
    number_one = int(number_one)
    number_two = int(number_two)
    sum = number_one + number_two
    diff = number_one - number_two
    prod = number_one * number_two
    quot = number_one / number_two
    print(sum)
    print(diff)
    print(prod)
    print(quot)
except ZeroDivisionError:
    print("You cannot divide by zero")
except ValueError:
    print("You must enter a valid number")