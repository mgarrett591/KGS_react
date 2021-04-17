using System;
using System.Collections.Generic;
using System.Text;

namespace KGS_GUI
{
    public class GrammarList
    {
        public string[] Titles { set; get; }
        public string[] Content { set; get; }
        public GrammarList(string file)
        {
            try{
                string line;
                List<string> TitleList = new List<string>();
                List<string> ContentList = new List<string>();
                System.IO.StreamReader SR = new System.IO.StreamReader(file);
                while ((line = SR.ReadLine()) != null)
                {
                    string[] LineSplit = line.Split(":");
                    if (LineSplit.Length == 2)
                    {
                        TitleList.Add(LineSplit[0]);
                        ContentList.Add(LineSplit[1]);
                    }
                }
                Titles = TitleList.ToArray();
                Content = ContentList.ToArray();
                SR.Close();
            }
            catch
            {
                Titles = new string[] { };
                Content = new string[] { };
            }

        }

    }
}
