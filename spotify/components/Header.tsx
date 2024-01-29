"use client";
import React from 'react';
import {useRouter} from "next/navigation";
import {twMerge} from "tailwind-merge";
import {RxCaretLeft, RxCaretRight} from "react-icons/rx";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import Button from "@/components/Button";
import useAuthModal from "@/hooks/useAuthModal";
import {useSupabaseClient} from "@supabase/auth-helpers-react";
import {useUser} from "@/hooks/useUser";
import {FaUserAlt} from "react-icons/fa";
import toast from "react-hot-toast";
interface HeaderProps{
    children: React.ReactNode;
    className?: string;
}
const Header: React.FC<HeaderProps> = ({children, className}) => {
    const authModal = useAuthModal();
    const router = useRouter();
    const supabaseClient = useSupabaseClient();
    const {user} = useUser();
    const handleLogout  = async () => {
        const {error} = await supabaseClient.auth.signOut();
        router.refresh();

        if (error) {
            toast.error(error.message);
        } else {
            toast.success('logged out')
        }
    }
    return (
        <div
        className = {twMerge(`
        h-fit
        p-6`,
        className)}
        style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(163,184,153,1), rgba(163,184,153,0))'
        }}
        >
            <div className="
            w-full
            mb-4
            flex
            items-center
            justify-between">
                <div className="
                hidden
                md:flex
                gap-x-2
                items-center">
                    <button
                        onClick={() => router.back()}
                        className="
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-neutral-600
                    hover:opacity-75
                    transition"
                    style = {{backgroundColor: 'rgba(163,184,153,255)'}}>
                        <RxCaretLeft className ="text-black
                        hover:text-neutral-600"
                                     size = {35}/>
                    </button>
                    <button
                        onClick={() => router.forward()}
                        className="
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-neutral-600
                    hover:opacity-75
                    transition"
                            style = {{backgroundColor: 'rgba(163,184,153,255)'}}>
                        <RxCaretRight className ="text-black
                        hover:text-neutral-600"
                                     size = {35}/>
                    </button>
                </div>
                <div className ="
                flex
                md:hidden
                gap-x-2
                items-center">
                    <button className="
                    rounded-full
                    p-2
                    bg-white
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    transition">
                        <HiHome className="
                        text-black"
                        size={20}/>
                    </button>
                    <button className="
                    rounded-full
                    p-2
                    bg-white
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    transition">
                        <BiSearch className="
                        text-black"
                                size={20}/>
                    </button>
                </div>
                <div className="
                flex
                justify-between
                items-center
                gap-x-4">
                    {user ? (
                    <div
                        className = "flex gap-x-4 items-center">
                        <Button
                            onClick={handleLogout}
                            className="bg-white px-6 py-2">
                            logout
                        </Button>
                        <Button
                            onClick={() => router.push('/account')}
                            className="bg-white">
                            <FaUserAlt />
                        </Button>
                    </div>) : (
                    <>
                    <div>
                        <Button
                            onClick={authModal.onOpen}
                            className="
                            bg-transparent
                            text-neutral-600
                            font-medium"
                        >
                            sign up
                        </Button>

                    </div>
                        <div>
                            <Button
                                onClick={authModal.onOpen}
                                className="
                            bg-white
                            px-6
                            py-2"
                            >
                                log in
                            </Button>
                        </div>

                    </>
                    )}
                </div>
            </div>
            {children}
        </div>
    );
};

export default Header;