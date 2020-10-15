# Tip Calculator
bill = round(float(input("Please enter your bill amount. \n")),2)
tip = 0

while True:
    try:
        service = int(input("Please rate your service on a scale of 1 - 3, 1 being bad and 3 being good \n"))
    except ValueError:
        print("Please enter a number 1 - 3")
    else:
        if 1 <= service <= 3:
            break
        else:
            print("Out of range, please enter a number 1 - 3")
print("Thank you!")


if service == 1:
    tip = .1
elif service == 2:
    tip = .15
else:
    tip = .2

tip_amount = round(tip * bill,2)
total_bill = round(bill *(1+tip),2)

print(tip_amount)
print(total_bill)