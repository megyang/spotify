import React from 'react';
import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import Image from "next/image";
import LikedContent from "@/app/liked/components/LikedContent";
export const revalidate = 0;

const Page = async () => {
    const songs = await getLikedSongs();

    return (
        <div
            style={{
                background: 'rgba(248,211,197,1)',
            }}
            className="

        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto">
        <Header>
            <div className="">
                <div className="
                flex
                flex-col
                md:flex-row
                items-center
                gap-x-5">
                    <div
                    className="relative
                    h-32
                    w-32
                    lg:h-44
                    lg:w-44">
                        <Image
                            fill
                            alt="playlist"
                            className="object-cover"
                            src="/images/liked.png"
                        />

                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p className="hidden md:block text-white font-semibold text-sm">
                            playlist
                        </p>
                        <h1 className="text-white text-4xl font-bold">
                            liked songs
                        </h1>
                    </div>
                </div>
            </div>
        </Header>
            <LikedContent songs={songs} />
        </div>
    );
};

export default Page;
