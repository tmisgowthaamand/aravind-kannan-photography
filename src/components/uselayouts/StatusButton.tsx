"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMemo, useState } from "react";

export default function StatusButton() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleClick = () => {
        setStatus("loading");
        setTimeout(() => {
            setStatus("success");
            setTimeout(() => {
                setStatus("idle");
            }, 2000);
        }, 2500);
    };

    const text = useMemo(() => {
        switch (status) {
            case "idle":
                return "Save";
            case "loading":
                return "Saving";
            case "success":
                return "Saved";
        }
    }, [status]);

    return (
        <div className="relative inline-flex group font-sans mx-auto">
            <Button
                onClick={handleClick}
                className={cn(
                    "relative rounded-full h-12 px-8 text-base font-medium transition-all duration-300 min-w-[140px] disabled:opacity-100",
                    status === "idle"
                        ? "transition-colors"
                        : "bg-muted text-muted-foreground hover:bg-muted cursor-not-allowed border-muted shadow-sm"
                )}
                variant={"default"}
                disabled={status !== "idle"}
            >
                <span className="flex items-center justify-center">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {text.split("").map((char, i) => (
                            <motion.span
                                key={`${char}-${i}`}
                                layout
                                initial={{ opacity: 0, scale: 0, filter: "blur(4px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0, filter: "blur(4px)" }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                    mass: 1,
                                }}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </AnimatePresence>
                </span>
            </Button>

            {/* Status Indicator */}
            <div className={cn("absolute -top-1 -right-1 z-10 pointer-events-none")}>
                <AnimatePresence mode="wait">
                    {status !== "idle" && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0, x: -8, filter: "blur(4px)" }}
                            animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0, x: -8, filter: "blur(4px)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={cn(
                                "flex items-center justify-center w-6 h-6 rounded-full ring-2 overflow-visible",
                                status === "success"
                                    ? "bg-primary text-primary-foreground ring-background"
                                    : "bg-muted text-muted-foreground ring-background "
                            )}
                        >
                            <AnimatePresence mode="popLayout">
                                {status === "loading" && (
                                    <motion.div
                                        key="loader"
                                        initial={{ opacity: 1 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
                                                opacity=".5"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
                                            >
                                                <animateTransform
                                                    attributeName="transform"
                                                    dur="1s"
                                                    from="0 12 12"
                                                    repeatCount="indefinite"
                                                    to="360 12 12"
                                                    type="rotate"
                                                />
                                            </path>
                                        </svg>
                                    </motion.div>
                                )}
                                {status === "success" && (
                                    <motion.div
                                        key="check"
                                        initial={{ scale: 0, opacity: 0, filter: "blur(4px)" }}
                                        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                                        exit={{ scale: 0, opacity: 0, filter: "blur(4px)" }}
                                        transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <HugeiconsIcon icon={Tick02Icon} className="w-4 h-4" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
