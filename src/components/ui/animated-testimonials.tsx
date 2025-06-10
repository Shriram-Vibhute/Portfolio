"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion"; // Changed from motion/react
import Image from "next/image";
import { useEffect, useState } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  aiHint?: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState<number[]>([]);

  useEffect(() => {
    if (testimonials.length > 0) {
      setRotations(testimonials.map(() => Math.floor(Math.random() * 15) - 7)); // Reduced range for less extreme rotations
    }
  }, [testimonials.length]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (autoplay) {
      intervalId = setInterval(handleNext, 5000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoplay, active, testimonials.length]); // Added active and testimonials.length to dependencies

  if (!testimonials || testimonials.length === 0) {
    return null; // Don't render if no testimonials
  }

  return (
    <div className="mx-auto max-w-sm px-4 py-10 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-y-10 md:gap-x-20 md:grid-cols-2 items-center">
        <div className="md:order-2">
          <div className="relative h-64 w-full sm:h-80">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => {
                const currentRotation = rotations[index] ?? 0;
                return (
                  <motion.div
                    key={testimonial.src + index} // Ensure unique key
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: currentRotation,
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : currentRotation,
                      zIndex: isActive(index)
                        ? testimonials.length 
                        : testimonials.length - Math.abs(active - index),
                      y: isActive(index) ? [0, -40, 0] : 0, // Reduced y-axis animation
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: currentRotation,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center shadow-xl"
                      data-ai-hint={testimonial.aiHint || "certificate image"}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4 md:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.3, // Slightly faster transition for text
                ease: "easeInOut",
              }}
              className="min-h-[180px] sm:min-h-[200px]" // Ensure minimum height for text container
            >
              <h3 className="text-2xl font-bold text-foreground font-headline">
                {testimonials[active]?.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {testimonials[active]?.designation}
              </p>
              <motion.p className="mt-6 text-md text-foreground/80 leading-relaxed">
                {testimonials[active]?.quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(8px)",
                      opacity: 0,
                      y: 3,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 pt-8 md:pt-4">
            <button
              onClick={handlePrev}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary/20"
              aria-label="Previous testimonial"
            >
              <IconArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary/20"
              aria-label="Next testimonial"
            >
              <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
