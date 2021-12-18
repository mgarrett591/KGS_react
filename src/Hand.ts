import { db, Fx } from './db';
import { Han_lib, VerbOps, LetterPosition } from './han_lib';
export class Hand{
    public static Wave(value: string|undefined, fx: string) {
        let VerbForm: Fx | undefined = db.GetFx(fx);        
        if(VerbForm !== undefined && value !== undefined){
            let CS: string | undefined = Hand.UpdateVerb(String(value), VerbForm.VerbOp);
            CS += Han_lib.Batchim(String(value)) ? VerbForm.Batchim : VerbForm.AntiBatchim + VerbForm.Postfix;
            if(CS !== undefined){
                return CS;
            }
        }
        return undefined;
    }

    private static UpdateVerb(Verb: string, Op: VerbOps){
        switch(Op){
            case VerbOps.Dictionary:
                return Verb;
            case VerbOps.FCS:
                return this.FCS(Verb, false, Verb);
            case VerbOps.HadaStem:
                return Han_lib.Hstem(Verb);
            case VerbOps.Hal:
                return Han_lib.Hal(Han_lib.Stem(Verb), []);
            case VerbOps.PastFCS:
                return Han_lib.Pstem(Verb);
            case VerbOps.Set_Bieup_as_Batchim_if_the_Batchim_is_blank:
                return Han_lib.SetLetterInFinalSyllable(LetterPosition.Final, Han_lib.Stem(Verb),"ㅂ");
            case VerbOps.Stem:
                return Han_lib.Stem(Verb);
        }
    }

    private static FCS(Verb: string, IrregularCase: boolean, Key: string){
        let stem: string = Han_lib.Stem(Verb);
        if(stem === "" || Verb.charAt(Verb.length - 1) !== '다')
        {
            return "{" + Key + "}";
        }

        let VerbType = this.GetVerbType(Verb, IrregularCase)
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

    public static GetVerbType(Verb: string, IrregularCase: boolean){
        
        //let Final: string = Han_lib.GetLetterFromFinalSyllable(LetterPosition.Final, Han_lib.Stem(Verb));
        let Medial: string = Han_lib.GetLetterFromFinalSyllable(LetterPosition.Medial, Han_lib.Stem(Verb));
        //let Initial: string = Han_lib.GetLetterFromFinalSyllable(LetterPosition.Initial, Han_lib.Stem(Verb));
        //ㄹ Irregular
        //if(Final === 'ㄹ' && this.TestVerb(Verb, 'ㄹ')){
        //    return 'ㄹ Irregular';
        //}
        
        //ㄷ Irregular
        //if(Final === 'ㄷ' && this.TestVerb(Verb, 'ㄷ')){
        //    return 'ㄷ Irregular';
        //}

        //ㅂ Irregular
        //if(Final === 'ㅂ'  && this.TestVerb(Verb, 'ㅂ')){
        //    return 'ㅂ Irregular';
        //}

        //ㅅ Irregular
        //if(Final === 'ㅅ' && this.TestVerb(Verb, 'ㅅ')){
        //    return 'ㅅ Irregular';
        //}

        //ㅎ Irregular
        //if(Final === 'ㅎ' && this.TestVerb(Verb, 'ㅎ')){
        //    return 'ㅎ Irregular';
        //}

        //르 Irregular
        //if(Final === '르' && this.TestVerb(Verb, '르')){
        //    return '르 Irregular';
        //}

        //하다 Regular
        if(Verb.length >= 2 && Han_lib.IsHaDaVerb(Verb)){
            return '하다 Regular';
        }
 
        //Regular
        return Medial + ' Regular';
    }

    private TestVerb(Verb: string, Type: string){
        //if(db.IrregularVerbList.has(Verb)){
        //    if(this.IrregularVerbList.get(Verb)){
        //        this.Messages.push(Verb + "is a confirmed " + Type + "irregular verb");
        //    }
        //    this.Messages.push(Verb + "is a confirmed regular verb");
        //}
        //(Verb + "may or may not be a " + Type + "Irregular...")
    }
}

