#Vector Multiplication

a = [1, 2, 3]
b = [4, 5, 6]
c = []

for num1, num2 in zip(a,b):
    c.append(num1 * num2)
print(c)