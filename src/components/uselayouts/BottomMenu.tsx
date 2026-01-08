import {
    Home01Icon,
    Image01Icon,
    UserCircleIcon,
    Mail01Icon,
    Sun03Icon,
    Moon02Icon,
    ComputerIcon,
    PlusSignIcon,
    PencilEdit02Icon,
    Mic01Icon,
    Camera01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useMemo, useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

// Change Here
const MAIN_NAV = [
    { icon: Home01Icon, name: "home", path: "/" },
    { icon: Image01Icon, name: "portfolio", path: "/portfolio" },
    { icon: UserCircleIcon, name: "about", path: "/about" },
    { icon: Mail01Icon, name: "contact", path: "/contact" },
    { icon: Sun03Icon, name: "theme" },
];

const THEME_OPTIONS = [
    { key: "light", icon: Sun03Icon, text: "Light" },
    { key: "dark", icon: Moon02Icon, text: "Dark" },
    { key: "system", icon: ComputerIcon, text: "System" },
];

const BottomMenu = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [elementRef] = useMeasure();
    const [hiddenRef, hiddenBounds] = useMeasure();
    const location = useLocation();
    const [view, setView] = useState<
        "default" | "theme"
    >("default");

    const [theme, setTheme] = useState<"light" | "dark" | "system">("light");

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setView("default");
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const content = useMemo(() => {
        if (view === "theme") {
            return (
                <div className="flex items-center justify-between gap-1.5 min-w-[270px] p-[6px] py-0.5">
                    {THEME_OPTIONS.map(({ key, icon: Icon, text }) => (
                        <button
                            key={key}
                            onClick={() => setTheme(key as "light" | "dark" | "system")}
                            className={`flex items-center justify-center gap-2 rounded-[12px] px-3 py-2 transition-all duration-100 ${theme === key
                                ? "bg-accent text-foreground"
                                : "text-muted-foreground hover:bg-muted"
                                }`}
                        >
                            <HugeiconsIcon
                                icon={Icon as any}
                                size={18}
                                className={`transition-all duration-75 ${theme === key ? "text-foreground" : "text-muted-foreground"
                                    }`}
                            />
                            <span>{text}</span>
                        </button>
                    ))}
                </div>
            );
        }
        return null;
    }, [view, theme]);

    return (
        <div
            ref={containerRef}
            className={cn("relative flex flex-col items-center")}
        >
            <div
                ref={hiddenRef}
                className="absolute left-[-9999px] top-[-9999px] invisible pointer-events-none"
            >
                <div className="rounded-[18px] bg-background/95 border border-border py-1">
                    {content}
                </div>
            </div>

            <AnimatePresence mode="wait">
                {view !== "default" && (
                    <motion.div
                        key="submenu"
                        initial={{
                            opacity: 0,
                            scaleY: 0.9,
                            scaleX: 0.95,
                            height: 0,
                            width: 0,
                            originY: 1,
                            originX: 0.5,
                        }}
                        animate={{
                            opacity: 1,
                            scaleY: 1,
                            scaleX: 1,
                            height: hiddenBounds.height || "auto",
                            width: hiddenBounds.width || "auto",
                            originY: 1,
                            originX: 0.5,
                        }}
                        exit={{
                            opacity: 0,
                            scaleY: 0.9,
                            scaleX: 0.95,
                            height: 0,
                            width: 0,
                            originY: 1,
                            originX: 0.5,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.45, 0, 0.25, 1],
                        }}
                        style={{
                            transformOrigin: "bottom center",
                        }}
                        className="absolute bottom-[70px] overflow-hidden"
                    >
                        <div
                            ref={elementRef}
                            className="rounded-[18px] bg-background/95 backdrop-blur-xl border border-border"
                        >
                            <AnimatePresence initial={false} mode="popLayout">
                                <motion.div
                                    key={view}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.96,
                                        filter: "blur(10px)",
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        filter: "blur(0px)",
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.95,
                                        filter: "blur(12px)",
                                    }}
                                    transition={{
                                        duration: 0.25,
                                        ease: [0.42, 0, 0.58, 1],
                                    }}
                                    className="py-1"
                                >
                                    {content}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex items-center gap-1 bg-background/95 backdrop-blur-xl border border-border rounded-[2.5rem] p-1.5 mt-3 z-10 shadow-2xl">
                {MAIN_NAV.map(({ icon: Icon, name, path }) => {
                    const isActive = path ? location.pathname === path : view === name;

                    if (path) {
                        return (
                            <Link
                                key={name}
                                to={path}
                                className={cn(
                                    "p-3.5 rounded-full transition-all duration-300",
                                    isActive ? "bg-foreground text-background" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                )}
                            >
                                <HugeiconsIcon
                                    icon={Icon as any}
                                    size={20}
                                    strokeWidth={isActive ? 2.5 : 2}
                                />
                            </Link>
                        );
                    }

                    return (
                        <button
                            key={name}
                            className={cn(
                                "p-3.5 rounded-full transition-all duration-300",
                                isActive ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                            )}
                            onClick={() => setView(view === name ? "default" : (name as any))}
                        >
                            <HugeiconsIcon
                                icon={Icon as any}
                                size={20}
                                strokeWidth={isActive ? 2.5 : 2}
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default BottomMenu;
