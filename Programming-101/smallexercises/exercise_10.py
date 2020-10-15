square = int(input("How big is the square? \n"))
icon = input("Please enter any one character \n")
if len(icon) > 1:
    icon = input("Please enter any one character \n")

i = 0
while i < square:
    print(f"{icon}" * square)
    i+=1
