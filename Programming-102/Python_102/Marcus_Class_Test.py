class Vehicle:
    def __init__(self, category, top_speed, acceleration, position=0, speed=0, wheels=4):
        self.category = category
        self.speed = speed
        self.top_speed = top_speed
        self.position = position
        self.acceleration = acceleration
        self.wheels = wheels
    def move(self):
        self.position += self.speed
        # print(f"{self.speed}")
        print(f"{self.category} is moving. New position is {self.position}")
    def accelerate(self):
        potential = self.speed + self.acceleration
        if self.top_speed >= potential:
            self.speed = self.speed + self.acceleration
            print("accelerating")
        else:
            print("Top Speed reached, no more acceleration left.")
i = 0
motorcycle = Vehicle("Ducati", 12, 3)
while i <= 20:
    motorcycle.accelerate()
    motorcycle.move()
    i += 1