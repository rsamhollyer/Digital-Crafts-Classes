X = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
]

Y = [
    [-1,-2,-3],
    [-4,-5,-6],
    [-7,-8,-9],
    [-10,-11,-12]
]

result = []

for i in range (len(X)):
    result.append([])
    for j in range (len(X[0])):
        result[i].append(X[i][j] + Y[i][j])

print(result)
