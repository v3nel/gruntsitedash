import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarMenu
} from "@/components/ui/sidebar"
import { Home, Music, Podcast, Users2 } from "lucide-react";
import Image from "next/image";

const items = [
    {
        title: "Acceuil",
        url: "/",
        icon: Home
    },
    {
        title: "Utilisateurs",
        url: "/users",
        icon: Users2
    },
    {
        title: "Podcasts",
        url: "/podcasts",
        icon: Podcast
    },
    {
        title: "Musique",
        url: "/musique",
        icon: Music
    }
]

export function AppSidebar() {
  return (
    <Sidebar>
        <SidebarHeader className="mt-3 ml-2">
            <div>
                <Image src="/logo/grunt-logo-dark.svg" alt="Logo" height={34} width={128} className="block dark:hidden" />
                <Image src="/logo/grunt-logo-light.svg" alt="Logo" height={34} width={128} className="hidden dark:block" />
            </div>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Navigate</SidebarGroupLabel>
                <SidebarGroupContent>
                    {items.map((items) => (
                        <SidebarMenuItem key={items.title}>
                            <SidebarMenuButton asChild>
                                <a href={items.url}>
                                    <items.icon/>
                                    <span>{items.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    )) }
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}