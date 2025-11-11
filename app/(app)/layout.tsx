import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppShell from "@/components/app-shell";

export default function AppAreaLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppShell>{children}</AppShell>
    </SidebarProvider>
  );
}