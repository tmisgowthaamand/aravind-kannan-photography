"use client";

import {
    Add01Icon,
    MinusSignIcon,
    Tick02Icon,
    UserStoryIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import NumberFlow from "@number-flow/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Change Here
const plans = [
    {
        id: "plus",
        name: "Plus",
        description: "solo",
        monthlyPrice: 8.99,
        yearlyPrice: 6.99,
        features: [
            "1TB of Space",
            "30 days of file recovery",
            "256-bit AES and SSL/TLS",
        ],
    },
    {
        id: "standard",
        name: "Standard",
        description: "startup",
        monthlyPrice: 12.99,
        yearlyPrice: 9.99,
        features: [
            "1TB of Space",
            "30 days of file recovery",
            "256-bit AES and SSL/TLS",
        ],
    },
    {
        id: "advanced",
        name: "Advanced",
        description: "teams",
        monthlyPrice: 24.99,
        yearlyPrice: 19.99,
        features: [
            "1TB of Space",
            "30 days of file recovery",
            "256-bit AES and SSL/TLS",
        ],
    },
];

const TRANSITION = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 0.8,
};

export default function PricingCard() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
        "monthly"
    );
    const [selectedPlan, setSelectedPlan] = useState("standard");
    const [userCount, setUserCount] = useState(3);

    return (
        <div className="w-full max-w-[450px] flex flex-col gap-6 p-5 px-4 sm:p-6 rounded-3xl border border-border bg-background shadow-sm transition-colors duration-300 mx-auto">
            <div className="flex flex-col gap-4 mb-2">
                <h1 className="text-2xl font-semibold text-foreground tracking-tight">
                    Select a Plan
                </h1>

                <div className="bg-muted p-1 h-10 w-full rounded-xl ring-1 ring-border flex relative">
                    <button
                        onClick={() => setBillingCycle("monthly")}
                        className={`flex-1 h-full rounded-lg text-sm font-medium relative transition-colors duration-300 z-10 ${billingCycle === "monthly"
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBillingCycle("yearly")}
                        className={`flex-1 h-full rounded-lg text-sm font-medium relative transition-colors duration-300 z-10 flex items-center justify-center gap-2 ${billingCycle === "yearly"
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        Yearly
                        <span className="bg-primary text-[10px] font-black px-1.5 py-0.5 rounded-full uppercase text-white tracking-tight">
                            20% OFF
                        </span>
                    </button>

                    <motion.div
                        layoutId="tab-bg"
                        className="absolute top-1 bottom-1 bg-background rounded-lg shadow-sm ring-1 ring-border h-[calc(100%-8px)]"
                        initial={false}
                        animate={{
                            x: billingCycle === "monthly" ? 0 : "100%",
                            width: "50%"
                        }}
                        transition={TRANSITION}
                        style={{ left: 4 }}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-3">
                {plans.map((plan) => {
                    const isSelected = selectedPlan === plan.id;
                    const price =
                        billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

                    return (
                        <div
                            key={plan.id}
                            onClick={() => setSelectedPlan(plan.id)}
                            className="relative cursor-pointer"
                        >
                            <div
                                className={`relative rounded-xl bg-card border transition-all duration-300 ${isSelected ? "z-10 border-primary border-2" : "border-border/50"
                                    }`}
                            >
                                <div className="p-5">
                                    <div className="flex justify-between items-start">
                                        <div className="flex gap-4">
                                            <div className="mt-1 shrink-0">
                                                <div
                                                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isSelected
                                                            ? "border-primary"
                                                            : "border-muted-foreground/15"
                                                        }`}
                                                >
                                                    <AnimatePresence mode="wait" initial={false}>
                                                        {isSelected && (
                                                            <motion.div
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                exit={{ scale: 0 }}
                                                                className="w-3 h-3 rounded-full bg-primary"
                                                                transition={{
                                                                    type: "spring",
                                                                    stiffness: 300,
                                                                    damping: 25,
                                                                    duration: 0.2,
                                                                }}
                                                            />
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-foreground leading-tight">
                                                    {plan.name}
                                                </h3>
                                                <p className="text-sm text-muted-foreground lowercase">
                                                    {plan.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xl font-medium text-foreground">
                                                <NumberFlow
                                                    value={price}
                                                    format={{ style: "currency", currency: "USD" }}
                                                />
                                            </div>
                                            <div className="text-xs text-muted-foreground/60 flex items-center justify-end gap-1 ">
                                                /{billingCycle === "monthly" ? "mo" : "yr"}
                                            </div>
                                        </div>
                                    </div>

                                    <AnimatePresence initial={false}>
                                        {isSelected && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: [0.32, 0.72, 0, 1],
                                                }}
                                                className="overflow-hidden w-full"
                                            >
                                                <div className="pt-6 flex flex-col gap-6">
                                                    <div className="flex flex-col gap-3.5">
                                                        {plan.features.map((feature, idx) => (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 5 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{
                                                                    delay: idx * 0.05,
                                                                    duration: 0.3,
                                                                }}
                                                                key={idx}
                                                                className="flex items-center gap-3 text-sm text-foreground/80 "
                                                            >
                                                                <HugeiconsIcon
                                                                    icon={Tick02Icon}
                                                                    size={16}
                                                                    className="text-primary"
                                                                />
                                                                {feature}
                                                            </motion.div>
                                                        ))}
                                                    </div>

                                                    <div className="h-px bg-muted" />

                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-muted shrink-0 flex items-center justify-center">
                                                                <HugeiconsIcon
                                                                    icon={UserStoryIcon}
                                                                    size={24}
                                                                    className="text-muted-foreground"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="text-sm font-medium text-foreground leading-none">
                                                                    Users
                                                                </span>
                                                                <span className="text-xs text-muted-foreground mt-0.5 whitespace-nowrap">
                                                                    Starting at {userCount} users
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center gap-4 bg-muted p-1 rounded-xl border border-border">
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setUserCount(Math.max(1, userCount - 1));
                                                                }}
                                                                className="p-1 rounding-lg hover:bg-background hover:shadow-sm transition-all text-muted-foreground/60 hover:text-foreground active:scale-95"
                                                            >
                                                                <HugeiconsIcon icon={MinusSignIcon} size={14} />
                                                            </button>
                                                            <span className="text-sm w-4 text-center tabular-nums text-foreground/80">
                                                                <NumberFlow value={userCount} />
                                                            </span>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setUserCount(userCount + 1);
                                                                }}
                                                                className="p-1 rounded-lg hover:bg-background hover:shadow-sm transition-all text-muted-foreground/60 hover:text-foreground active:scale-95"
                                                            >
                                                                <HugeiconsIcon icon={Add01Icon} size={16} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
