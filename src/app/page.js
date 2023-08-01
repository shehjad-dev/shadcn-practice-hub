import Image from "next/image";
import ButtonContainer from "@/components/ButtonContainer";
import AvatarContainer from "@/components/AvatarContainer";
import AlertDialogContainer from "@/components/AlertDialogContainer";
import DropdownContainer from "@/components/DropdownContainer";
import ToastContainer from "@/components/ToastContainer";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 p-10 relative">
            {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
            <ButtonContainer />
            <AvatarContainer />
            <AlertDialogContainer />
            <DropdownContainer />
            <ToastContainer />
        </main>
    );
}
