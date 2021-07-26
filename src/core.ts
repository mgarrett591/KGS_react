import { Han_lib, LetterPosition } from "./han_lib";
import { Num_lib } from "./num_lib";
import { IrregularLists } from "./irregularLists";

export class GrammerLogic{
    
    public static GetVerbType(Verb: string, IrregularCase: boolean){
        
        //let Final: string = Han_lib.GetLetterFromFinalSyllable(LetterPosition.Final, Han_lib.Stem(Verb));
        let Medial: string = Han_lib.GetLetterFromFinalSyllable(LetterPosition.Medial, Han_lib.Stem(Verb));
        //let Initial: string = Han_lib.GetLetterFromFinalSyllable(LetterPosition.Initial, Han_lib.Stem(Verb));
        //ㄹ Irregular
        //if(false){
        //    return 'ㄹ Irregular';
        //}
        
        //ㄷ Irregular
        //if(false){
        //    return 'ㄷ Irregular';
        //}

        //ㅅ Irregular
        //if(false){
        //    return 'ㅅ Irregular';
        //}

        //ㅂ Irregular
        //if(false){
        //    return 'ㅂ Irregular';
        //}

        //ㅎ Irregular
        //if(false){
        //    return 'ㅎ Irregular';
        //}

        //르 Irregular
        //if(false){
        //    return '르 Irregular';
        //}

        //하다 Regular
        if(Verb.length >= 2 && Verb.substring(Verb.length - 2) === '하다'){
            return '하다 Regular';
        }
 
        //Regular
        return Medial + ' Regular';
    }

    private static FCS(Verb: string, IrregularCase: boolean, Key: string){
        let stem: string = Han_lib.Stem(Verb);
        if(stem === "" || Verb.charAt(Verb.length - 1) !== '다')
        {
            return "{" + Key + "}";
        }

        let VerbType = GrammerLogic.GetVerbType(Verb, IrregularCase)
        switch (VerbType)
        {
            case '하다 Regular':
                return stem.substring(0, stem.length - 1) + '해';
            case 'ㅗ Regular':
                return (Han_lib.Batchim(stem)) ? stem + '아' : Han_lib.SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅘ');
            case 'ㅏ Regular':
                return (Han_lib.Batchim(stem)) ? stem + '아' : stem;
            case 'ㅓ Regular':
            case 'ㅐ Regular':
            case 'ㅔ Regular':
                return (Han_lib.Batchim(stem)) ? stem + '어' : stem;
            case 'ㅣ Regular':
                return (Han_lib.Batchim(stem)) ? stem + '어' : Han_lib.SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅕ');
            case 'ㅜ Regular':
                return (Han_lib.Batchim(stem)) ? stem + '어' : Han_lib.SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅝ');
            case 'ㅡ Regular':
                if (!Han_lib.Batchim(stem))
                {
                    return Han_lib.SetLetterInFinalSyllable(LetterPosition.Medial, stem, Han_lib.OhAh(stem, 'ㅏ', 'ㅓ'));
                }
                return stem + '어';
            case 'ㅟ Regular':
            case 'ㅚ Regular':
                return stem + '어';
            case 'ㄹ Irregular':
                return "ㄹ Irregular";
            case 'ㄷ Irregular':
                return "ㄷ Irregular";
            case 'ㅅ Irregular':
                return "ㅅ Irregular";
            case 'ㅂ Irregular':
                return "ㅂ Irregular";
            case '르 Irregular':
                return "르 Irregular";
        }
        //Just add 어 if you don't know
        return stem + '어';
    }

    

    private static Adjective(Verb: string){
        let stem: string = Han_lib.Stem(Verb);
        if (stem === "")
        {
            return "?";
        }

        if (stem.charAt(stem.length - 1) === '있' || stem.charAt(stem.length - 1) === '없')
        {
            return stem + '는';
        }

        let Final: string = Han_lib.GetLetterFromFinalSyllable(LetterPosition.Final, stem);
        if(Final === 'ㄹ')
        {
            return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, stem, 'ㄴ');
        }
        else if (Final === 'ㅂ' && IrregularLists.ㅂIrregularList.indexOf(Verb) !== -1)
        {
            return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, stem, ' ') + '운';
        }

        return (Han_lib.Batchim(stem)) ? stem + '은' : Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, stem, 'ㄴ');
    }

    public static EvaluateVariableTableKey(WordMap: Map<string, string>, key: string){
        let tokens: string[] = key.split('.');
        if(Han_lib.LitMapHas(WordMap,tokens[0])){
            if(tokens.length === 1){
                return Han_lib.LitMapGit(WordMap,key.toLowerCase()); //Normal variables
            }
            else if(tokens.length === 2){  //Numbers and mods
                let num: string = GrammerLogic.numbers(tokens[1], Han_lib.LitMapGit(WordMap,tokens[0]), key)
                if(num !== "NaN"){ //Only numbers
                    return num;  
                }
            }
            //Only Mods
            return GrammerLogic.ModChain(key, Han_lib.LitMapGit(WordMap,tokens[0]), tokens.slice(1));
        }
        else if(tokens[0].toLowerCase() === "unit" && tokens.length === 2){  //unit names and unit list
            return GrammerLogic.Units(tokens[1], key);
        }
        //Key not found
        return "{" + key + "}";
    }

    public static ModChain(key: string, value: string, mods: string[]){
        let intermedite: string = value;
        
        
        for(let i = 0; i < mods.length; i++){
            intermedite = GrammerLogic.Mod(key, intermedite, mods[i]);
        }
        return intermedite;
    }

    public static Mod(key: string, value: string, type: string){
        let stem = Han_lib.Stem(value);
        switch (type.toLowerCase()){
            case "adj":
                return GrammerLogic.Adjective(value);
            case "stem":
                return Han_lib.Stem(value);
            case "hstem":
                return Han_lib.Hstem(value);
            case "sfcs":
                return GrammerLogic.FCS(value, true, key);
            case "fcs":
                return GrammerLogic.FCS(value, false, key);
            case "eu":
                return GrammerLogic.Eu(value, key);   
            case "yo":
                if(value.charAt(value.length - 1) === '다'){
                    return GrammerLogic.FCS(value, false, key) + "요";
                }
                return value + "요";
            case "sup":
                if(Han_lib.Batchim(stem)){
                    return stem + "습니다";
                }
                return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, stem, "ㅂ") + "니다";
            case "ni":
                if(Han_lib.Batchim(stem)){
                    return stem + "습니까";    
                }
                return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, stem, "ㅂ") + "니까";
            case "pt":
                return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, GrammerLogic.FCS(value, false, key), 'ㅆ') + '어';
            case "ft":
                return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, Han_lib.Stem(value), "ㄹ") + " 거예";
            case "ing":
                return stem + '고 있다';
            case "try":
                return stem + '보다';
            case "want":
                return stem + '고 십다';
            case "let":
                if(Han_lib.Batchim(stem)){
                    return stem + "읍시다";
                }
                return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, stem, "ㅂ") + "시다";
            case "letc":
                return stem + "자";
            case "shall":
                return Han_lib.Hal(stem, IrregularLists.ㅂIrregularList) + "까";
            case "can":
                return Han_lib.Hal(stem, IrregularLists.ㅂIrregularList) + " 수 있다";
            case "cant":
                return Han_lib.Hal(stem, IrregularLists.ㅂIrregularList) + " 수 없다";
            case "neg":
                return stem + "지 않다";
            case "negc":
                if(Han_lib.IsHaDaVerb(value)){
                    return Han_lib.Hstem(value) + " 안 하다";
                }
                return "안 " + value;
            case "mot":
                return stem + "지 못하다";
            case "motc":
                if(Han_lib.IsHaDaVerb(value)){
                    return Han_lib.Hstem(value) + " 못 하다";
                }
                return "못 " + value;
            
        }
        return "{" + key + "}";
    }

    public static Eu(Verb: string, Key: string){
        let stem: string = Han_lib.Stem(Verb);
        if(stem === "" || Verb.charAt(Verb.length - 1) !== '다')
        {
            return "{" + Key + "}";
        }

        let VerbType = GrammerLogic.GetVerbType(Verb, false)
        switch (VerbType)
        {
            case '하 Regular':
                return stem.substring(0, stem.length - 1) + '해';
            case 'ㅗ Regular':
                return (Han_lib.Batchim(stem)) ? stem + '아' : Han_lib.SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅘ');
            case 'ㅏ Regular':
                return (Han_lib.Batchim(stem)) ? stem + '아' : stem;
            case 'ㅓ Regular':
            case 'ㅐ Regular':
            case 'ㅔ Regular':
                return (Han_lib.Batchim(stem)) ? stem + '어' : stem;
            case 'ㅣ Regular':
                return (Han_lib.Batchim(stem)) ? stem + '어' : Han_lib.SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅕ');
            case 'ㅜ Regular':
                return (Han_lib.Batchim(stem)) ? stem + '어' : Han_lib.SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅝ');
            case 'ㅡ Regular':
                if (!Han_lib.Batchim(stem))
                {
                    return Han_lib.SetLetterInFinalSyllable(LetterPosition.Medial, stem, Han_lib.OhAh(stem, 'ㅏ', 'ㅓ'));
                }
                return stem + '어';
            case 'ㅟ Regular':
            case 'ㅚ Regular':
                return stem + '어';
            case 'ㄹ Irregular':
                return "ㄹ Irregular";
            case 'ㄷ Irregular':
                return "ㄷ Irregular";
            case 'ㅅ Irregular':
                return "ㅅ Irregular";
            case 'ㅂ Irregular':
                return "ㅂ Irregular";
            case '르 Irregular':
                return "르 Irregular";
        }
        //Just add 어 if you don't know
        return stem + '어';
    }

    public static numbers(counter: string, value: string, key: string){
        switch (counter.toLowerCase()){
            case "native":
                return Num_lib.Native(value);
            case "order":
                return Num_lib.Order(value);
            case "month":
                return Num_lib.Month(value);
            case "sino":           //Sino Counters
            case "second":
            case "minute":
            case "day":
            case "year":
            case "$":
            case "₩":
            case "\\":
                return Num_lib.Sino(value);
            case "item":           //Native Counters
            case "animal":
            case "cup":
            case "bottle":
            case "slice":
            case "book":
            case "car":
            case "clothing":
            case "people":
            case "bigwig":
            case "serving":
            case "action":
            case "age":
            case "hour":
                return Num_lib.NativeCounter(value);
        }
        return "NaN";
    }

    public static Units(name: string, key: string){
        switch (name.toLowerCase()){
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
            case "\\":
                return "원";
            case "list":
                return "item, animal, cup, bottle, slice, book, car, action, order, clothing, people, bigwigs, servings, second, minute, hour, day, month, year, age, $, ₩";
            default:
                return "{" + key + "}";
        }
    }

    public static EvaluateParticle(PreviousWord: string, rule: string){
        if (rule === "은/는" || rule.toLowerCase() === "t")
        {
            return PreviousWord + (Han_lib.Batchim(PreviousWord) ? "은" : "는");
        }

        if(rule === "ㄹ/을")
        {
            //need to pass IrregularLists.ㅂIrregularList to Hal for the ㅂ irregular case
            return Han_lib.Hal(PreviousWord, IrregularLists.ㅂIrregularList);
        }

        if (rule === "을/를" || rule.toLowerCase() === "o")
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

        if('으로/로' || rule.toLowerCase() === "v"){
            return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "으로" : "로");
        }

        return PreviousWord + "[" + rule + "]";
    }

};
