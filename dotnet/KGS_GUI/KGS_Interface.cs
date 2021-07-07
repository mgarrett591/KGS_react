using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace KGS_GUI
{
    public static class KGS_Interface
    {
        public static string[] GetVarList(string Templet)
        {
            Templet = Templet.Replace('{', '}');
            string[] VarCandidates = Templet.Split('}');
            List<string> Vars = new List<string>();
            for(int i = 0; i < VarCandidates.Length; i++)
            {
                if(i % 2 != 0) 
                {
                    string VarCandidate = VarCandidates[i].ToLower().Split('.')[0];
                    if (VarCandidate.ToLower() != "list" && !Vars.Contains(VarCandidate))
                    {
                        Vars.Add(VarCandidate.ToLower());
                    }
                }
            }

            return Vars.ToArray();
        }

    }

}
