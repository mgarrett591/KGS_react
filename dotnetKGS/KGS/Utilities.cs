using System;
using System.Collections.Generic;
using System.Linq;


namespace KGS
{
    public static class Utilities
    {

        public static bool TryIrregularFCS(string VerbStem, bool IFCS, out string IrregularFCS)
        {
            string verb = VerbStem + '다';
            char Final = Han_lib.GetLetterFromFinalSyllable(Han_lib.LetterPosition.Final, VerbStem);

            // ㄷ irregular verbs
            if (Final == 'ㄷ' && IrregularLists.ㄷIrregularList.Contains(verb))
            {
                IrregularFCS = Han_lib.SetLetterInFinalSyllable(Han_lib.LetterPosition.Final, VerbStem, 'ㄹ') + '어';
                return true;
            }
            // ㅂ irregular verbs
            else if (Final == 'ㅂ' && IrregularLists.ㅂIrregularList.Contains(verb))
            {
                IrregularFCS = Han_lib.SetLetterInFinalSyllable(Han_lib.LetterPosition.Final, VerbStem, ' ') + '워';
                return true;
            }
            //ㄹ irregular verbs, handled in EvaluateParticle

            //르 irregular verbs
            else if (VerbStem[^1] == '르' && !IrregularLists.르RegularList.Contains(verb))
            {
                IrregularFCS = Han_lib.SetLetterInFinalSyllable(Han_lib.LetterPosition.Final, VerbStem, 'ㄹ') + ((Han_lib.OhAh(VerbStem)) ? '라' : '러');
                return true;
            }

            //ㅅ irregular verbs
            else if (Final == 'ㅅ' && IrregularLists.ㅅIrregularList.Contains(verb))
            {
                
                IrregularFCS = "ㅅ irregular verbs not implmented";
                return true;
            }

            //으 irregular verbs
            else if (Final == 'ㅡ' && IFCS && IrregularLists.으IrregularList.Contains(verb))
            {
                IrregularFCS = VerbStem;
                return true;
            }

            //Regular
            IrregularFCS = "";
            return false;
        }

        private static string FCS(string Verb, bool SpecialFCS)
        {
            string stem = Han_lib.Stem(Verb);
            if(stem == "" || !Verb.EndsWith('다'))
            {
                return "?";
            }

            if(TryIrregularFCS(stem, SpecialFCS, out string IrregularFCS))
            {
                return IrregularFCS;
            }

            char vowel = Han_lib.GetLetterFromFinalSyllable(Han_lib.LetterPosition.Medial, stem);
            vowel = (stem[^1] == '하') ? '하' : vowel;
            switch (vowel)
            {
                case '하':
                    return stem[0..^1] + '해';
                case 'ㅗ':
                    return (Han_lib.Batchim(stem)) ? stem + '아' : Han_lib.SetLetterInFinalSyllable(Han_lib.LetterPosition.Medial, stem, 'ㅘ');
                case 'ㅏ':
                    return (Han_lib.Batchim(stem)) ? stem + '아' : stem;
                case 'ㅓ':
                case 'ㅐ':
                case 'ㅔ':
                    return (Han_lib.Batchim(stem)) ? stem + '어' : stem;
                case 'ㅣ':
                    return (Han_lib.Batchim(stem)) ? stem + '어' : Han_lib.SetLetterInFinalSyllable(Han_lib.LetterPosition.Medial, stem, 'ㅕ');
                case 'ㅜ':
                    bool test = Han_lib.Batchim(stem);
                    return (Han_lib.Batchim(stem)) ? stem + '어' : Han_lib.SetLetterInFinalSyllable(Han_lib.LetterPosition.Medial, stem, 'ㅝ');
                case 'ㅡ':
                    if (!Han_lib.Batchim(stem))
                    {
                        return Han_lib.SetLetterInFinalSyllable(Han_lib.LetterPosition.Medial, stem, (Han_lib.OhAh(stem)) ? 'ㅏ' : 'ㅓ');
                    }
                    return stem + '어';

                case 'ㅟ':
                case 'ㅚ':
                    return stem + '어';
            }


            return stem + '어';
        }

        private static string Adjective(string Verb)
        {
            string stem = Han_lib.Stem(Verb);
            if (stem == "")
            {
                return "?";
            }

            if (stem[^1] == '있' || stem[^1] == '없')
            {
                return stem + '는';
            }

            char Final = Han_lib.GetLetterFromFinalSyllable(Han_lib.LetterPosition.Final, stem);
            if(Final == 'ㄹ')
            {
                return Han_lib.SetLetterInFinalSyllable(Han_lib.LetterPosition.Final, stem, 'ㄴ');
            }
            else if (Final == 'ㅂ' && IrregularLists.ㅂIrregularList.Contains(Verb))
            {
                return Han_lib.SetLetterInFinalSyllable(Han_lib.LetterPosition.Final, stem, ' ') + '운';
            }

            return (Han_lib.Batchim(stem)) ? stem + '은' : Han_lib.SetLetterInFinalSyllable(Han_lib.LetterPosition.Final, stem, 'ㄴ');
        }

        public static string EvaluateVariableTableKey(Dictionary<string, string> VariableTable, string key)
        {
            string[] exp = key.Split('.');
            if (exp.Length == 2)
            {
                if(VariableTable.TryGetValue(exp[0], out string OtherValue))
                {
                    switch (exp[1].ToLower())
                    {
                        case "adj":
                            return Adjective(OtherValue);
                        case "stem":
                            return Han_lib.Stem(OtherValue);
                        case "hstem":
                            return Han_lib.Hstem(OtherValue);
                        case "specialfcs":
                            return FCS(OtherValue, true);
                        case "fcs":
                            return FCS(OtherValue, false);
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
                else if (exp[0].ToLower() == "unit")
                {
                    string temp = exp[1].ToLower();
                    if (CounterDict.Dict.TryGetValue(temp, out string value))
                    {
                        return value;
                    }
                    else if (temp == "list")
                    {
                        return CounterDict.List();
                    }

                }
            }
            if (VariableTable.TryGetValue(key.ToLower(), out string MainValue))
            {
                return MainValue;
            }
            

            return "{" + key + "}";
        }

        public static string EvaluateParticle(string PreviousWord, string rule)
        {
            if (rule == "은/는")
            {
                return PreviousWord + (Han_lib.Batchim(PreviousWord) ? "은" : "는");
            }

            if(rule == "ㄹ/을")
            {
                //ㅂ iregular case
                if(Han_lib.GetLetterFromFinalSyllable(Han_lib.LetterPosition.Final ,PreviousWord) == 'ㅂ' && IrregularLists.ㅂIrregularList.Contains(PreviousWord.Split(" ")[^1]))
                {
                    return Han_lib.SetLetterInFinalSyllable(Han_lib.LetterPosition.Final, PreviousWord, ' ') + "울";
                }
                
                if (!Han_lib.NonㄹBatchim(PreviousWord))
                {
                    return Han_lib.SetLetterInFinalSyllable(Han_lib.LetterPosition.Final, PreviousWord, 'ㄹ');
                }
                return PreviousWord + "을";
            }

            if (rule == "을/를")
            {
                return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "을" : "를");
            }

            if (rule == "이/가")
            {
                return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "이" : "가");
            }

            if (rule == "과/와")
            {
                return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "과" : "와");
            }

            if(rule == "랑이/랑")
            {
                return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "랑이" : "랑");
            }

            if (rule == "야/아")
            {
                return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "야" : "아");
            }

            if (rule == "이에/예")
            {
                return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "이에" : "예");
            }

            if(rule == "으")
            {
                return PreviousWord + (Han_lib.NonㄹBatchim(PreviousWord) ? "으" : "");
            }

            if(rule == "ㅆ")
            {
                return Han_lib.SetLetterInFinalSyllable(Han_lib.LetterPosition.Final, PreviousWord, 'ㅆ');
            }

            //('으로 / 로)


            return PreviousWord + "[" + rule + "]";
        }
    }
}
