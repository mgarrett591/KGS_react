using NUnit.Framework;

namespace KGS_TEST
{
    public class StemFCSTests
    {
        public static readonly string FCSTemplet = "{var.fcs}";
        public static readonly string StemTemplet = "{var.stem}";

        [Test]
        public void 켜다_Error()
        {
            Assert.AreEqual("", TestCall.Call(FCSTemplet, "켜다"));
        }

        [Test]
        public void 하()
        {
            Assert.AreEqual("해", TestCall.Call(FCSTemplet, "하다"));
        }

        [Test]
        public void ㅏ_batchim()
        {
            Assert.AreEqual("작아", TestCall.Call(FCSTemplet, "작다"));
        }

        [Test]
        public void ㅏ_no_batchim()
        {
            Assert.AreEqual("싸", TestCall.Call(FCSTemplet, "싸다"));
        }

        [Test]
        public void ㅗ_batchim()
        {
            //새롭다 irregular
            //외롭다 irregular

            Assert.AreEqual("expected", TestCall.Call(FCSTemplet, "Dict"));
        }

        [Test]
        public void ㅗ_no_batchim()
        {
            Assert.AreEqual("와", TestCall.Call(FCSTemplet, "오다"));
        }

        [Test]
        public void ㅣ_batchim()
        {
            Assert.AreEqual("믿어", TestCall.Call(FCSTemplet, "믿다"));
        }

        [Test]
        public void ㅣ_no_batchim()
        {
            Assert.AreEqual("마셔", TestCall.Call(FCSTemplet, "마시다"));
        }

        [Test]
        public void ㅓㅐㅔ_no_batchim()
        {
            Assert.AreEqual("필요없어", TestCall.Call(FCSTemplet, "필요없다"));
        }

        [Test]
        public void ㅓㅐㅔ_batchim()
        {
            Assert.AreEqual("끝내", TestCall.Call(FCSTemplet, "끝내다"));
        }


        [Test]
        public void ㅜ_batchim()
        {
            Assert.AreEqual("높아", TestCall.Call(FCSTemplet, "높다"));
        }

        [Test]
        public void ㅜ_no_batchim()
        {
            Assert.AreEqual("줘", TestCall.Call(FCSTemplet, "주다"));
        }

        [Test]
        public void ㅡ_batchim()
        {
            Assert.AreEqual("떠들어", TestCall.Call(FCSTemplet, "떠들다"));
        }

        [Test]
        public void ㅡ_no_batchim_no_ㅗorㅏ() //May need redefine OhAh..
        {
            Assert.AreEqual("나빠", TestCall.Call(FCSTemplet, "나쁘다"));
        }

        [Test]
        public void ㅡ_no_batchim_ㅗorㅏ() //May need redefine OhAh..
        {
            Assert.AreEqual("잠가", TestCall.Call(FCSTemplet, "잠그다"));
        }

        [Test]
        public void ㅟㅚ()
        {
            Assert.AreEqual("사귀어", TestCall.Call(FCSTemplet, "사귀다"));
        }

        [Test]
        public void NonVerb()
        {

            Assert.AreEqual("?", TestCall.Call(FCSTemplet, "Dict"));
        }

        [Test]
        public void Da()
        {

            Assert.AreEqual("?", TestCall.Call(FCSTemplet, "다"));
        }

    }
}
