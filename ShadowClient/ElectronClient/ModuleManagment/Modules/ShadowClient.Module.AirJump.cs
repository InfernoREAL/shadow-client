using System;
using ElectronClient.ModuleManagment;
using Chrones.Cmr.MemoryManagement;

namespace ElectronClient.Module
{
    public static class AirJump
    {
        public static bool ToggleState;

        static Pointer OnGround = new Pointer("Minecraft.Windows.exe", 0x3022668, new int[] { 0x30, 0x28, 0x8, 0x1F8, 0x1F0, 0x0, 0xF0, 0x178});

        public static void Tick10()
        {
            Memory0.mem.WriteMemory(OnGround, 16777473);
        }

        public static void OnEnabled()
        {
            //Memory0.mem.NopMemory("Minecraft.Windows.exe", 0x121090E, 7);
        }
    }
}