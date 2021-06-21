from han_lib import Turn

NativeOnes = ["", "하나", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉"]
NativeTens = ["", "열", "스물", "서른", "마흔", "쉰", "예순", "일흔", "여든", "아흔"]

NativeCounterOnes = ["", "한", "두", "세", "네", "다섯", "여섯", "일곱", "여덟", "아홉"]

SunoOnes = ["","일","이", "삼", "사", "오", "육", "칠", "팔", "구"]
NoIll = ["", "", "이", "삼", "사", "오", "육", "칠", "팔", "구"]

def TryParse(number):
    return Turn(number.isnumeric(), int(number), None)

def Native(number):
    value = TryParse(number)
    if(value != None and value > 0 and value < 100):
        return NativeTens[int(value / 10)] + NativeOnes[int(value % 10)]                
    return Sino(number)

def Order(number):
    if (number == "1"):
        return "첫"
    return NativeCounter(number)

def Month(number):
    if(number == "6"):
        return "유"
    elif(number == "10"):
        return "시"
    return Sino(number)

def NativeCounter(number):
    if(number == "20"):
        return "스무"
    value = TryParse(number)
    if (value != None and value > 0 and value < 100):
        return NativeTens[int(value / 10)] + NativeCounterOnes[int(value % 10)]
    return Sino(number)

def Digits(number):
    value = number;   
    value = value.replace('0', '공')
    value = value.replace('1', '일')
    value = value.replace('2', '이')
    value = value.replace('3', '삼')
    value = value.replace('4', '사')
    value = value.replace('5', '오')
    value = value.replace('6', '육')
    value = value.replace('7', '칠')
    value = value.replace('8', '팔')
    value = value.replace('9', '구')
    return value

def Sino(number):
    if(number == "0"):
        return "공"
    value = TryParse(number)
    if (value != None and value <= 1000000000000):
        if (value == 1000000000000):
            return "일조"
        return 억(value) + 만(value) + 천(value) + 백(value) + 십(value) + 일(value);        
    return Digits(number)

def 일(value):
    return SunoOnes[int(value % 10)]

def 십(value):
    if(int((value % 100) / 10) == 0):
        return ""
    return NoIll[int((value % 100) / 10)] + "십"

def 백(value):
    if (int((value % 1000) / 100) == 0):
        return ""
    return NoIll[int((value % 1000) / 100)] + "백"

def 천(value):
    if (int((value % 10000) / 1000) == 0):
        return ""
    return NoIll[int((value % 10000) / 1000)] + "천"

def 만(value):
    man = (value % 100000000) / 10000
    if (int(man) == 0):
        return ""
    return 천(man) + 백(man) + 십(man) + NoIll[int(man % 10)] + "만" + SpaceIfNotDevisableBy(value, 10_000)

def 억(value):
    oek = (value % 1_000_000_000_000) / 100_000_000
    if (int(oek) == 0):
        return ""
    return 천(oek) + 백(oek) + 십(oek) + 일(oek) + "억" + SpaceIfNotDevisableBy(value, 100_000_000)

def SpaceIfNotDevisableBy(value, devisor):
    if(int(value % devisor) != 0):
        return " "
    return ""