export enum LetterPosition{
    Initial = 1,
    Medial,
    Final
};

export class Han_lib{
    private static InitialConsonants:string[] = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
    private static MedialVowels:string[] = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
    private static FinalConsonants:string[] = [" ", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ"];

    public static IsLit(key: string){
        return key.length >= 3 && key.charAt(0) == '"' && key.charAt(key.length - 1) == '"';
    }

    public static GetLit(key: string){
        if(key.length < 3){
            return "";
        }
        return key.substr(1, key.length - 2);
    }

    public static LitMapHas(GrammarVars: Map<string, string>, key: string){
        return GrammarVars.has(key) || this.IsLit(key);
    }

    public static LitMapGit(GrammarVars: Map<string, string>, key: string){
        if(GrammarVars.has(key)){
            return String(GrammarVars.get(key));
        }
        return this.GetLit(key);
    }

    public static Batchim(Word: string){
        if (Word === "")
        {
            return false;
        }

        let codepoint: number = Word.charAt(Word.length - 1).charCodeAt(0);
        return ((codepoint - 44032) % 588) % 28 !== 0;
    }

    public static NonㄹBatchim(Word: string){
        if (Word === "")
        {
            return false;
        }

        let codepoint: number = Word.charAt(Word.length - 1).charCodeAt(0);
        codepoint = ((codepoint - 44032) % 588) % 28;
        return codepoint !== 0 && codepoint !== 8;
    }
    
    public static OhAh(Word: string, Has: string, HasNot: string){
        let SecondToLastVowel: string = Han_lib.GetLetterFromFinalSyllable(LetterPosition.Medial, Han_lib.Stem(Word));
        if(SecondToLastVowel === 'ㅗ' || SecondToLastVowel === 'ㅏ'){
            return Has;
        }
        return HasNot;
    }

    private static IndexInRange(RangeArray: string[], index: number){
        return index >= 0 && index < RangeArray.length;
    }

    public static GetLetterFromFinalSyllable(LP: LetterPosition, Word: string){
        if (Word === "")
        {
            return ' ';
        }

        let codepoint: number = Word.charAt(Word.length - 1).charCodeAt(0);
        codepoint -= 44032;

        let InitialConsonant: number = Math.floor(codepoint / 588);
        if (LP === LetterPosition.Initial)
        {
            return Han_lib.IndexInRange(Han_lib.InitialConsonants, InitialConsonant) ? Han_lib.InitialConsonants[InitialConsonant][0] : ' ';
        }

        codepoint %= 588;

        let MedialVowel: number = Math.floor(codepoint / 28);
        if (LP === LetterPosition.Medial)
        {
            return Han_lib.IndexInRange(Han_lib.MedialVowels, MedialVowel) ? Han_lib.MedialVowels[MedialVowel][0] : ' ';
        }

        let FinalConsonant: number = codepoint % 28;
        return Han_lib.IndexInRange(Han_lib.FinalConsonants, FinalConsonant) ? Han_lib.FinalConsonants[FinalConsonant][0] : ' ';
    }

    private static Trylookup(CharArray: string[] , DefaultValue: number, letter: string){
        let index: number = CharArray.indexOf(letter);
        return (index !== -1) ? index : DefaultValue;
    }

    public static SetLetterInFinalSyllable(LP: LetterPosition, Word: string, NewLetter: string){
        

        if (Word === "")
        {
            return Word;
        }

        let codepoint: number = Word.charAt(Word.length - 1).charCodeAt(0);
        codepoint -= 44032;

        let InitialConsonant: number = Math.floor(codepoint / 588);
        codepoint %= 588;

        let MedialVowel: number = Math.floor(codepoint / 28);
        let FinalConsonant: number = codepoint % 28;

        switch (LP)
        {
            case LetterPosition.Initial:
                InitialConsonant = Han_lib.Trylookup(Han_lib.InitialConsonants, InitialConsonant, NewLetter);
                break;
            case LetterPosition.Medial:
                MedialVowel = Han_lib.Trylookup(Han_lib.MedialVowels, MedialVowel, NewLetter);
                break;
            case LetterPosition.Final:
                FinalConsonant = Han_lib.Trylookup(Han_lib.FinalConsonants, FinalConsonant, NewLetter);
                break;
        }

        return Han_lib.Stem(Word) + String.fromCharCode((InitialConsonant * 588 + MedialVowel * 28 + FinalConsonant) + 44032);
    }
    
    public static Stem(Verb: string){
        if (Verb === "")
        {
            return "";
        }

        return Verb.substring(0, Verb.length - 1);
    }

    public static Hstem(Verb: string){
        let stem: string = Han_lib.Stem(Verb);

        if (stem === "")
        {
            return "";
        }

        return (stem.charAt(stem.length - 1) === '하') ? Han_lib.Stem(stem) : stem;
    }

    public static Hal(PreviousWord: string, IrregularList: string[]){
        //ㅂ iregular case
        if(Han_lib.GetLetterFromFinalSyllable(LetterPosition.Final ,PreviousWord) === 'ㅂ' && (IrregularList.indexOf(PreviousWord.split(" ")[PreviousWord.length - 1])) !== -1)
        {
            return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, PreviousWord, ' ') + "울";
        }
        
        if (!Han_lib.NonㄹBatchim(PreviousWord))
        {
            return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, PreviousWord, 'ㄹ');
        }
        return PreviousWord + "을";
    }

    public static IsHaDaVerb(Verb: string){
        return Verb.length >= 2 && Verb.substring(Verb.length - 2) === "하다";
    }
}
