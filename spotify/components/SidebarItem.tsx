import React from 'react';
import {IconType} from "react-icons";
import Link from "next/link";
import {twMerge} from "tailwind-merge";
import {flowParseExportStar} from "sucrase/dist/types/parser/plugins/flow";
interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}
const SidebarItem: React.FC<SidebarItemProps> = ({icon: Icon, label, active, href}) => {
    return (
        <Link
            href = {href}
            className={twMerge(
            `flex
            flex-row
            h-auto
            items-center
            w-full
            gap-x-4
            text-md
            font-medium
            cursor-pointer
            hover:text-neutral-600
            transition
            text-black
            py-1`, active && "text-black")}>
            <Icon size = {26}/>
            <p className = "truncate w-100"> {label}</p>
        </Link>
    );
};

export default SidebarItem;