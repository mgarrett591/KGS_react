using NUnit.Framework;

namespace KGS_TEST
{
    public class SinoNumbersTest
    {
        public static readonly string Sino = "{var.sino}";

        [Test]
        public void Sino_0()
        {
            Assert.AreEqual("공", TestCall.Call(Sino, "0"));
        }

        [Test]
        public void Sino_1()
        {
            Assert.AreEqual("일", TestCall.Call(Sino, "1"));
        }

        [Test]
        public void Sino_2()
        {
            Assert.AreEqual("이", TestCall.Call(Sino, "2"));
        }

        [Test]
        public void Sino_3()
        {
            Assert.AreEqual("삼", TestCall.Call(Sino, "3"));
        }

        [Test]
        public void Sino_4()
        {
            Assert.AreEqual("사", TestCall.Call(Sino, "4"));
        }

        [Test]
        public void Sino_5()
        {
            Assert.AreEqual("오", TestCall.Call(Sino, "5"));
        }

        [Test]
        public void Sino_7()
        {
            Assert.AreEqual("칠", TestCall.Call(Sino, "7"));
        }

        //10
        [Test]
        public void Sino_10()
        {
            Assert.AreEqual("십", TestCall.Call(Sino, "10"));
        }

        [Test]
        public void Sino_20()
        {
            Assert.AreEqual("이십", TestCall.Call(Sino, "20"));
        }

        [Test]
        public void Sino_10s_1st()
        {
            Assert.AreEqual("사십구", TestCall.Call(Sino, "49"));
        }

        [Test]
        public void Sino_10s_2nd()
        {
            Assert.AreEqual("육십팔", TestCall.Call(Sino, "68"));
        }

        [Test]
        public void Sino_10s_3rd()
        {
            Assert.AreEqual("칠십삼", TestCall.Call(Sino, "73"));
        }

        [Test]
        public void Sino_10s_4th()
        {
            Assert.AreEqual("칠십오", TestCall.Call(Sino, "75"));
        }

        [Test]
        public void Sino_10s_5th()
        {
            Assert.AreEqual("삼십이", TestCall.Call(Sino, "32"));
        }

        [Test]
        public void Sino_10s_6th()
        {
            Assert.AreEqual("오십팔", TestCall.Call(Sino, "58"));
        }

        [Test]
        public void Sino_10s_7th()
        {
            Assert.AreEqual("칠십구", TestCall.Call(Sino, "79"));
        }

        //100
        [Test]
        public void Sino_100()
        {
            Assert.AreEqual("백", TestCall.Call(Sino, "100"));
        }

        [Test]
        public void Sino_100s_1st()
        {
            Assert.AreEqual("오백이십삼", TestCall.Call(Sino, "523"));
        }

        [Test]
        public void Sino_100s_2nd()
        {
            Assert.AreEqual("칠백십이", TestCall.Call(Sino, "712"));
        }

        [Test]
        public void Sino_100s_3rd()
        {
            Assert.AreEqual("팔백팔십육", TestCall.Call(Sino, "886"));
        }

        [Test]
        public void Sino_100s_4th()
        {
            Assert.AreEqual("백사십구", TestCall.Call(Sino, "149"));
        }

        [Test]
        public void Sino_100s_5th()
        {
            Assert.AreEqual("삼백육십구", TestCall.Call(Sino, "369"));
        }

        [Test]
        public void Sino_100s_6th()
        {
            Assert.AreEqual("백사십사", TestCall.Call(Sino, "144"));
        }

        // 1_000
        [Test]
        public void Sino_1000()
        {
            Assert.AreEqual("천", TestCall.Call(Sino, "1000"));
        }

        [Test]
        public void Sino_1000s_1st()
        {
            Assert.AreEqual("사천삼백사십팔", TestCall.Call(Sino, "4348"));
        }

        [Test]
        public void Sino_1000s_2nd()
        {
            Assert.AreEqual("삼천칠백십", TestCall.Call(Sino, "3710"));
        }

        [Test]
        public void Sino_1000s_3rd()
        {
            Assert.AreEqual("팔천칠백삼십사", TestCall.Call(Sino, "8734"));
        }

        [Test]
        public void Sino_1000s_4th()
        {
            Assert.AreEqual("구천이백칠십일", TestCall.Call(Sino, "9271"));
        }

        [Test]
        public void Sino_1000s_5th()
        {
            Assert.AreEqual("이천이십이", TestCall.Call(Sino, "2022"));
        }

        //10_000

        [Test]
        public void Sino_10_000()
        {
            Assert.AreEqual("만", TestCall.Call(Sino, "10000"));
        }

        [Test]
        public void Sino_10_000s_1st()
        {
            Assert.AreEqual("칠만 이천이백십", TestCall.Call(Sino, "72210"));
        }

        [Test]
        public void Sino_10_000s_2nd()
        {
            Assert.AreEqual("사만 팔천사백이", TestCall.Call(Sino, "48402"));
        }

        [Test]
        public void Sino_10_000s_3rd()
        {
            Assert.AreEqual("구만 삼천팔백팔십", TestCall.Call(Sino, "93880"));
        }

        [Test]
        public void Sino_10_000s_4th()
        {
            Assert.AreEqual("사만 오천이백십이", TestCall.Call(Sino, "45212"));
        }

        //100_000
        [Test]
        public void Sino_100_000()
        {
            Assert.AreEqual("십만", TestCall.Call(Sino, "100000"));
        }

        [Test]
        public void Sino_100_000s_1st()
        {
            Assert.AreEqual("육십사만 육천삼백사십육", TestCall.Call(Sino, "646346"));
        }

        [Test]
        public void Sino_100_000s_2nd()
        {
            Assert.AreEqual("삼십이만 삼천삼백오십삼", TestCall.Call(Sino, "323353"));
        }

        [Test]
        public void Sino_100_000s_3rd()
        {
            Assert.AreEqual("구십육만 칠천육백삼십칠", TestCall.Call(Sino, "967637"));
        }

        //1_000_000
        [Test]
        public void Sino_1_000_000()
        {
            Assert.AreEqual("백만", TestCall.Call(Sino, "1000000"));
        }

        [Test]
        public void Sino_1_000_000s_1st()
        {
            Assert.AreEqual("삼백팔십팔만 구백십사", TestCall.Call(Sino, "3880914"));
        }

        [Test]
        public void Sino_1_000_000s_2nd()
        {
            Assert.AreEqual("백오십구만 팔천삼백오십칠", TestCall.Call(Sino, "1598357"));
        }

        //10_000_000
        [Test]
        public void Sino_10_000_000()
        {
            Assert.AreEqual("천만", TestCall.Call(Sino, "10000000"));
        }

        [Test]
        public void Sino_10_000_000s()
        {
            Assert.AreEqual("천사백칠십사만 육백사", TestCall.Call(Sino, "14740604"));
        }

        //100_000_000
        [Test]
        public void Sino_100_000_000()
        {
            Assert.AreEqual("일억", TestCall.Call(Sino, "100000000"));
        }

        [Test]
        public void Sino_100_000_000s()
        {
            Assert.AreEqual("사억 이천사십구만 오천백칠십일", TestCall.Call(Sino, "420495171"));
        }

        //1_000_000_000
        [Test]
        public void Sino_1_000_000_000()
        {
            Assert.AreEqual("십억", TestCall.Call(Sino, "1000000000"));
        }

        [Test]
        public void Sino_1_000_000_000s()
        {
            Assert.AreEqual("육십칠억 구천삼백팔십이만 오천칠백이십구", TestCall.Call(Sino, "6793825729"));
        }

        //10_000_000_000
        [Test]
        public void Sino_10_000_000_000()
        {
            Assert.AreEqual("백억", TestCall.Call(Sino, "10000000000"));
        }

        [Test]
        public void Sino_10_000_000_000s()
        {
            Assert.AreEqual("삼백팔십삼억 팔천칠백팔십이만 천백구십이", TestCall.Call(Sino, "38387821192"));
        }

        //100_000_000_000
        [Test]
        public void Sino_100_000_000_000()
        {
            Assert.AreEqual("천억", TestCall.Call(Sino, "100000000000"));
        }

        [Test]
        public void Sino_100_000_000_000s()
        {
            Assert.AreEqual("구천구백오십팔억 팔천이백구십육만 구천오백구십사", TestCall.Call(Sino, "995882969594"));
        }

        //1_000_000_000_000 out of scope
        [Test]
        public void Sino_1_000_000_000_000()
        {
            Assert.AreEqual("일조", TestCall.Call(Sino, "1000000000000"));
        }

        [Test]
        public void Sino_1_000_000_000_000s()
        {
            Assert.AreEqual("일이삼사오육칠팔구일이삼사", TestCall.Call(Sino, "1234567891234"));
        }

    }

}