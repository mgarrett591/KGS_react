using System;
using System.Collections.Generic;
using System.Text;

namespace KGS
{
    public static class Num_lib
    {
        private static readonly string[] NativeOnes = new string[] { "", "하나", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉" };
        private static readonly string[] NativeTens = new string[] { "", "열", "스물", "서른", "마흔", "쉰", "예순", "일흔", "여든", "아흔" };

        private static readonly string[] NativeCounterOnes = new string[] { "", "한", "두", "세", "네", "다섯", "여섯", "일곱", "여덟", "아홉" };

        private static readonly string[] SunoOnes = new string[] {"","일","이", "삼", "사", "오", "육", "칠", "팔", "구"};
        private static readonly string[] NoIll = new string[] { "", "", "이", "삼", "사", "오", "육", "칠", "팔", "구" };


        public static string Native(string number)
        {
            if(Int16.TryParse(number, out short value) && value > 0 && value < 100)
            {
                return NativeTens[value / 10] + NativeOnes[value % 10];
            }
            
            return Sino(number);
        }

        public static string Order(string number)
        {
            if (number == "1")
            {
                return "첫";
            }

            return NativeCounter(number);
        }

        public static string Month(string number)
        {
            return number switch
            {
                "6" => "유",
                "10" => "시",
                _ => Sino(number)
            };
        }
        public static string NativeCounter(string number)
        {
            if(number == "20")
            {
                return "스무";
            }

            if (Int16.TryParse(number, out short value) && value > 0 && value < 100)
            {
                return NativeTens[value / 10] + NativeCounterOnes[value % 10];
            }

            return Sino(number);
        }

        public static string Digits(string number)
        {
            string value = number;   
            value = value.Replace('0', '공');
            value = value.Replace('1', '일');
            value = value.Replace('2', '이');
            value = value.Replace('3', '삼');
            value = value.Replace('4', '사');
            value = value.Replace('5', '오');
            value = value.Replace('6', '육');
            value = value.Replace('7', '칠');
            value = value.Replace('8', '팔');
            value = value.Replace('9', '구');
            return value;
        }

        public static string Sino(string number)
        {
            if(number == "0")
            {
                return "공";
            }

            if (UInt64.TryParse(number, out ulong value) && value <= 1000000000000)
            {
                if (value == 1000000000000) return "일조";
                
                return 억(value) + 만(value) + 천(value) + 백(value) + 십(value) + 일(value);
                
                //return 억(value) + 만(value) + 천(value) + 백(value) + 십(value) + 일(value);
            }


            return Digits(number);
        }

        private static string 일(ulong number)
        {
            return SunoOnes[number % 10];
        }

        private static string 십(ulong number)
        {
            if((number % 100) / 10 == 0)
            {
                return "";
            }
            
            return NoIll[(number % 100) / 10] + "십";
        }
        private static string 백(ulong number)
        {
            if ((number % 1000) / 100 == 0)
            {
                return "";
            }

            return NoIll[(number % 1000) / 100] + "백";
        }

        private static string 천(ulong number)
        {
            if ((number % 10000) / 1000 == 0)
            {
                return "";
            }

            return NoIll[(number % 10000) / 1000] + "천";
        }

        private static string 만(ulong number)
        {
            ulong man = (number % 100_000_000) / 10_000;
            if (man == 0)
            {
                return "";
            }

            return 천(man) + 백(man) + 십(man) + NoIll[man % 10] + "만" + ((number % 10_000 == 0)?"":" ");
        }

        private static string 억(ulong number)
        {
            ulong oek = (number % 1_000_000_000_000) / 100_000_000;
            if (oek == 0)
            {
                return "";
            }

            return 천(oek) + 백(oek) + 십(oek) + 일(oek) + "억" + ((number % 100_000_000 == 0) ? "" : " ");
        }
    }
}
