using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace KGS 
{
    public static class Interpolator
    {

        private static bool ValidDepth(int Depth)
        {
            return Depth == 0b10 || Depth == 0b1 || Depth == 0b0; 
        }

        private static int DeltaDepth(char Letter)
        {
            return Letter switch
            {
                '{' =>   0b1,
                '}' =>  -0b1,
                '[' =>  0b10,
                ']' => -0b10,
                 _  =>   0b0,
            };
        }

        private static bool CheckSyntax(string Templet)
        {
            int Depth = 0;
            foreach(char Letter in Templet)
            {
                Depth += DeltaDepth(Letter);
                if (!ValidDepth(Depth))
                {
                    return false;
                }
            }

            return true;
        }

        public static string Interpolate(string Templet, Dictionary<string, string> VariableTable)
        {
            //Syntax
            if (!CheckSyntax(Templet))
            {
                return "Check your Syntax";
            }

            Templet = Templet.Replace('}', '{');

            //Variables
            string[] VariableInterpolationTable = Templet.Split('{');
            for (int i = 1; i < VariableInterpolationTable.Length; i += 2)
            {

                VariableInterpolationTable[i] = Utilities.EvaluateVariableTableKey(VariableTable, VariableInterpolationTable[i]);
            }

            Templet = string.Join(String.Empty, VariableInterpolationTable);


            //Particals
            Templet = Templet.Replace(']', '[');
            string[] ParticleInterpolationTable = Templet.Split('[');
            for (int i = 1; i < ParticleInterpolationTable.Length; i += 2)
            {
                ParticleInterpolationTable[i] = Utilities.EvaluateParticle(ParticleInterpolationTable[i-1], ParticleInterpolationTable[i]);
                ParticleInterpolationTable[i - 1] = "";
            }

            Templet = string.Join(String.Empty, ParticleInterpolationTable);


            return Templet;
        }
    }
}
