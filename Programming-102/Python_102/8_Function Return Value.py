#1
def concat(term1, term2):
    return (f"{term1} {term2}")

check = concat("dog", "run")
print(check)

#2
something = ["I", "am", "tired"]
something2 = ["You", "are", "superduper"]
something3 = ["We", "have", "soft-tacos"]

def total_count(list):
    new = "".join(list)
    new = len(new)
    return {
        "list_length": len(list),
        "total_chars": new
    }

print(total_count(something))
print(total_count(something2))
print(total_count(something3))