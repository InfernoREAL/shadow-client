using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Threading;

namespace ElectronClient.ModuleManagment
{
    public static class ModuleManager
    {
        public static class MemoryUpdate
        {
            public static void Tick10()
            {
                while (!ExitTickThread)
                {
                    Module.AirJump.Tick10();
                    Module.NoFall.Tick10();
                }
            }

            public static void Tick100()
            {
                while (!ExitTickThread)
                {
                    Thread.Sleep(100);
                }
            }

            public static void Tick1000()
            {
                while (!ExitTickThread)
                {
                    Thread.Sleep(1000);
                }
            }

            #region Def
            public static void StartTickThread()
            {
                ThreadTimerTick10 = new Thread(new ThreadStart(Tick10));
                ThreadTimerTick100 = new Thread(new ThreadStart(Tick100));
                ThreadTimerTick1000 = new Thread(new ThreadStart(Tick1000));

                ThreadTimerTick10.Priority = ThreadPriority.Normal;
                ThreadTimerTick100.Priority = ThreadPriority.Normal;
                ThreadTimerTick1000.Priority = ThreadPriority.BelowNormal;

                ThreadTimerTick10.Start();
                ThreadTimerTick100.Start(); 
                ThreadTimerTick1000.Start();
            }

            public static void RestartTickThread()
            {
                ThreadTimerTick10.Abort();
                ThreadTimerTick100.Abort();
                ThreadTimerTick1000.Abort();

                StartTickThread();
            }

            public static bool ExitTickThread = false;

            static Thread ThreadTimerTick10;
            static Thread ThreadTimerTick100;
            static Thread ThreadTimerTick1000;
            #endregion
        }

        public static class TabGUI
        {
            public static int TabGUI_Count1;
            public static int TabGUI_Count2;
            public static int TabGUI_Count_Selected_Vertical;

            public static string[] GetTabGUIString1()
            {
                string[] _return = new string[6];

                _return = new string[6]
                {
                    "-Movement",
                    "-Combat",
                    "-Player",
                    "-World",
                    "-Exploits",
                    "-Other"
                };

                if (TabGUI_Count1 == -1)
                {

                } else if (TabGUI_Count1 < _return.Length)
                {
                    _return[TabGUI_Count1] = "_" + _return[TabGUI_Count1];
                }

                return _return;
            }
        }
    }
}
