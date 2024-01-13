"use client";
import React from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";
import button from "@/components/Button";
import {FaPlay} from "react-icons/fa";
interface ListItemProps {
    image: string;
    name: string;
    href: string;
}
const ListItem: React.FC<ListItemProps> = ({
    image,
    name,
    href
}) => {
    const router = useRouter();
    const onClick = () => {
        //authentication before push
        router.push(href);
    }
//relative on parent and absolute on child for positioning
    //group so that when calling group-hover, when hover over parent, child shows up
    return (
        <button
            onClick={onClick}
            className="
        relative
        group
        flex
        items-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-100/10
        hover:bg-neutral-100/20
        transition
        pr-4">
            <div className="
            relative
            min-h-[64px]
            min-w-[64px]">
                <Image className="object-cover"
                fill
                src={image}
                alt="Image"/>
            </div>
            <p className="font-medium truncate py-5">
                {name}
            </p>
            <div
            className="
            absolute
            transition
            opacity-0
            rounded-full
            flex
            items-center
            p-4
            drop-shadow-md
            right-5
            group-hover:opacity-100
            hover:scale-110"
            style={{backgroundColor:"rgba(163,184,153,255)"}}>
                <FaPlay className="text-black"/>

            </div>
        </button>
    );
};

export default ListItem;