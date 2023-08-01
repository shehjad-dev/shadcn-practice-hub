"use client";
import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import CustomToast from "./cusomUi/CustomToast";

const ToastContainer = () => {
    const { toast } = useToast();
    const [toastVisible, setToastVisible] = useState(false);

    return (
        <div className="h-[100%] relative">
            <Toaster className="bg-red-500" />
            <Button
                onClick={() => {
                    /*  toast({
                        title: "Scheduled: Catch up",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                    }); */
                    setToastVisible(true);
                }}
            >
                Show Custom Toast
            </Button>
            {toastVisible && (
                <CustomToast
                    message="I have been drinking ..."
                    type="default"
                    duration={3000}
                    toastVisible={toastVisible}
                    setToastVisible={setToastVisible}
                />
            )}

            <Button
                onClick={() => {
                    toast({
                        title: "Scheduled: Catch up",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                    });
                }}
            >
                Show Toast
            </Button>
            {/* <ToastNotification
                message="I have been drinking ..."
                type="success"
                duration={3000}
                position="center"
            /> */}
        </div>
    );
};

export default ToastContainer;
