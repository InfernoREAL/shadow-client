using System;
using ElectronClient.ModuleManagment;
using Chrones.Cmr.MemoryManagement;

namespace ElectronClient.Module
{
    public static class NoFall
    {
        public static bool ToggleState;

        static Pointer FallingCounter = new Pointer("Minecraft.Windows.exe", 0x30366B8, new int[] { 0x68, 0x0, 0x18, 0x50, 0x15A0, 0x88, 0x194 });

        public static void Tick10()
        {
            Memory0.mem.WriteMemory(FallingCounter, 0);
        }
    }
}
