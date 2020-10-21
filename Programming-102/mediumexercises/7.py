alpha = list("abcdefghijklmnopqrstuvwxyz")

code = "lbh zhfg hayrnea jung lbh unir yrnearq"
# print(code)
# print()
# code = code.replace(" ","")
# print(code)
# print()
# code = list(code)
# print(code)
# print()
def decrypt(code):
    result = []
    decode = code.replace(" ","")
    decode = list(decode)
    # print(decode)
    for i in decode:
        idx = alpha.index(i)
        idx -= 13
        while idx < 0:
            idx += 26
        result.append(alpha[idx].upper())
    return result
print(decrypt(code))