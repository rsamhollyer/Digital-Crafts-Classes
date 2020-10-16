# Triangle Numbers

# your_number = int(input("Please enter your Triangle Number"))
# triangle_number = (your_number*(your_number+1))/2
# print(triangle_number)
triangle_nums = []

for i in range(1,101):
    print((i * (i + 1))/2)
    triangle_nums.append(i)

print(triangle_nums)