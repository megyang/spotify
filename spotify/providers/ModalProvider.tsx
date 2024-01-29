"use client";
import React, {useEffect, useState} from "react";
import AuthModal from "@/components/AuthModal"
import UseAuthModal from "@/hooks/useAuthModal";
import UploadModal from "@/components/UploadModal";
const ModalProvider = () => {
    const[isMounted, setIsMounted] = useState(false);
    //ensuring none of the modals can be opened during serverside rendering
    useEffect(() => {
        setIsMounted(true);
    }, []);
    //knowing whatever is being rendered is in serverside
    if (!isMounted) {
        return null;
    }
    return (
        <> <AuthModal />
            <UploadModal />
        </>
    );
}
export default ModalProvider;