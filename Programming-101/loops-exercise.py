#1
# i = 0
# while i < 11:
#     print(i)
#     i += 1

#2
# j = 10
# while j >= 0:
#     print(j)
#     j -= 1

#3
user_name = ""
pass_word = ""
counter = 0

while user_name != "sam" and pass_word != "dog":
    user_name = input("Please enter your username \n").lower()
    pass_word = input("Please enter your password \n").lower()
    counter += 1
    if counter > 3:
        print("You have failed to enter correct information too many times")
        break