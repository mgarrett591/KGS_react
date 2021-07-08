using NUnit.Framework;

namespace KGS_TEST
{
    public class NativeNumberTests
    {

        public static readonly string Native = "{var.native}";

        [Test]
        public void Native_0()
        {
            Assert.AreEqual("공", TestCall.Call(Native, "0"));
        }

        [Test]
        public void Native_1()
        {
            Assert.AreEqual("하나", TestCall.Call(Native, "1"));
        }

        [Test]
        public void Native_2()
        {
            Assert.AreEqual("둘", TestCall.Call(Native, "2"));
        }

        [Test]
        public void Native_3()
        {
            Assert.AreEqual("셋", TestCall.Call(Native, "3"));
        }

        [Test]
        public void Native_4()
        {
            Assert.AreEqual("넷", TestCall.Call(Native, "4"));
        }

        [Test]
        public void Native_5()
        {
            Assert.AreEqual("다섯", TestCall.Call(Native, "5"));
        }

        [Test]
        public void Native_6()
        {
            Assert.AreEqual("여섯", TestCall.Call(Native, "6"));
        }

        [Test]
        public void Native_7()
        {
            Assert.AreEqual("일곱", TestCall.Call(Native, "7"));
        }

        [Test]
        public void Native_8()
        {
            Assert.AreEqual("여덟", TestCall.Call(Native, "8"));
        }

        [Test]
        public void Native_9()
        {
            Assert.AreEqual("아홉", TestCall.Call(Native, "9"));
        }

        //10
        [Test]
        public void Native_10()
        {
            Assert.AreEqual("열", TestCall.Call(Native, "10"));
        }

        [Test]
        public void Native_20()
        {
            Assert.AreEqual("스물", TestCall.Call(Native, "20"));
        }

        [Test]
        public void Native_30()
        {
            Assert.AreEqual("서른", TestCall.Call(Native, "30"));
        }

        [Test]
        public void Native_40()
        {
            Assert.AreEqual("마흔", TestCall.Call(Native, "40"));
        }

        [Test]
        public void Native_50()
        {
            Assert.AreEqual("쉰", TestCall.Call(Native, "50"));
        }

        [Test]
        public void Native_60()
        {
            Assert.AreEqual("예순", TestCall.Call(Native, "60"));
        }

        [Test]
        public void Native_70()
        {
            Assert.AreEqual("일흔", TestCall.Call(Native, "70"));
        }

        [Test]
        public void Native_80()
        {
            Assert.AreEqual("여든", TestCall.Call(Native, "80"));
        }

        [Test]
        public void Native_90()
        {
            Assert.AreEqual("아흔", TestCall.Call(Native, "90"));
        }

        [Test]
        public void Native_10s()
        {
            Assert.AreEqual("열아홉", TestCall.Call(Native, "19"));
        }

        [Test]
        public void Native_20s()
        {
            Assert.AreEqual("스물여덟", TestCall.Call(Native, "28"));
        }

        [Test]
        public void Native_30s()
        {
            Assert.AreEqual("서른일곱", TestCall.Call(Native, "37"));
        }

        [Test]
        public void Native_40s()
        {
            Assert.AreEqual("마흔여섯", TestCall.Call(Native, "46"));
        }

        [Test]
        public void Native_50s()
        {
            Assert.AreEqual("쉰다섯", TestCall.Call(Native, "55"));
        }

        [Test]
        public void Native_60s()
        {
            Assert.AreEqual("예순넷", TestCall.Call(Native, "64"));
        }

        [Test]
        public void Native_70s()
        {
            Assert.AreEqual("일흔셋", TestCall.Call(Native, "73"));
        }

        [Test]
        public void Native_80s()
        {
            Assert.AreEqual("여든둘", TestCall.Call(Native, "82"));
        }

        [Test]
        public void Native_90s()
        {
            Assert.AreEqual("아흔하나", TestCall.Call(Native, "91"));
        }

        //100
        [Test]
        public void Native_100()
        {
            Assert.AreEqual("백", TestCall.Call(Native, "100"));
        }


    }

}
