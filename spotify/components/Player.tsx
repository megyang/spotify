"use client";
import React from 'react';
import usePlayer from "@/hooks/usePlayer";
import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import PlayerContent from "@/components/PlayerContent";
import './styles.css';

const Player = () => {
    const player = usePlayer();
    const {song} = useGetSongById(player.activeId);

    const songUrl = useLoadSongUrl(song!);

    if (!song || !songUrl || !player.activeId) {
        return null
    }
    return (
        <div className="
        fixed
        bg-custom-color
        bottom-0
        w-full
        py-2
        h-[80px]
        px-4">
            <PlayerContent
            key={songUrl}
            song={song}
            songUrl={songUrl}/>
        </div>

    );
};

export default Player;