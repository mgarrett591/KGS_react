using KGS;
using System.Collections.Generic;

namespace KGS_TEST
{
    public class TestCall
    {
        public static string Call(string templet, string value)
        {
            Dictionary<string, string> VarTable = new Dictionary<string, string>
            {
                { "var", value }
            };
            return KGS.Interpolator.Interpolate(templet, VarTable);
        }

    }
}
