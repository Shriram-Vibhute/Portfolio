
"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface MeteorStyle {
  left: string;
  animationDelay: string;
  animationDuration: string;
}

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<MeteorStyle[]>([]);

  useEffect(() => {
    const numMeteors = number || 20;
    const styles: MeteorStyle[] = [];
    for (let i = 0; i < numMeteors; i++) {
      styles.push({
        left: `${i * (600 / numMeteors) - 300}px`, // Spread across 600px range, centered
        animationDelay: Math.random() * (numMeteors * 0.2) + "s",
        animationDuration: Math.floor(Math.random() * (10 - 5) + 5) + "s",
      });
    }
    setMeteorStyles(styles);
  }, [number]);

  if (meteorStyles.length === 0) {
    // Render nothing or a placeholder until styles are generated on the client
    return null; 
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: "-40px", // Start above the container
            left: style.left,
            animationDelay: style.animationDelay,
            animationDuration: style.animationDuration,
          }}
        ></span>
      ))}
    </motion.div>
  );
};
