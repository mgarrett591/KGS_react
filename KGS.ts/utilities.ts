import { Han_lib, LetterPosition } from "./han_lib";
import { Num_lib } from "./num_lib";
import { IrregularLists } from "./irregularLists";

export class Utilities{
    
    public static TryIrregularFCS(VerbStem: string, IFCS: boolean){

        let verb: string = VerbStem + '다';
        let Final: string = Han_lib.GetLetterFromFinalSyllable(LetterPosition.Final, VerbStem);

        // ㄷ irregular verbs
        if (Final === 'ㄷ' && IrregularLists.ㄷIrregularList.indexOf(verb) != -1)
        {
            return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, VerbStem, 'ㄹ') + '어';
        }
        // ㅂ irregular verbs
        else if (Final === 'ㅂ' && IrregularLists.ㅂIrregularList.indexOf(verb) != -1)
        {
            return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, VerbStem, ' ') + '워';
        }
        //ㄹ irregular verbs, handled in EvaluateParticle

        //르 irregular verbs
        else if (VerbStem.charAt(-1) === '르' && !(IrregularLists.르RegularList.indexOf(verb) != -1))
        {
            return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, VerbStem, 'ㄹ') + ((Han_lib.OhAh(VerbStem)) ? '라' : '러');
        }

        //ㅅ irregular verbs
        else if (Final === 'ㅅ' && IrregularLists.ㅅIrregularList.indexOf(verb) != -1)
        {
            return "ㅅ irregular verbs not implmented";
        }

        //으 irregular verbs
        else if (Final === 'ㅡ' && IFCS && IrregularLists.으IrregularList.indexOf(verb) != -1)
        {
            return VerbStem;
        }

        //Regular
        return null;
    }

    private static FCS(Verb: string, SpecialFCS: boolean){
        let stem: string = Han_lib.Stem(Verb);
        if(stem === "" || !(Verb.charAt(-1) === '다'))
        {
            return "?";
        }

        let IrregularFCS: string = Utilities.TryIrregularFCS(stem, SpecialFCS);
        if(IrregularFCS === null)
        {
            return IrregularFCS;
        }

        let vowel: string = Han_lib.GetLetterFromFinalSyllable(LetterPosition.Medial, stem);
        vowel = (stem.charAt(-1) === '하') ? '하' : vowel;
        switch (vowel)
        {
            case '하':
                return stem.substring(0, stem.length - 1) + '해';
            case 'ㅗ':
                return (Han_lib.Batchim(stem)) ? stem + '아' : Han_lib.SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅘ');
            case 'ㅏ':
                return (Han_lib.Batchim(stem)) ? stem + '아' : stem;
            case 'ㅓ':
            case 'ㅐ':
            case 'ㅔ':
                return (Han_lib.Batchim(stem)) ? stem + '어' : stem;
            case 'ㅣ':
                return (Han_lib.Batchim(stem)) ? stem + '어' : Han_lib.SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅕ');
            case 'ㅜ':
                let test: boolean = Han_lib.Batchim(stem);
                return (Han_lib.Batchim(stem)) ? stem + '어' : Han_lib.SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅝ');
            case 'ㅡ':
                if (!Han_lib.Batchim(stem))
                {
                    return Han_lib.SetLetterInFinalSyllable(LetterPosition.Medial, stem, (Han_lib.OhAh(stem)) ? 'ㅏ' : 'ㅓ');
                }
                return stem + '어';

            case 'ㅟ':
            case 'ㅚ':
                return stem + '어';
        }


        return stem + '어';
    }

    private static Adjective(Verb: string){
        let stem: string = Han_lib.Stem(Verb);
        if (stem === "")
        {
            return "?";
        }

        if (stem.charAt(-1) === '있' || stem.charAt(-1) === '없')
        {
            return stem + '는';
        }

        let Final: string = Han_lib.GetLetterFromFinalSyllable(LetterPosition.Final, stem);
        if(Final === 'ㄹ')
        {
            return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, stem, 'ㄴ');
        }
        else if (Final === 'ㅂ' && IrregularLists.ㅂIrregularList.indexOf(Verb) != -1)
        {
            return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, stem, ' ') + '운';
        }

        return (Han_lib.Batchim(stem)) ? stem + '은' : Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, stem, 'ㄴ');
    }

    public static EvaluateVariableTableKey(VariableTable: string[], key: string){
        let exp: string[] = key.split('.');
        if (exp.length === 2)
        {
            let OtherValue: string = VariableTable[exp[0]];
            if(OtherValue === undefined)
            {
                switch (exp[1].toLowerCase())
                {
                    case "adj":
                        return Utilities.Adjective(OtherValue);
                    case "stem":
                        return Han_lib.Stem(OtherValue);
                    case "hstem":
                        return Han_lib.Hstem(OtherValue);
                    case "specialfcs":
                        return Utilities.FCS(OtherValue, true);
                    case "fcs":
                        return Utilities.FCS(OtherValue, false);
                    case "native":
                        return Num_lib.Native(OtherValue);
                    case "sino":
                        return Num_lib.Sino(OtherValue);
                    case "item":
                        return Num_lib.NativeCounter(OtherValue);
                    case "animal":
                        return Num_lib.NativeCounter(OtherValue);
                    case "cup":
                        return Num_lib.NativeCounter(OtherValue);
                    case "bottle":
                        return Num_lib.NativeCounter(OtherValue);
                    case "slice":
                        return Num_lib.NativeCounter(OtherValue);
                    case "book":
                        return Num_lib.NativeCounter(OtherValue);
                    case "car":
                        return Num_lib.NativeCounter(OtherValue);
                    case "action":
                        return Num_lib.NativeCounter(OtherValue);
                    case "order":
                        return Num_lib.Order(OtherValue);
                    case "clothing":
                        return Num_lib.NativeCounter(OtherValue);
                    case "people":
                        return Num_lib.NativeCounter(OtherValue);
                    case "bigwig":
                        return Num_lib.NativeCounter(OtherValue);
                    case "serving":
                        return Num_lib.NativeCounter(OtherValue);
                    case "second":
                        return Num_lib.Sino(OtherValue);
                    case "minute":
                        return Num_lib.Sino(OtherValue);
                    case "hour":
                        return Num_lib.NativeCounter(OtherValue);
                    case "day":
                        return Num_lib.Sino(OtherValue);
                    case "month":
                        return Num_lib.Month(OtherValue);
                    case "year":
                        return  Num_lib.Sino(OtherValue);
                    case "age":
                        return Num_lib.NativeCounter(OtherValue);
                    case "$":
                        return Num_lib.Sino(OtherValue);
                    case "₩":
                        return Num_lib.Sino(OtherValue);
                }
            }
            else if (exp[0].toLowerCase() === "unit")
            {
                switch (exp[1].toLowerCase())
                {
                    case "item":
                        return "개";
                    case "animal":
                        return "마리";
                    case "cup":
                        return "잔";
                    case "bottle":
                        return "병";
                    case "slice":
                        return "조각";
                    case "book":
                        return "권";
                    case "car":
                        return "대";
                    case "action":
                        return "번";
                    case "order":
                        return "번째";
                    case "clothing":
                        return "벌";
                    case "people":
                        return "명";
                    case "bigwig":
                        return "분";
                    case "serving":
                        return "인분";
                    case "second":
                        return "초";
                    case "minute":
                        return "분";
                    case "hour":
                        return "시";
                    case "day":
                        return "일";
                    case "month":
                        return "월";
                    case "year":
                        return "년";
                    case "age":
                        return "살";
                    case "$":
                        return "달러";
                    case "₩":
                        return "원";
                    case "list":
                        return "item, animal, cup, bottle, slice, book, car, action, order, clothing, people, bigwigs, servings, second, minute, hour, day, month, year, age, $, ₩";
                }
            }
        }
        let MainValue: string = VariableTable[key.toLowerCase()]
        if (MainValue != undefined)
        {
            return MainValue;
        }
        

        return "{" + key + "}";
    }

    public static EvaluateParticle(PreviousWord: string, rule: string){
        if (rule === "은/는")
        {
            return PreviousWord + (Han_lib.Batchim(PreviousWord) ? "은" : "는");
        }

        if(rule === "ㄹ/을")
        {
            //ㅂ iregular case
            if(Han_lib.GetLetterFromFinalSyllable(LetterPosition.Final ,PreviousWord) === 'ㅂ' && (IrregularLists.ㅂIrregularList.indexOf(PreviousWord.split(" ")[-1])) != -1)
            {
                return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, PreviousWord, ' ') + "울";
            }
            
            if (!Han_lib.NonㄹBatchim(PreviousWord))
            {
                return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, PreviousWord, 'ㄹ');
            }
            return PreviousWord + "을";
        }

        if (rule === "을/를")
        {
            return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "을" : "를");
        }

        if (rule === "이/가")
        {
            return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "이" : "가");
        }

        if (rule === "과/와")
        {
            return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "과" : "와");
        }

        if(rule === "랑이/랑")
        {
            return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "랑이" : "랑");
        }

        if (rule === "야/아")
        {
            return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "야" : "아");
        }

        if (rule === "이에/예")
        {
            return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "이에" : "예");
        }

        if(rule === "으")
        {
            return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "으" : "");
        }

        if(rule === "ㅆ")
        {
            return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, PreviousWord, 'ㅆ');
        }

        //('으로 / 로)


        return PreviousWord + "[" + rule + "]";
    }

};
