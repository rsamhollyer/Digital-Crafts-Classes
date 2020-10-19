# Even Numbers
a = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]

evens = []
for number in a:
    if number % 2 == 0:
        evens.append(number)
print(evens)