#1
class Vehicle:
    def __init__(self, category, wheels = 4):
        self.category = category
        self.wheels = wheels

sedan = Vehicle("sedan")
truck =Vehicle("truck")
jeep = Vehicle("jeep")
hoopty = Vehicle("hoopty")
motorcycle = Vehicle("motorcycle", 2)

