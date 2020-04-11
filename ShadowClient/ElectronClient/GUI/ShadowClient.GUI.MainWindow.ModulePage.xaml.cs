using ElectronClient.ModuleManagment;
using ElectronClient.ModuleManagment.ModuleExtensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Threading;

namespace ElectronClient.GUI
{
    /// <summary>
    /// Interaction logic for ShadowClient.xaml
    /// </summary>
    public partial class MainWindow_ModulePage : Page
    {
        DispatcherTimer UpdateGUIDispatcherTimer;

        public MainWindow_ModulePage()
        {
            InitializeComponent();

            #region UpdateGUIDispatcherTimer
            UpdateGUIDispatcherTimer = new DispatcherTimer();
            UpdateGUIDispatcherTimer.Interval = TimeSpan.FromMilliseconds(10);
            UpdateGUIDispatcherTimer.Tick += new EventHandler(UpdateGUI);
            UpdateGUIDispatcherTimer.Start();
            #endregion
        }

        ~MainWindow_ModulePage()
        {
            UpdateGUIDispatcherTimer.Stop();
        }

        public void UpdateGUI(object sender, EventArgs e)
        {
            SModule_Airjump.Content = GUIExtensions.GetBoolStateText(Module.AirJump.ToggleState);
            SModule_NoFall.Content = GUIExtensions.GetBoolStateText(Module.NoFall.ToggleState);
        }

        private void SModule_Airjump_Click(object sender, RoutedEventArgs e)
        {
            Module.AirJump.ToggleState = !Module.AirJump.ToggleState;
            SModule_Airjump.Content = GUIExtensions.GetBoolStateText(Module.AirJump.ToggleState);
        }

        private void SModule_NoFall_Click(object sender, RoutedEventArgs e)
        {
            Module.NoFall.ToggleState = !Module.NoFall.ToggleState;
            SModule_NoFall.Content = GUIExtensions.GetBoolStateText(Module.NoFall.ToggleState);
        }
    }
}
