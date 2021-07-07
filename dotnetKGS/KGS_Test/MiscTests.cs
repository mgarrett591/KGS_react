using NUnit.Framework;

namespace KGS_TEST
{
    public class MiscTests
    {
        [Test]
        public void KeepCase()
        {
            Assert.AreEqual("Success!", TestCall.Call("{var}", "Success!"));
        }
    }
}

        