pet_name = input("Please tell me what you'd name your next pet. \n")
name_length = len(pet_name)

# if name_length > 3:
#     print(f"AWW, sweet {pet_name}.")
#     if pet_name == "Shadow":
#         print("El Gato Diablo")
#     if pet_name == "Daisy":
#         print("Good Dog!")
# else:
#     print(f"{pet_name}, while cute, is too short. Please choose another name!")


if pet_name == "Daisy":
    print("Good Dog")
elif pet_name == "Shadow":
    print("El Gato Diablo")  
elif name_length > 3:
    print(f"Aww, sweet {pet_name}")
else:
    print(f"While {pet_name} is a cute name, it is much too short. Please enter another name.")