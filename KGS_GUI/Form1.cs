using System;
using System.Net;
using System.IO;
using System.Collections.Generic;
using System.Windows.Forms;
using System.Drawing;
using KGS;

namespace KGS_GUI
{
    public partial class Form1 : Form
    {
        public BindingSource Rows;
        public string Expected;
        public GrammarList GL;

        public Form1()
        {
            InitializeComponent();
            Rows = new BindingSource();
            Rows.Add(new Row(""));
            dataGridView1.DataSource = Rows;
            dataGridView1.Columns[2].ReadOnly = true;
            dataGridView1.Columns[0].ReadOnly = true;
            //dataGridView1.AutoResizeColumns(DataGridViewAutoSizeColumnsMode.Fill);

            dataGridView1.AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.Fill;
            dataGridView1.Refresh();
            Expected = "";
            GL = new GrammarList(@"grammars.txt");
            foreach(string Tital in GL.Titles)
            {
                GrammarMenu.Items.Add(Tital);
            }
            InputBox.Text = "";
            Templet.Text = "";
        }

        private void Get_Click(object sender, EventArgs e)
        {
            
            string url = "http://watcher-pi.local/sqltest/";
            WebRequest wget;
            wget = WebRequest.Create(url);

            Stream RequestStream;
            RequestStream = wget.GetResponse().GetResponseStream();

            StreamReader SR = new StreamReader(RequestStream);
            //html.Text = SR.ReadToEnd();
            SR.Close();
            SR.Dispose();
            RequestStream.Dispose();
        }

        public class Row
        {
            public Row(string variable) 
            {
                Variable = variable;
            }

            public string Variable { set; get; }
            public string Value { set; get; }
            public string Translation { set; get; }

        }

        private void UpdateExpected()
        {
            Dictionary<string, string> VariableTable = new Dictionary<string, string>();
            foreach(Row r in Rows)
            {
                if(r != null && r.Value != null && r.Variable != null)
                {
                    VariableTable[r.Variable] = r.Value;
                }
            }
            Expected = KGS.Interpolator.Interpolate(Templet.Text, VariableTable);
            InputBox.ForeColor = (InputBox.Text == Expected) ? Color.Green : Color.Black;
        }

        private void DataGridView1_CellValueChanged(object sender, DataGridViewCellEventArgs e)
        {
            UpdateExpected();
        }

        private void InputBox_TextChanged(object sender, EventArgs e)
        {
            InputBox.ForeColor = (InputBox.Text == Expected) ? Color.Green : Color.Black;
        }

        private void Templet_TextChanged(object sender, EventArgs e)
        {
            Rows.Clear();
            foreach(string s in KGS_Interface.GetVarList(Templet.Text))
            {
                Rows.Add(new Row(s));
            }
            if(Rows.Count == 0)
            {
                Rows.Add(new Row(""));
            }
            dataGridView1.Refresh();
            UpdateExpected();
        }

        private void GrammarMenu_SelectedIndexChanged(object sender, EventArgs e)
        {
            Templet.Text = GL.Content[GrammarMenu.SelectedIndex];
        }

    }
}
