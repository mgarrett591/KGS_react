using NUnit.Framework;

namespace KGS_TEST
{
    public class NumberUnitsTests
    {

        [Test]
        public void Native_1()
        {
            Assert.AreEqual("하나", TestCall.Call("{var.native}", "1"));
        }

        [Test]
        public void Sino_1()
        {
            Assert.AreEqual("일", TestCall.Call("{var.sino}", "1"));
        }

        [Test]
        public void Item_1()
        {
            Assert.AreEqual("한 개", TestCall.Call("{var.item} {unit.item}", "1"));
        }

        [Test]
        public void Animal_1()
        {
            Assert.AreEqual("한 마리", TestCall.Call("{var.animal} {unit.animal}", "1"));
        }

        [Test]
        public void Cup_1()
        {
            Assert.AreEqual("한 잔", TestCall.Call("{var.cup} {unit.cup}", "1"));
        }

        [Test]
        public void Bottle_1()
        {
            Assert.AreEqual("한 병", TestCall.Call("{var.bottle} {unit.bottle}", "1"));
        }

        [Test]
        public void Slice_1()
        {
            Assert.AreEqual("한 조각", TestCall.Call("{var.slice} {unit.slice}", "1"));
        }

        [Test]
        public void Book_1()
        {
            Assert.AreEqual("한 권", TestCall.Call("{var.book} {unit.book}", "1"));
        }

        [Test]
        public void Car_1()
        {
            Assert.AreEqual("한 대", TestCall.Call("{var.car} {unit.car}", "1"));
        }

        [Test]
        public void Action_1()
        {
            Assert.AreEqual("한 번", TestCall.Call("{var.action} {unit.action}", "1"));
        }

        [Test]
        public void Order_1()
        {
            Assert.AreEqual("첫번째", TestCall.Call("{var.order}{unit.order}", "1"));
        }

        [Test]
        public void Clothing_1()
        {
            Assert.AreEqual("한 벌", TestCall.Call("{var.clothing} {unit.clothing}", "1"));
        }

        [Test]
        public void People_1()
        {
            Assert.AreEqual("한 명", TestCall.Call("{var.people} {unit.people}", "1"));
        }

        [Test]
        public void Bigwig_1()
        {
            Assert.AreEqual("한 분", TestCall.Call("{var.bigwig} {unit.bigwig}", "1"));
        }

        [Test]
        public void Serving_1()
        {
            Assert.AreEqual("한 인분", TestCall.Call("{var.serving} {unit.serving}", "1"));
        }

        [Test]
        public void Second_1()
        {
            Assert.AreEqual("일초", TestCall.Call("{var.second}{unit.second}", "1"));
        }

        [Test]
        public void Minute_1()
        {
            Assert.AreEqual("일분", TestCall.Call("{var.minute}{unit.minute}", "1"));
        }

        [Test]
        public void Hour_1()
        {
            Assert.AreEqual("한시", TestCall.Call("{var.hour}{unit.hour}", "1"));
        }

        [Test]
        public void Day_1()
        {
            Assert.AreEqual("일일", TestCall.Call("{var.day}{unit.day}", "1"));
        }

        [Test]
        public void Month_1()
        {
            Assert.AreEqual("유월", TestCall.Call("{var.month}{unit.month}", "6"));
        }

        [Test]
        public void Year_1()
        {
            Assert.AreEqual("이천십칠년", TestCall.Call("{var.year}{unit.year}", "2017"));
        }

        [Test]
        public void Age_1()
        {
            Assert.AreEqual("스물세 살", TestCall.Call("{var.age} {unit.age}", "23"));
        }

        [Test]
        public void Dollar_1()
        {
            Assert.AreEqual("이백 달러", TestCall.Call("{var.$} {unit.$}", "200"));
        }

        [Test]
        public void Won_5000()
        {
            Assert.AreEqual("오천 원", TestCall.Call("{var.₩} {unit.₩}", "5000"));
        }

        [Test]
        public void List()
        {
            string e = "item, animal, cup, bottle, slice, book, car, action, order, clothing, people, bigwigs, servings, second, minute, hour, day, month, year, age, $, ₩";
            Assert.AreEqual(e, TestCall.Call("{unit.list}", ""));
        }
    }
}