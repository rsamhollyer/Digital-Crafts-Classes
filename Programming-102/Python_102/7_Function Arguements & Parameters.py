# #1
# def product(number1, number2):
#     if type(number1) is float and type(number2) is float:
#         print(float(number1 * number2))
#     else:    
#         print("Enter a valid number")


# product(12.3124514,42.523)
# product(45.43,983.42)
# product(96763.3,4234.52354)
# product(96763.3,"a")

# # 2
# def three_arguements(title, genre, year):
#     print(f" 1. Title: {title}\n 2. Genre: {genre}\n 3. Year: {year}")
# three_arguements("a","b","c")

# 3
thingy = {
    "Title": "a",
    "Genre": "b",
    "Year": 123
}

def one_arguments(one):
    for idx,key in enumerate(one):
        print(f"{idx + 1}. {key}: {one[key]}")

one_arguments(thingy)

