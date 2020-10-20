#1
dictionary = {
    "first_name": "sam",
    "last_name": "hollyer",
    "age":"37",
    
}


#2
person = {
    "first_name": "sam",
    "last_name": "hollyer",
    "age":"37",
    "hair_color":"brown" 
}

for key in person:
    print(f"{key}: {person[key]}")
    print()
print(f"Hey there {person['first_name']} {person['last_name']}. You are {person['age']} years old and have {person['hair_color']}hair.")

#3
people = [
    {"name": "john",
    "phone_number": "1234567890",
    "email": "john@example"
    },
    
    {"name": "bob",
    "phone_number": "1234567891",
    "email": "bob@example"
    
    },
    {"name": "frank",
    "phone_number": "1234567892",
    "email": "frank@example"
        
    }
]
