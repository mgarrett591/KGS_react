using System;
using System.Collections.Generic;
using System.Text;

namespace KGS
{
    public static class CounterDict
    {
        public static readonly Dictionary<string, string> Dict = new Dictionary<string, string>()
        {
            {"item" , "개"},
            {"animal" , "마리"},
            {"cup" , "잔"},
            {"bottle" , "병"},
            {"slice" , "조각"},
            {"book" , "권"},
            {"car" , "대"},
            {"action" , "번"},
            {"order" , "번째"},
            {"clothing" , "벌"},
            {"people" , "명"},
            {"bigwig" , "분"},
            {"serving" , "인분"},
            {"second" , "초"},
            {"minute" , "분"},
            {"hour" , "시"},
            {"day" , "일"},
            {"month" , "월"},
            {"year" , "년"},
            {"age", "살" },
            {"$", "달러" },
            {"₩", "원" }
        };

        public static string List()
        {
            string List = "";
            foreach (string Key in Dict.Keys)
            {
                List += Key + ", ";
            }

            return List.Substring(0, List.Length - 2);
        } 
    }
}
