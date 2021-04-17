using NUnit.Framework;

namespace KGS_TEST
{
    public class SpecialCaseNumbersTest
    {

        [Test]
        public void Order_1()
        {
            Assert.AreEqual("첫", TestCall.Call("{var.order}", "1"));
        }

        [Test]
        public void Month_6()
        {
            Assert.AreEqual("유", TestCall.Call("{var.month}", "6"));
        }

        [Test]
        public void Month_10()
        {
            Assert.AreEqual("시", TestCall.Call("{var.month}", "10"));
        }
    }
}