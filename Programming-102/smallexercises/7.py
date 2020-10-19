#Multiply List
import math

a = [1,2,3,4 , 5 , 6 , 7 , 8 , 9]
# print(math.prod(a))

# product = 1
# for i in a:
#     product *= i
# print(product)

factor = 4

b = []

for number in a:
    b.append(number * factor)
print(b)