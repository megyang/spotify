"use client";
import React from 'react';
import {Song} from "@/types";
import useLoadImage from "@/hooks/useLoadImage";
import Image from "next/image"
interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
}
const MediaItem: React.FC<MediaItemProps> = ({
    data, onClick
                                             }) => {
    const imageUrl = useLoadImage(data);
    const handleClick = () => {
        if (onClick) {
            return onClick(data.id);
        }
        //default turn on player
    }
    return (
        <div
            onClick={handleClick}
            className="
                flex
                items-center
                gap-x-3
                cursor-pointer
                hover:bg-neutral-900/50
                w-full
                p-2
                rounded-md">
            <div
                className="
                relative
                rounded-md
                min-h-[48px]
                min-w-[48px]
                overflow-hidden">
                <Image
                    fill
                src={imageUrl || '/images/liked.png'}
                alt="media item"
                className="object-cover"/>
            </div>
            <div
                className="
                flex
                flex-col
                gap-y-1
                overflow-hidden">
                <p className="text-black truncate">
                    {data.title}
                </p>
                <p className="text-black text-sm truncate">
                    {data.author}
                </p>
            </div>
        </div>
    )
};

export default MediaItem;