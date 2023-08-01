import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarContainer = () => {
    return (
        <div className="flex gap-2 mb-4 relative bg-blue-100">
            <Avatar className="z-[100] border-2 border-white m-2 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="absolute left-[20px] z-[99] border-2 border-white m-2 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="absolute left-[40px] z-[98] border-2 border-white m-2 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    );
};

export default AvatarContainer;
