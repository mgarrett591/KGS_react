import pyKGS_Numbers 
import pyKGS_IrregularLists
import enum

InitialConsonants = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]
MedialVowels = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"]
FinalConsonants = [" ", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ"]

class LetterPosition(enum.Enum):
    Initial = 0
    Medial = 1
    Final = 2

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

def TryIrregularFCS(VerbStem, IFCS):
    verb = VerbStem + '다'
    Final = GetLetterFromFinalSyllable(LetterPosition.Final, VerbStem)
    #
    # ㄷ irregular verbs
    if(Final == 'ㄷ' and verb in pyKGS_IrregularLists.ㄷIrregularList):
        return SetLetterInFinalSyllable(LetterPosition.Final, VerbStem, 'ㄹ') + '어'
    #
    # ㅂ irregular verbs
    elif(Final == 'ㅂ' and verb in pyKGS_IrregularLists.ㅂIrregularList):
        return SetLetterInFinalSyllable(LetterPosition.Final, VerbStem, ' ') + '워'
    #
    #ㄹ irregular verbs, handled in EvaluateParticle
    #
    #르 irregular verbs
    elif (VerbStem[-1] == '르' and not verb in pyKGS_IrregularLists.르RegularList):
        if(OhAh(VerbStem)):
            return SetLetterInFinalSyllable(LetterPosition.Final, VerbStem, 'ㄹ') + '라'
        else:
            return SetLetterInFinalSyllable(LetterPosition.Final, VerbStem, 'ㄹ') + '러'
    #
    #ㅅ irregular verbs
    elif(Final == 'ㅅ' and verb in pyKGS_IrregularLists.ㅅIrregularList):
        return "ㅅ irregular verbs not implmented"
    #
    #으 irregular verbs
    elif(Final == 'ㅡ' and IFCS and verb in pyKGS_IrregularLists.으IrregularList):
        return VerbStem
    #
    #Regular
    return None

def FCS(Verb, SpecialFCS):
    stem = Stem(Verb)
    if(stem == "" or not Verb[-1] == '다'):
        return "?"
    #
    IrregularFCS = TryIrregularFCS(stem, SpecialFCS)
    if(IrregularFCS != None):
        return IrregularFCS
    #
    vowel = GetLetterFromFinalSyllable(LetterPosition.Medial, stem)
    if(stem[-1] == '하'):
        return Hstem(Verb) + '해'
    elif(vowel == 'ㅗ'):
        if(Batchim(stem)):
            return stem + '아'
        else:
            return SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅘ')
    elif(vowel == 'ㅏ'):
        if(Batchim(stem)):
            return stem + '아'
        else:
            return stem
    elif(vowel == 'ㅓ' or vowel == 'ㅐ' or vowel == 'ㅔ'): 
        if(Batchim(stem)):
            return stem + '어'
        else:
            return stem
    elif(vowel == 'ㅣ'): 
        if(Batchim(stem)):
            return stem + '어'
        else:
            return SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅕ')
    elif(vowel == 'ㅜ'):
        if(Batchim(stem)):
            return stem + '어'
        else:
            return SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅝ')
    elif(vowel == 'ㅡ'):
        if(not Batchim(stem)):
            if(OhAh(stem)):
                return SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅏ')
            else:
                return SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅓ')
        return stem + '어'
    elif(vowel == 'ㅟ' or vowel == 'ㅚ'):
        return stem + '어'
    #
    #
    return stem + '어'

def Adjective(Verb):
    stem = Stem(Verb)
    if (stem == ""):
        return "?"
    #
    if (stem[-1] == '있' or stem[-1] == '없'):
        return stem + '는'
    #
    Final = GetLetterFromFinalSyllable(LetterPosition.Final, stem)
    if(Final == 'ㄹ'):
        return SetLetterInFinalSyllable(LetterPosition.Final, stem, 'ㄴ')
    elif (Final == 'ㅂ' and Verb in pyKGS_IrregularLists.ㅂIrregularList):
        return SetLetterInFinalSyllable(LetterPosition.Final, stem, ' ') + '운'
    #
    if(Batchim(stem)):
        return stem + '은'
    return SetLetterInFinalSyllable(LetterPosition.Final, stem, 'ㄴ')

def EvaluateVariableTableKey(VariableTable, key):
    exp = key.split('.')
    if(len(exp) == 2 and exp[0] in VariableTable.keys()):
        control = exp[1].lower()
        otherValue = VariableTable[exp[0]]
        if(control == "adj"):
            return Adjective(otherValue)
        elif(control == "stem"):
            return Stem(otherValue)
        elif(control == "hstem"):
            return Hstem(otherValue)
        elif(control == "specialfcs"):
            return FCS(otherValue, True)
        elif(control == "fcs"):
            return FCS(otherValue, False)
        elif(control == "native"):
            return pyKGS_Numbers.Native(otherValue)
        elif(control == "sino"):
            return pyKGS_Numbers.Sino(otherValue)
        elif(control == "item"):
            return pyKGS_Numbers.NativeCounter(otherValue)
        elif(control == "animal"):
            return pyKGS_Numbers.NativeCounter(otherValue)
        elif(control == "cup"):
            return pyKGS_Numbers.NativeCounter(otherValue)
        elif(control == "bottle"):
            return pyKGS_Numbers.NativeCounter(otherValue)
        elif(control == "slice"):
            return pyKGS_Numbers.NativeCounter(otherValue)
        elif(control == "book"):
            return pyKGS_Numbers.NativeCounter(otherValue)
        elif(control == "car"):
            return pyKGS_Numbers.NativeCounter(otherValue)
        elif(control == "action"):
            return pyKGS_Numbers.NativeCounter(otherValue)
        elif(control == "order"):
            return pyKGS_Numbers.Order(otherValue)
        elif(control == "clothing"):
            return pyKGS_Numbers.NativeCounter(otherValue)
        elif(control == "people"):
            return pyKGS_Numbers.NativeCounter(otherValue)
        elif(control == "bigwig"):
            return pyKGS_Numbers.NativeCounter(otherValue)
        elif(control == "serving"):
            return pyKGS_Numbers.NativeCounter(otherValue)
        elif(control == "second"):
            return pyKGS_Numbers.Sino(otherValue)
        elif(control == "minute"):
            return pyKGS_Numbers.Sino(otherValue)
        elif(control == "hour"):
            return pyKGS_Numbers.NativeCounter(otherValue)
        elif(control == "day"):
            return pyKGS_Numbers.Sino(otherValue)
        elif(control == "month"):
            return pyKGS_Numbers.Month(otherValue)
        elif(control == "year"):
            return pyKGS_Numbers.Sino(otherValue)
        elif(control == "age"):
            return pyKGS_Numbers.NativeCounter(otherValue)
        elif(control == "$"):
            return pyKGS_Numbers.Sino(otherValue)
        elif(control == "₩"):
            return pyKGS_Numbers.Sino(otherValue)
    elif (exp[0].lower() == "unit"):
        control = exp[1].lower()
        if(control == "item"):
            return "개"
        elif(control == "animal"):
            return "마리"
        elif(control == "cup"):
            return "잔"
        elif(control == "bottle"):
            return "병"
        elif(control == "slice"):
            return "조각"
        elif(control == "book"):
            return "권"
        elif(control == "car"):
            return "대"
        elif(control == "action"):
            return "번"
        elif(control == "order"):
            return "번째"
        elif(control == "clothing"):
            return "벌"
        elif(control == "people"):
            return "명"
        elif(control == "bigwig"):
            return "분"
        elif(control == "serving"):
            return "인분"
        elif(control == "second"):
            return "초"
        elif(control == "minute"):
            return "분"
        elif(control == "hour"):
            return "시"
        elif(control == "day"):
            return "일"
        elif(control == "month"):
            return "월"
        elif(control == "year"):
            return "년"
        elif(control == "age"):
            return "살"
        elif(control == "$"):
            return "달러"
        elif(control == "₩"):
            return "원"
        elif(control == "list"):
            return "item, animal, cup, bottle, slice, book, car, action, order, clothing, people, bigwigs, servings, second, minute, hour, day, month, year, age, $, ₩";
    #
    if(key.lower() in VariableTable.keys()):
        return VariableTable[key]
    #
    return "{" + key + "}"

def EvaluateParticle(PreviousWord, rule):
            if (rule == "은/는"):
                if(Batchim(PreviousWord)):
                    return PreviousWord + "은"
                return PreviousWord + "는"
            if(rule == "ㄹ/을"):
                #ㅂ iregular case
                if(GetLetterFromFinalSyllable(LetterPosition.Final ,PreviousWord) == 'ㅂ' and pyKGS_IrregularLists.ㅂIrregularList.Contains(PreviousWord.split(" ")[-1])):
                    return SetLetterInFinalSyllable(LetterPosition.Final, PreviousWord, ' ') + "울"
                
                if (not NonㄹBatchim(PreviousWord)):
                    return SetLetterInFinalSyllable(LetterPosition.Final, PreviousWord, 'ㄹ')
                return PreviousWord + "을"
            #
            if (rule == "을/를"):
                if(NonㄹBatchim(PreviousWord)):
                    return PreviousWord + "을"
                return PreviousWord + "를"
            #
            if (rule == "이/가"):
                if(NonㄹBatchim(PreviousWord)):
                    return PreviousWord + "이"
                return PreviousWord + "가"
            #
            if (rule == "과/와"):
                if(NonㄹBatchim(PreviousWord)):
                    return PreviousWord + "과"
                return PreviousWord + "와"
            #
            if(rule == "랑이/랑"):
                if(NonㄹBatchim(PreviousWord)):
                    return PreviousWord + "랑이"
                return PreviousWord + "랑"
            #
            if (rule == "야/아"):
                if(NonㄹBatchim(PreviousWord)):
                    return "야"
                return PreviousWord + "아"
            #
            if (rule == "이에/예"):
                if(NonㄹBatchim(PreviousWord)):
                    return PreviousWord + "이에"
                return PreviousWord + "예"
            #
            if(rule == "으"):
                if(NonㄹBatchim(PreviousWord)):
                    return PreviousWord + "으"
                return PreviousWord + ""
            #
            if(rule == "ㅆ"):
                return SetLetterInFinalSyllable(LetterPosition.Final, PreviousWord, 'ㅆ')
            #
            #('으로 / 로)
            #
            return PreviousWord + "[" + rule + "]"
