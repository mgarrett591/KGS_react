import { Han_lib, LetterPosition } from './han_lib';
import { IrregularLists } from './db';
export class Particals{
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

        if (rule === "이니/니")
        {
            return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "이니" : "니");
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
}