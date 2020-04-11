using Chrones.Cmr;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElectronClient
{
    public class Program
    {
        [STAThread]
        public static void Main(string[] args)
        {
            cmr.EnableVirtualTerminalProcessing();
            Console.Title = "ShadowClient";
            ShadowClientConsole.Application.InitializeThread();
            App app = new App();
            app.InitializeComponent();
            app.Run();
        }
    }
}
