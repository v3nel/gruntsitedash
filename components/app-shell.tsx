"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/appsidebar";
import { useRouter } from "next/navigation";

import {
  Button
} from "@/components/ui/button";

import {
  Plus
} from "lucide-react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";

  console.log("Current pathname:", pathname);

  const showSidebar = !pathname.startsWith("/login");

  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full">
      {showSidebar && <AppSidebar />}
      <main className="flex-1 w-full min-h-screen flex flex-col">
        <div className="p-4 flex justify-between">
          {showSidebar && <SidebarTrigger className="w-8 h-8" />}
          { pathname === "/podcasts" && (
            <>
              <Button onClick={() => {router.replace("/podcasts/create")}}> <Plus/> Créer un Podcast</Button>
            </>
          )}
        </div>
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
}