#1
shopping_list =[ 
["lettuce", "onions","tomatoes"],
["cheese", "milk", "eggs"],
["beer", "wine", "liquor"]
]
# for item in shopping_list:
#     print(item)

# #2
list_categories = ["Produce", "Cold Items", "Alcohol"]
index = 0
for items in list_categories:
    print(f"{index + 1}. {items}")
    for stuff, groups  in enumerate(shopping_list[index],1):
        print(f"\t{stuff}. {groups}")
    index += 1
