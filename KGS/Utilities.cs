using System;
using System.Collections.Generic;
using System.Linq;

namespace KGS
{
    public static class Utilities
    {
        private static readonly string[] InitialConsonants = { "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ" };
        private static readonly string[] MedialVowels = { "ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ" };
        private static readonly string[] FinalConsonants = { " ", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ" };
        //                                                    0     1    2     3     4     5      6     7     8    9     10     11   12     13    14   15     16   17    18    19     20
        private enum LetterPosition
        {
            Initial,
            Medial,
            Final
        }

        private static bool Batchim(string Word)
        {
            if(Word == "")
            {
                return false;
            }

            int codepoint = Word[^1];
            return ((codepoint - 44032) % 588) % 28 != 0;
        }

        private static bool NonㄹBatchim(string Word)
        {
            if (Word == "")
            {
                return false;
            }

            int codepoint = Word[^1];
            codepoint = ((codepoint - 44032) % 588) % 28;
            return codepoint != 0 && codepoint != 8;
        }

        private static bool OhAh(string Word)
        {
            char SecondToLastVowel = GetLetterFromFinalSyllable(LetterPosition.Medial, Stem(Word));
            return SecondToLastVowel == 'ㅗ' || SecondToLastVowel == 'ㅏ';
        }

        private static bool IndexInRange(string[] RangeArray, int index)
        {
            return index >= 0 && index < RangeArray.Length;
        }

        private static char GetLetterFromFinalSyllable(LetterPosition LP, string Word)
        {
            if (Word == "")
            {
                return ' ';
            }

            int codepoint = Word[^1];
            codepoint -= 44032;

            int InitialConsonant = codepoint / 588;
            if(LP == LetterPosition.Initial)
            {
                return IndexInRange(InitialConsonants, InitialConsonant)? InitialConsonants[InitialConsonant][0]:' ';
            }

            codepoint %= 588;

            int MedialVowel = codepoint / 28;
            if(LP == LetterPosition.Medial)
            {
                return IndexInRange(MedialVowels, MedialVowel) ? MedialVowels[MedialVowel][0] : ' ';
            }

            int FinalConsonant = codepoint % 28;
            return IndexInRange(FinalConsonants, FinalConsonant) ? FinalConsonants[FinalConsonant][0] : ' ';
        }

        private static int Trylookup(string[] CharArray, int DefaultValue, char letter)
        {
            int index = Array.IndexOf(CharArray, letter.ToString());
            return (index != -1) ? index : DefaultValue;
        }

        private static string SetLetterInFinalSyllable(LetterPosition LP, string Word, char NewLetter)
        {
            if (Word == "")
            {
                return Word;
            }

            int codepoint = Word[^1];
            codepoint -= 44032;

            int InitialConsonant = codepoint / 588;
            codepoint %= 588;

            int MedialVowel = codepoint / 28;
            int FinalConsonant = codepoint % 28;

            switch (LP)
            {
                case LetterPosition.Initial:
                    InitialConsonant = Trylookup(InitialConsonants, InitialConsonant, NewLetter);
                    break;
                case LetterPosition.Medial:
                    MedialVowel = Trylookup(MedialVowels, MedialVowel, NewLetter);
                    break;
                case LetterPosition.Final:
                    FinalConsonant = Trylookup(FinalConsonants, FinalConsonant, NewLetter);
                    break;
            }

            return Stem(Word) + (char)((InitialConsonant * 588 + MedialVowel * 28 + FinalConsonant) + 44032);
        }

        private static string Stem(string Verb)
        {
            if(Verb == "")
            {
                return "";
            }
            
            return Verb[0..^1];
        }

        private static string Hstem(string Verb)
        {
            string stem = Stem(Verb);

            if (stem == "")
            {
                return "";
            }

            return (stem[^1] == '하') ? Stem(stem) : stem;
        }

        public static bool TryIrregularFCS(string VerbStem, bool IFCS, out string IrregularFCS)
        {
            string verb = VerbStem + '다';
            char Final = GetLetterFromFinalSyllable(LetterPosition.Final, VerbStem);

            // ㄷ irregular verbs
            if (Final == 'ㄷ' && IrregularLists.ㄷIrregularList.Contains(verb))
            {
                IrregularFCS = SetLetterInFinalSyllable(LetterPosition.Final, VerbStem, 'ㄹ') + '어';
                return true;
            }
            // ㅂ irregular verbs
            else if (Final == 'ㅂ' && IrregularLists.ㅂIrregularList.Contains(verb))
            {
                IrregularFCS = SetLetterInFinalSyllable(LetterPosition.Final, VerbStem, ' ') + '워';
                return true;
            }
            //ㄹ irregular verbs, handled in EvaluateParticle

            //르 irregular verbs
            else if (VerbStem[^1] == '르' && !IrregularLists.르RegularList.Contains(verb))
            {
                IrregularFCS = SetLetterInFinalSyllable(LetterPosition.Final, VerbStem, 'ㄹ') + ((OhAh(VerbStem)) ? '라' : '러');
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
            string stem = Stem(Verb);
            if(stem == "" || !Verb.EndsWith('다'))
            {
                return "?";
            }

            if(TryIrregularFCS(stem, SpecialFCS, out string IrregularFCS))
            {
                return IrregularFCS;
            }

            char vowel = GetLetterFromFinalSyllable(LetterPosition.Medial, stem);
            vowel = (stem[^1] == '하') ? '하' : vowel;
            switch (vowel)
            {
                case '하':
                    return stem[0..^1] + '해';
                case 'ㅗ':
                    return (Batchim(stem)) ? stem + '아' : SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅘ');
                case 'ㅏ':
                    return (Batchim(stem)) ? stem + '아' : stem;
                case 'ㅓ':
                case 'ㅐ':
                case 'ㅔ':
                    return (Batchim(stem)) ? stem + '어' : stem;
                case 'ㅣ':
                    return (Batchim(stem)) ? stem + '어' : SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅕ');
                case 'ㅜ':
                    bool test = Batchim(stem);
                    return (Batchim(stem)) ? stem + '어' : SetLetterInFinalSyllable(LetterPosition.Medial, stem, 'ㅝ');
                case 'ㅡ':
                    if (!Batchim(stem))
                    {
                        return SetLetterInFinalSyllable(LetterPosition.Medial, stem, (OhAh(stem)) ? 'ㅏ' : 'ㅓ');
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
            string stem = Stem(Verb);
            if (stem == "")
            {
                return "?";
            }

            if (stem[^1] == '있' || stem[^1] == '없')
            {
                return stem + '는';
            }

            char Final = GetLetterFromFinalSyllable(LetterPosition.Final, stem);
            if(Final == 'ㄹ')
            {
                return SetLetterInFinalSyllable(LetterPosition.Final, stem, 'ㄴ');
            }
            else if (Final == 'ㅂ' && IrregularLists.ㅂIrregularList.Contains(Verb))
            {
                return SetLetterInFinalSyllable(LetterPosition.Final, stem, ' ') + '운';
            }

            return (Batchim(stem)) ? stem + '은' : SetLetterInFinalSyllable(LetterPosition.Final, stem, 'ㄴ');
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
                            return Stem(OtherValue);
                        case "hstem":
                            return Hstem(OtherValue);
                        case "specialfcs":
                            return FCS(OtherValue, true);
                        case "fcs":
                            return FCS(OtherValue, false);
                        case "native":
                            return Numbers.Native(OtherValue);
                        case "sino":
                            return Numbers.Sino(OtherValue);
                        case "item":
                            return Numbers.NativeCounter(OtherValue);
                        case "animal":
                            return Numbers.NativeCounter(OtherValue);
                        case "cup":
                            return Numbers.NativeCounter(OtherValue);
                        case "bottle":
                            return Numbers.NativeCounter(OtherValue);
                        case "slice":
                            return Numbers.NativeCounter(OtherValue);
                        case "book":
                            return Numbers.NativeCounter(OtherValue);
                        case "car":
                            return Numbers.NativeCounter(OtherValue);
                        case "action":
                            return Numbers.NativeCounter(OtherValue);
                        case "order":
                            return Numbers.Order(OtherValue);
                        case "clothing":
                            return Numbers.NativeCounter(OtherValue);
                        case "people":
                            return Numbers.NativeCounter(OtherValue);
                        case "bigwig":
                            return Numbers.NativeCounter(OtherValue);
                        case "serving":
                            return Numbers.NativeCounter(OtherValue);
                        case "second":
                            return Numbers.Sino(OtherValue);
                        case "minute":
                            return Numbers.Sino(OtherValue);
                        case "hour":
                            return Numbers.NativeCounter(OtherValue);
                        case "day":
                            return Numbers.Sino(OtherValue);
                        case "month":
                            return Numbers.Month(OtherValue);
                        case "year":
                            return  Numbers.Sino(OtherValue);
                        case "age":
                            return Numbers.NativeCounter(OtherValue);
                        case "$":
                            return Numbers.Sino(OtherValue);
                        case "₩":
                            return Numbers.Sino(OtherValue);
                    }
                }
                else if (exp[0].ToLower() == "unit")
                {
                    switch (exp[1].ToLower())
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
                return PreviousWord + (Batchim(PreviousWord) ? "은" : "는");
            }

            if(rule == "ㄹ/을")
            {
                //ㅂ iregular case
                if(GetLetterFromFinalSyllable(LetterPosition.Final ,PreviousWord) == 'ㅂ' && IrregularLists.ㅂIrregularList.Contains(PreviousWord.Split(" ")[^1]))
                {
                    return SetLetterInFinalSyllable(LetterPosition.Final, PreviousWord, ' ') + "울";
                }
                
                if (!NonㄹBatchim(PreviousWord))
                {
                    return SetLetterInFinalSyllable(LetterPosition.Final, PreviousWord, 'ㄹ');
                }
                return PreviousWord + "을";
            }

            if (rule == "을/를")
            {
                return PreviousWord + (NonㄹBatchim(PreviousWord) ? "을" : "를");
            }

            if (rule == "이/가")
            {
                return PreviousWord + (NonㄹBatchim(PreviousWord) ? "이" : "가");
            }

            if (rule == "과/와")
            {
                return PreviousWord + (NonㄹBatchim(PreviousWord) ? "과" : "와");
            }

            if(rule == "랑이/랑")
            {
                return PreviousWord + (NonㄹBatchim(PreviousWord) ? "랑이" : "랑");
            }

            if (rule == "야/아")
            {
                return PreviousWord + (NonㄹBatchim(PreviousWord) ? "야" : "아");
            }

            if (rule == "이에/예")
            {
                return PreviousWord + (NonㄹBatchim(PreviousWord) ? "이에" : "예");
            }

            if(rule == "으")
            {
                return PreviousWord + (NonㄹBatchim(PreviousWord) ? "으" : "");
            }

            if(rule == "ㅆ")
            {
                return SetLetterInFinalSyllable(LetterPosition.Final, PreviousWord, 'ㅆ');
            }

            //('으로 / 로)


            return PreviousWord + "[" + rule + "]";
        }
    }
}
