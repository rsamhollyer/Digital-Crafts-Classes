#1
string_one = "I am in class"
string_two = " And it is good"
string_combined = string_one + string_two
print(string_combined)

#2
haiku = "monday, a time for...\nmonday is a day to do... \ni don't like mondays"
print(haiku)

#3
name = "Sam"
today = "Tuesday"
emotion = "Saucesome"

print("Hello " +name + ",I hope your " +today +" is going well. I'm personally " +emotion +".")

print("Hello %s, I hope that your %s is going well. I'm personally %s" % (name,today,emotion))

print(f"Hello {name}, I hope your {today} is going well. I'm personally {emotion}.")