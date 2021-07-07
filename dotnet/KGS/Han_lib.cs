using System;
using System.Collections.Generic;
using System.Text;

namespace KGS
{
    class Han_lib
    {
        private static readonly string[] InitialConsonants = { "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ" };
        private static readonly string[] MedialVowels = { "ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ" };
        private static readonly string[] FinalConsonants = { " ", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ" };
        //                                                    0     1    2     3     4     5      6     7     8    9     10     11   12     13    14   15     16   17    18    19     20
        public enum LetterPosition
        {
            Initial,
            Medial,
            Final
        }

        public static bool Batchim(string Word)
        {
            if (Word == "")
            {
                return false;
            }

            int codepoint = Word[^1];
            return ((codepoint - 44032) % 588) % 28 != 0;
        }

        public static bool NonㄹBatchim(string Word)
        {
            if (Word == "")
            {
                return false;
            }

            int codepoint = Word[^1];
            codepoint = ((codepoint - 44032) % 588) % 28;
            return codepoint != 0 && codepoint != 8;
        }

        public static bool OhAh(string Word)
        {
            char SecondToLastVowel = GetLetterFromFinalSyllable(LetterPosition.Medial, Stem(Word));
            return SecondToLastVowel == 'ㅗ' || SecondToLastVowel == 'ㅏ';
        }

        public static bool IndexInRange(string[] RangeArray, int index)
        {
            return index >= 0 && index < RangeArray.Length;
        }

        public static char GetLetterFromFinalSyllable(LetterPosition LP, string Word)
        {
            if (Word == "")
            {
                return ' ';
            }

            int codepoint = Word[^1];
            codepoint -= 44032;

            int InitialConsonant = codepoint / 588;
            if (LP == LetterPosition.Initial)
            {
                return IndexInRange(InitialConsonants, InitialConsonant) ? InitialConsonants[InitialConsonant][0] : ' ';
            }

            codepoint %= 588;

            int MedialVowel = codepoint / 28;
            if (LP == LetterPosition.Medial)
            {
                return IndexInRange(MedialVowels, MedialVowel) ? MedialVowels[MedialVowel][0] : ' ';
            }

            int FinalConsonant = codepoint % 28;
            return IndexInRange(FinalConsonants, FinalConsonant) ? FinalConsonants[FinalConsonant][0] : ' ';
        }

        public static int Trylookup(string[] CharArray, int DefaultValue, char letter)
        {
            int index = Array.IndexOf(CharArray, letter.ToString());
            return (index != -1) ? index : DefaultValue;
        }

        public static string SetLetterInFinalSyllable(LetterPosition LP, string Word, char NewLetter)
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

        public static string Stem(string Verb)
        {
            if (Verb == "")
            {
                return "";
            }

            return Verb[0..^1];
        }

        public static string Hstem(string Verb)
        {
            string stem = Stem(Verb);

            if (stem == "")
            {
                return "";
            }

            return (stem[^1] == '하') ? Stem(stem) : stem;
        }
    }
}
