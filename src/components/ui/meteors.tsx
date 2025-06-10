
"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Corrected import
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      // Removed className from motion.div to avoid conflict if user passes one
    >
      {meteors.map((el, idx) => {
        const meteorCount = number || 20;
        // Calculate position to evenly distribute meteors across container width
        // Adjusted range for better spread, assuming card width could be around 300-500px
        // Let's spread them across a 600px range, centered at 0.
        const position = idx * (600 / meteorCount) - 300;

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className // className prop is applied to each meteor span
            )}
            style={{
              top: "-40px", // Start above the container
              left: `${position}px`, // Ensure 'px' unit is added
              animationDelay: Math.random() * (meteorCount * 0.2) + "s", // Spread out delays more based on count
              animationDuration: Math.floor(Math.random() * (10 - 5) + 5) + "s",
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};
