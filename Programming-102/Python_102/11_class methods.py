#1
class Vehicle:
    def __init__(self, category, wheels, speed, top_speed, position, acceleration):
        self.category = category
        self.wheels = wheels
        self.speed = speed
        self.top_speed = top_speed
        self.position = position
        self.acceleration = acceleration
        
    def move(self):
        self.position = self.position + self.speed
    
    def accelerate(self):
        self.speed = self.speed + self.acceleration
        if self.speed > self.top_speed:
            self.speed = self.top_speed
        self.move()




sedan = Vehicle("sedan", 4, 0, 100, 0, 5)
truck =Vehicle("truck", 4, 0, 115, 0, 6)
jeep = Vehicle("jeep", 4, 0, 105, 0, 8)
hoopty = Vehicle("hoopty", 4, 0, 95, 0, 5)
motorcycle = Vehicle("motorcycle", 2, 0, 145, 0, 10)



for cars in [sedan,truck,jeep,hoopty,motorcycle]:
    i = 0
    
    while i <= 20:
        cars.accelerate()
        # sedan.move()
        print(f"{cars.category}")
        print(cars.position)
        print(f" I'm going {cars.speed} speed!!")
        i+=1
