import React from "react";
import { Loader2, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ButtonContainer = () => {
    return (
        <div className="flex gap-2 mb-4">
            <Button>Click this</Button>
            <Button variant="outline">Click this</Button>
            <Button variant="destructive">Click this</Button>
            <Button variant="secondary">Click this</Button>
            <Button variant="ghost">Click this</Button>
            <Button variant="link">Click this</Button>
            <Button>
                <Loader2 className="mr-2 animate-spin h-4 w-4" />
                Loader
            </Button>
            <Button asChild>
                <Link href="/login">Login</Link>
            </Button>
            <Button size="icon" variant="secondary">
                <Camera className="h-4 w-4" />
            </Button>
        </div>
    );
};

export default ButtonContainer;
