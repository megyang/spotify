"use client";
import Modal from "./Modal";
import {useSessionContext, useSupabaseClient} from "@supabase/auth-helpers-react";
import {useRouter} from "next/navigation";
import {Auth} from "@supabase/auth-ui-react";
import {ThemeSupa} from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import {useEffect} from "react";
const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const {session} = useSessionContext();
    const {onClose, isOpen} = useAuthModal();

    useEffect(() => {
        if (session) {
            router.refresh();
            onClose();
        }
    }, [session, router, onClose]);
    //close by default
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }
    return(
        <Modal
            title="welcome back" description="log in"
            isOpen={isOpen}
            onChange={() => {}}>
            <Auth
                providers = {["github"]}
                supabaseClient={supabaseClient}
                magicLink
                appearance={{
                    theme: ThemeSupa,
                variables: {
                    default: {
                    colors: {
                    brand: '#ffb79b',
                    brandAccent: '#ffb79b'}
                    }
                }
                }
                }
                ></Auth>
        </Modal>
    )
}

export default AuthModal;