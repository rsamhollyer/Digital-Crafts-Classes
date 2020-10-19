#1
movie_stars = ["Oldman", "Ronan", "Hardy"]
index = 0

while index < len(movie_stars):
    print(f"{index +1}. {movie_stars[index]}")
    index += 1

#2

movie_stars = ["Oldman", "Ronan", "Hardy"]
for bananas in movie_stars:
    print(f"{movie_stars.index(bananas) + 1}. {bananas}")

#3
numbers = [1, 2, 3, 4, 5]
print(sum(numbers))

sum = 0
for i in numbers:
    sum += i

print(sum)