"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/appsidebar"

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? ""
  const showSidebar = !pathname.startsWith("/login")

  return (
    <div className="flex min-h-screen w-full">
      {showSidebar && <AppSidebar />}
      <main className="flex-1 w-full min-h-screen flex flex-col">
        {showSidebar && <SidebarTrigger />}
        <div className="w-full">{children}</div>
      </main>
    </div>
  )
}