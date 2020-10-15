# Multiplication Tables
your_number = 1
multiples = [1,2,3,4,5,6,7,8,9,10]

# your_number = int(input("Please enter a number 1 - 10 \n"))
# while True:
#     if your_number < 1 or your_number > 10:
#         your_number = int(input("Please enter a number 1 - 10 \n"))
#     else:
#         break

while your_number <= 10:
    for x in multiples:
        product = your_number * x
        print("%d X %d = %d " %(your_number, x, product))
    print("...")
    your_number += 1    