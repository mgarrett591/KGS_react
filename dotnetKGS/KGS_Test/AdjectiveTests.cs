using NUnit.Framework;

namespace KGS_TEST
{
    public class AdjectiveTests
    {
        public static readonly string Templet = "{var.adj}";

        [Test]
        public void Regular_no_batchim()
        {
            Assert.AreEqual("싼", TestCall.Call(Templet, "싸다"));
        }

        [Test]
        public void 르_Non_Irregular_no_batchim()
        {
            Assert.AreEqual("빠른", TestCall.Call(Templet, "빠르다"));
        }

        [Test]
        public void Regular_batchim()
        {
            Assert.AreEqual("같은", TestCall.Call(Templet, "같다"));
        }

        [Test]
        public void Regular_Hada()
        {
            Assert.AreEqual("조용한", TestCall.Call(Templet, "조용하다"));
        }

        [Test]
        public void ㅂ_Irregular()
        {
            Assert.AreEqual("매운", TestCall.Call(Templet, "맵다"));
        }

        [Test]
        public void Regular_ㄹ_batchim()
        {
            Assert.AreEqual("단", TestCall.Call(Templet, "달다"));
        }

        [Test]
        public void 있다()
        {
            Assert.AreEqual("재미있는", TestCall.Call(Templet, "재미있다"));
        }

        [Test]
        public void 없다()
        {
            Assert.AreEqual("맛없는", TestCall.Call(Templet, "맛없다"));
        }
    }
}