using System;
using System.Collections.Generic;
using KGS;

namespace KGS_CLS
{
    class Program
    {
        //Weakness units,  에 vs 에서 


        static void Main(string[] args)
        {
            if (args.Length < 1)
            {
                Console.WriteLine("Usage: KGS_CLI <Templet> <key> <value> ...");
                return;
            }
            Dictionary<string, string> VariableTable = BuildVariableTable(args);
            //VerboseOutput(args[0], VariableTable);
            Console.WriteLine(KGS.Interpolator.Interpolate(args[0], VariableTable));
        }

        static Dictionary<string, string> BuildVariableTable(string[] PostArgs)
        {
            {
                Dictionary<string, string> VariableTable = new Dictionary<string, string>();

                for (int i = 2; i < PostArgs.Length; i += 2)
                {
                    VariableTable.Add(PostArgs[i - 1].ToLower(), PostArgs[i]);
                }

                return VariableTable;
            }
        }

        static void VerboseOutput(string templet, Dictionary<string, string> VariableTable)
        {
            Console.WriteLine("Templet: " + templet + "\n");
            foreach(string key in VariableTable.Keys)
            {
                Console.WriteLine(key + ": " + VariableTable[key]);
            }
            Console.WriteLine();
        }
    }
}
