dupe_list = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]
de_dupe = []

for number in dupe_list:
    if number not in de_dupe:
        de_dupe.append(number)
print(de_dupe)