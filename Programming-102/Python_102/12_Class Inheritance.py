

# Previous class lesson without print text
class Mob:
    def __init__(self, name, health = 10, attack_power = 2):
        self.name = name
        self.health = health
        self.attack_power = attack_power 

    def get_hit(self, power):
        self.health = self.health - power            

    def attack(self, enemy):           
        enemy.get_hit(self.attack_power)

# #not very useful but valid
# class Hero(Mob):#Hero class is a sublclass of Mob
#     pass

# hero = Hero("Sir Galahand")
# print(hero.name)

# class Hero(Mob):
#     # method only available in the Hero Subclass
#     def yell(self):
#         print("I %s, say to thou villian. Prepare to die!" % self.name)

# hero = Hero("Sir Galahand")
# bad_guy = Mob("Evil McEvil")
# hero.yell()
# bad_guy.yell()#Error!
class Hero(Mob):
    #overriding __init__
    def __init__(self):
        #Can repeate for every item
        self.name = "Sir Galahand"
        self.health = 22
        self.attack_power = 3
        self.defence = 1

    #overriding get_hit
    def get_hit(self, power):
        self.health = self.health - (power-self.defence)
    
    ...#yell method

hero = Hero()#all arguments default
bad_guy = Mob('Evil McEvil', 10)
print(hero.name)#added automatically 
bad_guy.attack(hero)
print(hero.health)#health only went down by one because of defence
# class Hero(Mob):
#     def __init__(self):
#         # Calling super
#         #self is not the first arg!
#         super().__init__("Sir Galahand", 22, 3)
#         #calls the init from the parent 
#         self.defence = 1
    
#     def get_hit(self, power):
#         super.get_hit(power-self.defence)
#         print("Ha Ha my defense is strong!")