"use client";
import React, { useState, useEffect } from "react";

import {
    CheckCircle2,
    Info,
    StopCircle,
    XCircle,
    AlertCircle,
} from "lucide-react";
import { Button } from "../ui/button";

const CustomToast = ({
    message,
    type,
    duration,
    toastVisible,
    setToastVisible,
}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setToastVisible(false);
        }, duration);

        return () => {
            clearTimeout(timer);
        };
    }, [duration]);

    const handleClose = () => {
        setToastVisible(false);
    };

    const color =
        type === "success"
            ? "green"
            : type === "error"
            ? "red"
            : type === "warning"
            ? "yellow"
            : "blue";

    const typeArr = ["success", "error", "warning", "neutral"];
    return (
        toastVisible && (
            <div
                className={`${
                    type === "success"
                        ? "bg-green-200"
                        : type === "error"
                        ? "bg-red-200"
                        : type === "warning"
                        ? "bg-yellow-200"
                        : "bg-blue-200"
                }  fixed left-[50%] flex gap-2 items-center justify-between p-5 rounded-lg animate-scale-Fade-In`}
            >
                <div className="flex gap-2">
                    <span>
                        {type === "success" ? (
                            <CheckCircle2 className="text-green-500" />
                        ) : type === "error" ? (
                            <AlertCircle className="text-red-500" />
                        ) : type === "warning" ? (
                            <Info className="text-yellow-500" />
                        ) : (
                            <StopCircle className="text-blue-500" />
                        )}
                    </span>
                    <p>{message}</p>
                </div>
                <Button
                    size="small"
                    className={`bg-transparent ${
                        type === "success"
                            ? "text-green-500"
                            : type === "error"
                            ? "text-red-500"
                            : type === "warning"
                            ? "text-yellow-500"
                            : "text-blue-500"
                    }  ${
                        type === "success"
                            ? "hover:bg-green-500"
                            : type === "error"
                            ? "hover:bg-red-500"
                            : type === "warning"
                            ? "hover:bg-yellow-500"
                            : "hover:bg-blue-500"
                    } hover:text-white p-[1.6px]`}
                    variant="link"
                    onClick={() => handleClose()}
                >
                    <XCircle />
                </Button>
            </div>
        )
    );
};

export default CustomToast;
