"use-client";
import React from "react";
import { Menu, User, Receipt, HelpCircle, UserMinus } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DropdownContainer = () => {
    return (
        <div className="flex gap-2 mb-4 relative bg-blue-100 p-10">
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="p-0">
                    <Avatar className="z-[100] border-2 border-white m-2 cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                {/* <DropdownMenuTrigger className="p-2">
                    <Menu />
                </DropdownMenuTrigger> */}
                <DropdownMenuContent className="absolute left-[-1rem] w-[300px] rounded-xl">
                    <DropdownMenuLabel className="flex gap-2 items-center">
                        {" "}
                        <Avatar className="z-[100] border-2 border-white m-2 cursor-pointer">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="font-bold">My Account</p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="my-2">
                        <User className="mr-3 text-indigo-500 h-6 w-6" />{" "}
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="my-2">
                        <Receipt className="mr-3 text-green-500 h-6 w-6" />
                        Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem className="my-2">
                        <HelpCircle className="mr-3 text-purple-500 h-6 w-6" />{" "}
                        Faq
                    </DropdownMenuItem>
                    <div className="h-[2px] bg-blue-100 w-[280px] mx-auto"></div>
                    <DropdownMenuItem className="my-2">
                        <UserMinus className="mr-3 text-red-500 h-6 w-6" />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default DropdownContainer;
