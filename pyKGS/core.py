import num_lib 
import irregularLists
import han_lib

def TryIrregularFCS(VerbStem, IFCS):
    verb = VerbStem + '다'
    Final = han_lib.GetLetterFromFinalSyllable(han_lib.LetterPosition.Final, VerbStem)
    #
    # ㄷ irregular verbs
    if(Final == 'ㄷ' and verb in irregularLists.ㄷIrregularList):
        return han_lib.SetLetterInFinalSyllable(han_lib.LetterPosition.Final, VerbStem, 'ㄹ') + '어'
    #
    # ㅂ irregular verbs
    elif(Final == 'ㅂ' and verb in irregularLists.ㅂIrregularList):
        return han_lib.SetLetterInFinalSyllable(han_lib.LetterPosition.Final, VerbStem, ' ') + '워'
    #
    #ㄹ irregular verbs, handled in EvaluateParticle
    #
    #르 irregular verbs
    elif (VerbStem[-1] == '르' and not verb in irregularLists.르RegularList):
        if(han_lib.OhAh(VerbStem)):
            return han_lib.SetLetterInFinalSyllable(han_lib.LetterPosition.Final, VerbStem, 'ㄹ') + '라'
        else:
            return han_lib.SetLetterInFinalSyllable(han_lib.LetterPosition.Final, VerbStem, 'ㄹ') + '러'
    #
    #ㅅ irregular verbs
    elif(Final == 'ㅅ' and verb in irregularLists.ㅅIrregularList):
        return "ㅅ irregular verbs not implmented"
    #
    #으 irregular verbs
    elif(Final == 'ㅡ' and IFCS and verb in irregularLists.으IrregularList):
        return VerbStem
    #
    #Regular
    return None

def FCS(Verb, SpecialFCS):
    stem = han_lib.Stem(Verb)
    if(stem == "" or not Verb[-1] == '다'):
        return "?"
    #
    IrregularFCS = TryIrregularFCS(stem, SpecialFCS)
    if(IrregularFCS != None):
        return IrregularFCS
    #
    vowel = han_lib.GetLetterFromFinalSyllable(han_lib.LetterPosition.Medial, stem)
    if(stem[-1] == '하'):
        return han_lib.Hstem(Verb) + '해'
    elif(vowel == 'ㅗ'):
        if(han_lib.Batchim(stem)):
            return stem + '아'
        else:
            return han_lib.SetLetterInFinalSyllable(han_lib.LetterPosition.Medial, stem, 'ㅘ')
    elif(vowel == 'ㅏ'):
        if(han_lib.Batchim(stem)):
            return stem + '아'
        else:
            return stem
    elif(vowel == 'ㅓ' or vowel == 'ㅐ' or vowel == 'ㅔ'): 
        if(han_lib.Batchim(stem)):
            return stem + '어'
        else:
            return stem
    elif(vowel == 'ㅣ'): 
        if(han_lib.Batchim(stem)):
            return stem + '어'
        else:
            return han_lib.SetLetterInFinalSyllable(han_lib.LetterPosition.Medial, stem, 'ㅕ')
    elif(vowel == 'ㅜ'):
        if(han_lib.Batchim(stem)):
            return stem + '어'
        else:
            return han_lib.SetLetterInFinalSyllable(han_lib.LetterPosition.Medial, stem, 'ㅝ')
    elif(vowel == 'ㅡ'):
        if(not han_lib.Batchim(stem)):
            if(han_lib.OhAh(stem)):
                return han_lib.SetLetterInFinalSyllable(han_lib.LetterPosition.Medial, stem, 'ㅏ')
            else:
                return han_lib.SetLetterInFinalSyllable(han_lib.LetterPosition.Medial, stem, 'ㅓ')
        return stem + '어'
    elif(vowel == 'ㅟ' or vowel == 'ㅚ'):
        return stem + '어'
    #
    #
    return stem + '어'

def Adjective(Verb):
    stem = han_lib.Stem(Verb)
    if (stem == ""):
        return "?"
    #
    if (stem[-1] == '있' or stem[-1] == '없'):
        return stem + '는'
    #
    Final = han_lib.GetLetterFromFinalSyllable(han_lib.LetterPosition.Final, stem)
    if(Final == 'ㄹ'):
        return han_lib.SetLetterInFinalSyllable(han_lib.LetterPosition.Final, stem, 'ㄴ')
    elif (Final == 'ㅂ' and Verb in irregularLists.ㅂIrregularList):
        return han_lib.SetLetterInFinalSyllable(han_lib.LetterPosition.Final, stem, ' ') + '운'
    #
    if(han_lib.Batchim(stem)):
        return stem + '은'
    return han_lib.SetLetterInFinalSyllable(han_lib.LetterPosition.Final, stem, 'ㄴ')

def EvaluateVariableTableKey(VariableTable, key):
    exp = key.split('.')
    if(len(exp) == 2 and exp[0] in VariableTable.keys()):
        control = exp[1].lower()
        otherValue = VariableTable[exp[0]]
        if(control == "adj"):
            return Adjective(otherValue)
        elif(control == "stem"):
            return han_lib.Stem(otherValue)
        elif(control == "hstem"):
            return han_lib.Hstem(otherValue)
        elif(control == "specialfcs"):
            return FCS(otherValue, True)
        elif(control == "fcs"):
            return FCS(otherValue, False)
        elif(control == "native"):
            return num_lib.Native(otherValue)
        elif(control == "sino"):
            return num_lib.Sino(otherValue)
        elif(control == "item"):
            return num_lib.NativeCounter(otherValue)
        elif(control == "animal"):
            return num_lib.NativeCounter(otherValue)
        elif(control == "cup"):
            return num_lib.NativeCounter(otherValue)
        elif(control == "bottle"):
            return num_lib.NativeCounter(otherValue)
        elif(control == "slice"):
            return num_lib.NativeCounter(otherValue)
        elif(control == "book"):
            return num_lib.NativeCounter(otherValue)
        elif(control == "car"):
            return num_lib.NativeCounter(otherValue)
        elif(control == "action"):
            return num_lib.NativeCounter(otherValue)
        elif(control == "order"):
            return num_lib.Order(otherValue)
        elif(control == "clothing"):
            return num_lib.NativeCounter(otherValue)
        elif(control == "people"):
            return num_lib.NativeCounter(otherValue)
        elif(control == "bigwig"):
            return num_lib.NativeCounter(otherValue)
        elif(control == "serving"):
            return num_lib.NativeCounter(otherValue)
        elif(control == "second"):
            return num_lib.Sino(otherValue)
        elif(control == "minute"):
            return num_lib.Sino(otherValue)
        elif(control == "hour"):
            return num_lib.NativeCounter(otherValue)
        elif(control == "day"):
            return num_lib.Sino(otherValue)
        elif(control == "month"):
            return num_lib.Month(otherValue)
        elif(control == "year"):
            return num_lib.Sino(otherValue)
        elif(control == "age"):
            return num_lib.NativeCounter(otherValue)
        elif(control == "$"):
            return num_lib.Sino(otherValue)
        elif(control == "₩"):
            return num_lib.Sino(otherValue)
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
                if(han_lib.Batchim(PreviousWord)):
                    return PreviousWord + "은"
                return PreviousWord + "는"
            if(rule == "ㄹ/을"):
                #ㅂ iregular case
                if(han_lib.GetLetterFromFinalSyllable(han_lib.LetterPosition.Final ,PreviousWord) == 'ㅂ' and irregularLists.ㅂIrregularList.Contains(PreviousWord.split(" ")[-1])):
                    return han_lib.SetLetterInFinalSyllable(han_lib.LetterPosition.Final, PreviousWord, ' ') + "울"
                
                if (not han_lib.NonㄹBatchim(PreviousWord)):
                    return han_lib.SetLetterInFinalSyllable(han_lib.LetterPosition.Final, PreviousWord, 'ㄹ')
                return PreviousWord + "을"
            #
            if (rule == "을/를"):
                if(han_lib.NonㄹBatchim(PreviousWord)):
                    return PreviousWord + "을"
                return PreviousWord + "를"
            #
            if (rule == "이/가"):
                if(han_lib.NonㄹBatchim(PreviousWord)):
                    return PreviousWord + "이"
                return PreviousWord + "가"
            #
            if (rule == "과/와"):
                if(han_lib.NonㄹBatchim(PreviousWord)):
                    return PreviousWord + "과"
                return PreviousWord + "와"
            #
            if(rule == "랑이/랑"):
                if(han_lib.NonㄹBatchim(PreviousWord)):
                    return PreviousWord + "랑이"
                return PreviousWord + "랑"
            #
            if (rule == "야/아"):
                if(han_lib.NonㄹBatchim(PreviousWord)):
                    return "야"
                return PreviousWord + "아"
            #
            if (rule == "이에/예"):
                if(han_lib.NonㄹBatchim(PreviousWord)):
                    return PreviousWord + "이에"
                return PreviousWord + "예"
            #
            if(rule == "으"):
                if(han_lib.NonㄹBatchim(PreviousWord)):
                    return PreviousWord + "으"
                return PreviousWord + ""
            #
            if(rule == "ㅆ"):
                return han_lib.SetLetterInFinalSyllable(han_lib.LetterPosition.Final, PreviousWord, 'ㅆ')
            #
            #('으로 / 로)
            #
            return PreviousWord + "[" + rule + "]"
