"use client";
import React, {useMemo} from 'react';
import {usePathname} from "next/navigation";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import Box from "./Box"
import SidebarItem from "./SidebarItem";
import Library from "@/components/Library";
interface SidebarProps {
    children: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'search',
            active: pathname === '/search',
            href: '/search'
        }
    ], [])
    return (
        <div className = "flex h-full">
            <div className = "hidden md:flex flex-col gap-y-2 h-full w-[300px] p-2"
                 style = {{ backgroundColor: 'rgba(163,184,153,255)' }}>
                <Box>
                    <div className = "flex flex-col gap-y-4 px-5 py-4">
                        {routes.map((item) => (
                            <SidebarItem
                                key = {item.label}
                                {...item}
                            />
                        ))
                        }
                    </div>
                </Box>
                <Box className = "overflow-y-auto h-screen">
                    <Library />

                </Box>
            </div>
            <main className = "h-full flex-1 overflow-y-auto py-2">
                {children}
            </main>
        </div>
    );
};

export default Sidebar;