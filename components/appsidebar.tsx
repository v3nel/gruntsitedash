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
} from "@/components/ui/sidebar"
import { LayoutGrid, ContactRound, Users2, PodcastIcon, Send } from "lucide-react";
import Image from "next/image";
import { Userdata } from "@/components/user";

const items = [
    {
        title: "Vue d'Ensemble",
        url: "/",
        icon: LayoutGrid
    },
    {
        title: "Posts",
        url: "/posts",
        icon: Send
    },
    {
        title: "Utilisateurs",
        url: "/utilisateurs",
        icon: Users2
    },
    {
        title: "Podcasts",
        url: "/podcasts",
        icon: PodcastIcon
    }
]

export function AppSidebar() {
  return (
    <Sidebar>
        <SidebarHeader className="mt-3 ml-2">
            <div>
                <a href="/">
                    <Image src="/logo/grunt-logo-dark.svg" alt="Logo" height={34} width={128} className="block dark:hidden" />
                    <Image src="/logo/grunt-logo-light.svg" alt="Logo" height={34} width={128} className="hidden dark:block" />
                </a>
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
            <Userdata user={{
                avatar: "adada",
                name: "John Doe",
                email: "johndoe@gruntmag.com"
            }}/>
        </SidebarFooter>
    </Sidebar>
  )
}