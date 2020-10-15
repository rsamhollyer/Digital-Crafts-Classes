square = int(input("How big is the square? \n"))
icon = input("Please enter any one character \n")

while True:
    if len(icon) > 1:
        icon = input("Please enter any one character \n")
    break

i = 0
while i < square:
    print(f"{icon}" * square)
    i += 1
