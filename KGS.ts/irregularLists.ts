using System;
using System.Collections.Generic;
using System.Text;

namespace KGS
{
    public static class IrregularLists
    {
        //ㄷ irregular verbs -- https://www.koreanwikiproject.com/wiki/%E3%84%B7_irregular_verbs
        public static readonly string[] ㄷIrregularList = new string[] { "걷다", "깨닫다", "듣다", "묻다", "싣다" };

        //ㅂ irregular verbs -- https://www.koreanwikiproject.com/wiki/%E3%85%82_irregular_verbs
        public static readonly string[] ㅂIrregularList = new string[] { "뜨겁다", "차갑다", "가볍다", "고맙다", "곱다", "눕다", "굽다", "귀엽다", "깁다", "까다롭다", "더럽다", "덥다", "돕다", "두렵다", "맵다", "무겁다", "밉다", "반갑다", "부럽다", "아름답다", "어둡다", "어렵다", "쉽다", "줍다", "즐겁다", "춥다" };

        //르 irregular verbs -- https://www.koreanwikiproject.com/wiki/%EB%A5%B4_irregular_verbs
        public static readonly string[] 르RegularList = new string[] { "따르다" };

        //ㄹ irregular verbs -- https://www.koreanwikiproject.com/wiki/%E3%84%B9_irregular_verbs
        //These should be handled when evaluating the particals

        //ㅅ irregular verbs -- https://www.koreanwikiproject.com/wiki/%E3%85%85_irregular_verbs
        public static readonly string[] ㅅIrregularList = new string[] { };

        //으 irregular verbs -- https://www.koreanwikiproject.com/wiki/%EC%9C%BC_irregular_verbs
        public static readonly string[] 으IrregularList = new string[] { };
    }
}
