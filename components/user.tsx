"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown, Moon, Sun } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile"; // Import the custom hook
import { useTheme } from "next-themes";

export function Userdata({
    user,
}: {
    user: {
        name: string;
        email: string;
        avatar: string;
    };
}) {
    const isMobile = useIsMobile(); // Use the custom hook
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">{user.name}</span>
                                <span className="truncate text-xs">{user.email}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        side={isMobile ? "top" : "right"} // Adjust dropdown position based on mobile
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">{user.name}</span>
                                    <span className="truncate text-xs">{user.email}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={() => {router.replace("/compte")}}>
                                Compte
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => {setTheme(theme === "dark" ? "light" : "dark")}}>
                                { theme === "dark" ? (
                                    <>
                                        Mode Clair
                                        <Sun className="ml-auto"/>
                                    </>
                                ) : (
                                    <>
                                        Mode Sombre
                                        <Moon className="ml-auto"/>
                                    </>
                                )}
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
