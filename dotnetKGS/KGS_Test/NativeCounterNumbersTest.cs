using NUnit.Framework;

namespace KGS_TEST
{
    public class NativeCounterNumbersTest
    {
        public static readonly string NativeCounter = "{var.item}";

        [Test]
        public void Native_0()
        {
            Assert.AreEqual("공", TestCall.Call(NativeCounter, "0"));
        }

        [Test]
        public void Native_1()
        {
            Assert.AreEqual("한", TestCall.Call(NativeCounter, "1"));
        }

        [Test]
        public void Native_2()
        {
            Assert.AreEqual("두", TestCall.Call(NativeCounter, "2"));
        }

        [Test]
        public void Native_3()
        {
            Assert.AreEqual("세", TestCall.Call(NativeCounter, "3"));
        }

        [Test]
        public void Native_4()
        {
            Assert.AreEqual("네", TestCall.Call(NativeCounter, "4"));
        }

        [Test]
        public void Native_5()
        {
            Assert.AreEqual("다섯", TestCall.Call(NativeCounter, "5"));
        }

        [Test]
        public void Native_6()
        {
            Assert.AreEqual("여섯", TestCall.Call(NativeCounter, "6"));
        }

        [Test]
        public void Native_7()
        {
            Assert.AreEqual("일곱", TestCall.Call(NativeCounter, "7"));
        }

        [Test]
        public void Native_8()
        {
            Assert.AreEqual("여덟", TestCall.Call(NativeCounter, "8"));
        }

        [Test]
        public void Native_9()
        {
            Assert.AreEqual("아홉", TestCall.Call(NativeCounter, "9"));
        }

        //10
        [Test]
        public void Native_10()
        {
            Assert.AreEqual("열", TestCall.Call(NativeCounter, "10"));
        }

        [Test]
        public void Native_20()
        {
            Assert.AreEqual("스무", TestCall.Call(NativeCounter, "20"));
        }

        [Test]
        public void Native_30()
        {
            Assert.AreEqual("서른", TestCall.Call(NativeCounter, "30"));
        }

        [Test]
        public void Native_40()
        {
            Assert.AreEqual("마흔", TestCall.Call(NativeCounter, "40"));
        }

        [Test]
        public void Native_50()
        {
            Assert.AreEqual("쉰", TestCall.Call(NativeCounter, "50"));
        }

        [Test]
        public void Native_60()
        {
            Assert.AreEqual("예순", TestCall.Call(NativeCounter, "60"));
        }

        [Test]
        public void Native_70()
        {
            Assert.AreEqual("일흔", TestCall.Call(NativeCounter, "70"));
        }

        [Test]
        public void Native_80()
        {
            Assert.AreEqual("여든", TestCall.Call(NativeCounter, "80"));
        }

        [Test]
        public void Native_90()
        {
            Assert.AreEqual("아흔", TestCall.Call(NativeCounter, "90"));
        }

        [Test]
        public void Native_10s()
        {
            Assert.AreEqual("열아홉", TestCall.Call(NativeCounter, "19"));
        }

        [Test]
        public void Native_20s()
        {
            Assert.AreEqual("스물여덟", TestCall.Call(NativeCounter, "28"));
        }

        [Test]
        public void Native_30s()
        {
            Assert.AreEqual("서른일곱", TestCall.Call(NativeCounter, "37"));
        }

        [Test]
        public void Native_40s()
        {
            Assert.AreEqual("마흔여섯", TestCall.Call(NativeCounter, "46"));
        }

        [Test]
        public void Native_50s()
        {
            Assert.AreEqual("쉰다섯", TestCall.Call(NativeCounter, "55"));
        }

        [Test]
        public void Native_60s()
        {
            Assert.AreEqual("예순네", TestCall.Call(NativeCounter, "64"));
        }

        [Test]
        public void Native_70s()
        {
            Assert.AreEqual("일흔세", TestCall.Call(NativeCounter, "73"));
        }

        [Test]
        public void Native_80s()
        {
            Assert.AreEqual("여든두", TestCall.Call(NativeCounter, "82"));
        }

        [Test]
        public void Native_90s()
        {
            Assert.AreEqual("아흔한", TestCall.Call(NativeCounter, "91"));
        }

        //100
        [Test]
        public void Native_100()
        {
            Assert.AreEqual("백", TestCall.Call(NativeCounter, "100"));
        }
    }
}
