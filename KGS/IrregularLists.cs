using System;
using System.Collections.Generic;
using System.Text;

namespace KGS
{
    public static class IrregularLists
    {
        public static readonly string[] ㄷIrregularList = new string[] {};
        
        public static readonly string[] ㅂIrregularList = new string[] { };
        
        public static readonly string[] 르IrregularList = new string[] { };
        
        public static readonly string[] ㅅIrregularList = new string[] { };
        
        public static readonly string[] 으IrregularList = new string[] { };

        private static readonly Dictionary<string, string> IrgularStems = new Dictionary<string, string>
        {
            //ㄷ irregular verbs -- https://www.koreanwikiproject.com/wiki/%E3%84%B7_irregular_verbs
            {"걷", "걸어"},
            {"깨닫", "깨달아"},
            {"듣", "들어"},
            {"묻", "물어"},
            {"싣", "실어"},

            //ㅂ irregular verbs -- https://www.koreanwikiproject.com/wiki/%E3%85%82_irregular_verbs
            {"뜨겁", "뜨거워"},
            {"차갑", "차가워"},
            {"가볍", "가벼워"},
            {"고맙", "고마워"},
            {"곱", "고와"},
            {"눕", "누워"},
            {"굽", "구워"},
            {"귀엽", "귀여워"},
            {"깁", "기워"},
            {"까다롭", "까다로워"},
            {"더럽", "더러워"},
            {"덥", "더워"},
            {"돕", "도와"},
            {"두렵", "두려워"},
            {"맵", "매워"},
            {"무겁", "무거워"},
            {"밉", "미워"},
            {"반갑", "반가워"},
            {"부럽", "부러워"},
            {"아름답", "아름다워"},
            {"어둡", "어두워"},
            {"어렵", "어려워"},
            {"쉽", "쉬워"},
            {"줍", "주워"},
            {"즐겁", "즐거워"},
            {"춥", "추워"}
        };

        //Other Irregular verbs types

        //ㄹ irregular verbs -- https://www.koreanwikiproject.com/wiki/%E3%84%B9_irregular_verbs
        //These should be handled when evaluating the particals

        //르 irregular verbs -- https://www.koreanwikiproject.com/wiki/%EB%A5%B4_irregular_verbs
        //Seem to be global

        //ㅅ irregular verbs -- https://www.koreanwikiproject.com/wiki/%E3%85%85_irregular_verbs
        // These are not global

        //으 irregular verbs -- https://www.koreanwikiproject.com/wiki/%EC%9C%BC_irregular_verbs
        //These seem to be global

    }
}
