using NUnit.Framework;

namespace KGS_TEST
{

    public class ParticleTests
    {
        public static readonly string TempletPrefix = "{var}";
        /*
        [Test]
        public void TestMethod1()
        {
        }

        [Test]
        public void TopicBatchim()
        {

        }

        [Test]
        public void TopicNoBatchim()
        {

        }

        [Test]
        public void SubjectBatchim()
        {

        }

        [Test]
        public void SubjectNoBatchim()
        {

        }
        */
    }
}

/*
 public static string EvaluateParticle(string PreviousWord, string rule)
        {
            if (rule == "은/는")
            {
                return PreviousWord + (Batchim(PreviousWord) ? "은" : "는");
            }

            if(rule == "ㄹ/을")
            {
                //ㅂ iregular case
                if(GetLetterFromFinalSyllable(LetterPosition.Final ,PreviousWord) == 'ㅂ')
                {
                    return SetLetterInFinalSyllable(LetterPosition.Final, PreviousWord, ' ') + "울";
                }
                
                if (!Batchim(PreviousWord))
                {
                    return SetLetterInFinalSyllable(LetterPosition.Final, PreviousWord, 'ㄹ');
                }
                return PreviousWord + "을";
            }

            if (rule == "을/를")
            {
                return PreviousWord + (Batchim(PreviousWord) ? "을" : "를");
            }

            if (rule == "이/가")
            {
                return PreviousWord + (Batchim(PreviousWord) ? "이" : "가");
            }

            if (rule == "과/와")
            {
                return PreviousWord + (Batchim(PreviousWord) ? "과" : "와");
            }

            if(rule == "랑이/랑")
            {
                return PreviousWord + (Batchim(PreviousWord) ? "랑이" : "랑");
            }

            if (rule == "야/아")
            {
                return PreviousWord + (Batchim(PreviousWord) ? "야" : "아");
            }

            if (rule == "이에/예")
            {
                return PreviousWord + (Batchim(PreviousWord) ? "이에" : "예");
            }

            if(rule == "으")
            {
                return PreviousWord + (Batchim(PreviousWord) ? "으" : "");
            }

            if(rule == "ㅆ")
            {
                return SetLetterInFinalSyllable(LetterPosition.Final, PreviousWord, 'ㅆ');
            }

            //('으로 / 로)


            return PreviousWord + "[" + rule + "]";
        }
 
 */