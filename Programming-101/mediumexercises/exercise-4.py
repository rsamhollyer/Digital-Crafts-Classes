# Print Box
height = 0
width = 0

while True:
    try:
        height = int(input("Height? \n"))
        width = int(input("Width? \n"))
        break
    except ValueError:
        print("Please enter an integer only")

print("* "  * width)

while height > 0:
    print(f"* " + " " * (width) + " *")
    height -= 1

print("* "  * width)