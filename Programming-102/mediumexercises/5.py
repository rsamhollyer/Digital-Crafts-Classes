def leet_machine(sentence):
    sentence = sentence.upper()
    sentence = sentence.replace("A", "4").replace("E","3").replace("G","6").replace("I","1").replace("O","0").replace("S","5").replace("T","7")
    return sentence.capitalize()

print(leet_machine("I am a leet programmer"))
    