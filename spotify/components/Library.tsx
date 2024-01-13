"use client"
import React from 'react';
import {TbPlaylist} from "react-icons/tb";
import {AiOutlinePlus} from "react-icons/ai";

const Library = () => {
    const onClick  = () => {
        //handle upload
    }
    return (
        <div className = "flex flex-col">
            <div className ="
            flex
            items-center
            justify-between
            px-5
            pt-4">
                <div className ="
                inline-flex
                items-center
                gap-x-2">
                    <TbPlaylist className = "text-black"
                                size={26}/>
                    <p className ="
                    text-black
                    font-medium
                    text-md
                    "
                    >
                        library
                    </p>
                </div>
                <AiOutlinePlus
                    onClick = {onClick}
                    size = {20}
                    className="
                    text-black
                    cursor-pointer
                    hover:text-neutral-600
                    transition
                    "
                />
            </div>
            <div className ="
            flex
            flex-col
            gap-y-2
            mt-4
            px-3">
                song list
            </div>
        </div>
    );
};

export default Library;