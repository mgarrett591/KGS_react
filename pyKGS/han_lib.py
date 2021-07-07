import enum

InitialConsonants = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]
MedialVowels = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"]
FinalConsonants = [" ", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ"]

class LetterPosition(enum.Enum):
    Initial = 0
    Medial = 1
    Final = 2

def Turn(condition, ifTrue, ifFalse):
    if(condition):
        return ifTrue
    return ifFalse

def Batchim(Word):
    if(Word == ""):
        return False
    codepoint = ord(Word[-1])
    return int(((codepoint - 44032) % 588) % 28) != 0

def NonㄹBatchim(Word):
    if (Word == ""):
        return False
    codepoint = Word[-1]
    codepoint = int(((codepoint - 44032) % 588) % 28)
    return codepoint != 0 and codepoint != 8

def OhAh(Word):
    SecondToLastVowel = GetLetterFromFinalSyllable(LetterPosition.Medial, Stem(Word))
    return SecondToLastVowel == 'ㅗ' or SecondToLastVowel == 'ㅏ'

def IndexInRange(RangeArray, index):
    return index >= 0 and index < len(RangeArray)

def GetLetterFromFinalSyllable(LP, Word):
    if (Word == ""):
        return ' '
    codepoint = ord(Word[-1])
    codepoint -= 44032
    #
    InitialConsonant = codepoint / 588
    if(LP == LetterPosition.Initial and IndexInRange(InitialConsonants, InitialConsonant)):
        return InitialConsonants[int(InitialConsonant)]
    codepoint %= 588
    #
    MedialVowel = codepoint / 28
    if(LP == LetterPosition.Medial and IndexInRange(MedialVowels, MedialVowel)):
        return MedialVowels[int(MedialVowel)]
    FinalConsonant = codepoint % 28
    if(LP == LetterPosition.Final and IndexInRange(FinalConsonants, FinalConsonant)):
        return FinalConsonants[int(FinalConsonant)]
    return ' '

def Trylookup(CharArray, letter):
    CharIndex = CharArray.index(letter)
    assert CharIndex != -1
    return CharIndex

def SetLetterInFinalSyllable(LP, Word, NewLetter):
    if (Word == ""):
        return Word
    codepoint = ord(Word[-1])
    codepoint -= 44032
    #
    InitialConsonant = int(codepoint / 588)
    codepoint %= 588
    #
    MedialVowel = int(codepoint / 28)
    FinalConsonant = codepoint % 28
    #
    if(LP == LetterPosition.Initial):
        InitialConsonant = Trylookup(InitialConsonants, NewLetter)
    elif(LP == LetterPosition.Medial):
        MedialVowel = Trylookup(MedialVowels, NewLetter)
    elif(LP == LetterPosition.Final):
        FinalConsonant = Trylookup(FinalConsonants, NewLetter)
    #
    return Stem(Word) + chr(int((InitialConsonant * 588 + MedialVowel * 28 + FinalConsonant) + 44032))

def Stem(Verb):
    if(Verb == ""):
        return ""
    return Verb[0:-1]

def Hstem(Verb):
    stem = Stem(Verb)
    if (stem == ""):
        return ""
    elif (stem[-1] == '하'):
        return Stem(stem) 
    else:
        return stem
