"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    avatar: string;
    content: string;
    color: string;
    textColor: string;
}

// Change Here
const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Marcus Thorne",
        role: "Head of Product, EcoStream",
        avatar: "https://tapback.co/api/avatar/1.webp",
        content:
            "The interface is so intuitive that our team was up and running in hours. Highly recommended for fast-moving startups.",
        color: "#E0F2FE",
        textColor: "#1E3A8A",
    },
    {
        id: 2,
        name: "Elena Rodriguez",
        role: "Director of UX, CreativeFlow",
        avatar: "https://tapback.co/api/avatar/6.webp",
        content:
            "We've tried dozens of tools, but this one stands out for its elegant design. It's a game-changer for our workflow.",
        color: "#F3E8FF",
        textColor: "#581C87",
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "CEO, TechNova",
        avatar: "https://tapback.co/api/avatar/4.webp",
        content:
            "Scaling our infrastructure used to be a nightmare until we found this platform. Now we can focus on building features.",
        color: "#DCFCE7",
        textColor: "#064E3B",
    },
    {
        id: 4,
        name: "David Kim",
        role: "CTO, NextGen Solutions",
        avatar: "https://tapback.co/api/avatar/6.webp",
        content:
            "The security features alone are worth every penny. Our clients feel safer knowing their data is protected by encryption.",
        color: "#FEF9C3",
        textColor: "#713F12",
    },
];

export default function ShakeTestimonial() {
    const [cards, setCards] = useState(testimonials);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);

        setTimeout(() => {
            setCards((prev) => {
                const [first, ...rest] = prev;
                return [...rest, first];
            });
            setIsAnimating(false);
        }, 600);
    }, [isAnimating]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <div className="flex items-center justify-center w-full bg-transparent p-4 min-h-[450px] max-w-[440px] mx-auto overflow-visible">
            <div
                className="relative w-full h-[340px]"
                style={{ perspective: "1000px" }}
            >
                <AnimatePresence mode="popLayout">
                    {cards.map((card, index) => {
                        const isTop = index === 0;

                        return (
                            <motion.div
                                key={card.id}
                                layout
                                style={{
                                    backgroundColor: card.color,
                                    zIndex: testimonials.length - index,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    transformOrigin: "center center",
                                    borderColor: `${card.textColor}20`,
                                }}
                                initial={{
                                    scale: 0.7,
                                    opacity: 0,
                                    y: 40,
                                    rotateX: -20,
                                }}
                                animate={{
                                    scale:
                                        isTop && isAnimating
                                            ? [1, 1.05, 1, 1.05, 1, 1, 0.9]
                                            : 1 - index * 0.05,
                                    y:
                                        isTop && isAnimating
                                            ? [0, 0, 0, 0, 0, 0, -300]
                                            : index * 15,
                                    rotateX:
                                        isTop && isAnimating ? [0, 0, 0, 0, 0, 0, 15] : -index * 2,
                                    x: isTop && isAnimating ? [0, -12, 12, -12, 12, 0, 0] : 0,
                                    rotate: isTop && isAnimating ? [0, -2, 2, -2, 2, 0, -5] : 0,

                                    opacity: index < 4 ? 1 : 0,

                                    transition:
                                        isTop && isAnimating
                                            ? {
                                                duration: 0.6,
                                                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1],
                                                ease: "easeOut",
                                            }
                                            : {
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30,
                                                mass: 0.6,
                                            },
                                }}
                                className={cn(
                                    "w-full h-full rounded-[32px] p-6 lg:p-8 shadow-[0_12px_20px_rgba(0,0,0,0.03)]",
                                    "border flex flex-col justify-between overflow-hidden",
                                    "cursor-pointer select-none ring-1 ring-black/5 backdrop-blur-3xl",
                                    "preserve-3d transition-shadow duration-500 hover:shadow-[0_13px_60px_rgba(0,0,0,0.1)]"
                                )}
                                onClick={handleNext}
                            >
                                <div className="flex flex-col gap-3 md:gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white/50 rounded-full shadow-inner border border-black/5 overflow-hidden shrink-0">
                                            <img
                                                src={card.avatar}
                                                className="w-full h-full object-cover"
                                                alt={card.name}
                                            />
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <h3
                                                className="font-bold text-sm leading-tight !p-0 !m-0"
                                                style={{ color: card.textColor }}
                                            >
                                                {card.name}
                                            </h3>
                                            <p
                                                className="text-[10px] opacity-60 !p-0 !m-0"
                                                style={{ color: card.textColor }}
                                            >
                                                {card.role}
                                            </p>
                                        </div>
                                    </div>
                                    <p
                                        className="text-lg font-medium leading-[1.3] tracking-tight italic !p-0 !m-0"
                                        style={{ color: card.textColor }}
                                    >
                                        "{card.content}"
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
