"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
    SecurityCheckIcon,
    ZapIcon,
    UserStoryIcon,
    SparklesIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

// Simplified useIsMobile for the component
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
}

const INITIAL_CHIPS = [
    {
        id: 1,
        title: "Production Ready",
        description: "Fully type-safe and tested",
        icon: SecurityCheckIcon,
    },
    {
        id: 2,
        title: "Fluid Motion",
        description: "60fps optimizations built-in",
        icon: ZapIcon,
    },
    {
        id: 3,
        title: "Accessible",
        description: "Works perfectly for everyone",
        icon: UserStoryIcon,
    },
    {
        id: 4,
        title: "Modern Design",
        description: "Crafted for high-end feel",
        icon: SparklesIcon,
    },
];

const Bucket = () => {
    const [items, setItems] = useState(INITIAL_CHIPS);
    const isMobile = useIsMobile();

    useEffect(() => {
        const interval = setInterval(() => {
            setItems((prev) => {
                const [first, ...rest] = prev;
                return [...rest, first];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col gap-4 items-center justify-center h-fit relative w-full">
            <div
                className="relative isolate w-full max-w-[655px]"
                style={{ aspectRatio: "655/352" }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 655 352"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 z-0"
                >
                    <foreignObject
                        x="443.561"
                        y="-10.5141"
                        width="211.24"
                        height="166.977"
                    >
                        <div
                            style={{
                                backdropFilter: "blur(11.03px)",
                                clipPath: "url(#bgblur_0_51_65_clip_path)",
                                height: "100%",
                                width: "100%",
                            }}
                        ></div>
                    </foreignObject>
                    <g filter="url(#filter1_dddi_51_65)">
                        <path
                            d="M535.59 78.7427L487.973 42.8776L558.738 13.9516C562.902 12.2494 564.984 11.3984 567.143 11.5597C569.301 11.7211 571.233 12.8723 575.098 15.1747L590.22 24.1832C603.923 32.347 610.775 36.4289 610.372 42.0779C609.97 47.7269 602.609 50.7964 587.887 56.9354L535.59 78.7427Z"
                            fill="white"
                            fillOpacity="0.42"
                        />
                    </g>
                    <foreignObject
                        x="-3.43323e-05"
                        y="-10.9516"
                        width="215.96"
                        height="167.786"
                    >
                        <div
                            style={{
                                backdropFilter: "blur(11.03px)",
                                clipPath: "url(#bgblur_1_51_65_clip_path)",
                                height: "100%",
                                width: "100%",
                            }}
                        ></div>
                    </foreignObject>
                    <g filter="url(#filter2_dddi_51_65)">
                        <path
                            d="M123.116 79.1145L171.548 42.8776L97.2715 12.5164C94.8305 11.5186 93.61 11.0197 92.3446 11.1143C91.0793 11.2089 89.9465 11.8837 87.681 13.2334L56.155 32.0149C48.1832 36.7641 44.1973 39.1386 44.4205 42.4378C44.6438 45.737 48.9132 47.553 57.4522 51.1849L123.116 79.1145Z"
                            fill="white"
                            fillOpacity="0.42"
                        />
                    </g>
                    <foreignObject
                        x="78.7048"
                        y="20.823"
                        width="501.297"
                        height="136.012"
                    >
                        <div
                            style={{
                                backdropFilter: "blur(11.03px)",
                                clipPath: "url(#bgblur_2_51_65_clip_path)",
                                height: "100%",
                                width: "100%",
                            }}
                        ></div>
                    </foreignObject>
                    <g filter="url(#filter3_dddi_51_65)">
                        <path
                            d="M487.973 42.8774L171.548 42.8775L123.116 79.1144L535.59 78.7424L487.973 42.8774Z"
                            fill="url(#paint0_linear_51_65)"
                            fillOpacity="0.72"
                        />
                    </g>
                    <defs>
                        <filter id="filter1_dddi_51_65">
                            <feGaussianBlur stdDeviation="22.2058" />
                        </filter>
                        <filter id="filter2_dddi_51_65">
                            <feGaussianBlur stdDeviation="22.2058" />
                        </filter>
                        <filter id="filter3_dddi_51_65">
                            <feGaussianBlur stdDeviation="22.2058" />
                        </filter>
                        <clipPath id="bgblur_0_51_65_clip_path">
                            <path d="M535.59 78.7427L487.973 42.8776L558.738 13.9516Z" />
                        </clipPath>
                        <clipPath id="bgblur_1_51_65_clip_path">
                            <path d="M123.116 79.1145L171.548 42.8776L56.155 32.0149Z" />
                        </clipPath>
                        <clipPath id="bgblur_2_51_65_clip_path">
                            <path d="M487.973 42.8774H171.548L123.116 79.1144L535.59 78.7424Z" />
                        </clipPath>
                        <linearGradient id="paint0_linear_51_65" x1="329.353" y1="42.8774" x2="329.353" y2="79.1144" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.4" />
                            <stop offset="1" stopColor="white" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="relative w-full h-full flex justify-center items-center" style={{ paddingBottom: "65%" }}>
                        <AnimatePresence mode="popLayout">
                            {items.map((chip, index) => {
                                if (index !== 0) return null;
                                return (
                                    <motion.div
                                        key={chip.id}
                                        initial={{ y: isMobile ? -70 : -100, opacity: 0, scale: 0.8 }}
                                        animate={{ y: 0, opacity: 1, scale: isMobile ? 1 : 1.25 }}
                                        exit={{ y: isMobile ? 100 : 130, scale: 0.8, transition: { duration: 0.8 } }}
                                        transition={{ duration: 0.5, ease: [0.455, 0.03, 0.515, 0.955] }}
                                        className="bg-card border border-border z-10 rounded-full p-2 w-[240px] shadow-sm absolute pointer-events-auto flex items-center gap-2 origin-bottom"
                                    >
                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted-foreground/10 text-muted-foreground">
                                            <HugeiconsIcon icon={chip.icon as any} className="size-5" />
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-sm font-medium text-foreground leading-none">{chip.title}</span>
                                            <span className="text-xs text-muted-foreground">{chip.description}</span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bucket;
