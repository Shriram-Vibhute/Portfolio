
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTestimonials, type Testimonial } from '@/components/ui/animated-testimonials';

const certificationsData: Testimonial[] = [
  {
    quote: "TensorFlow Developer Certificate",
    name: "TensorFlow Certificate Program (Google)",
    designation: "Issued: July 2024 - Validation ID: DCcKBc",
    src: "https://placehold.co/500x500.png?text=TF+Cert",
    aiHint: "tensorflow logo",
  },
  {
    quote: "Deep Learning Specialization",
    name: "DeepLearning.AI (Coursera)",
    designation: "Issued: March 2024",
    src: "https://placehold.co/500x500.png?text=DL+Spec",
    aiHint: "deep learning",
  },
  {
    quote: "Machine Learning Specialization",
    name: "DeepLearning.AI & Stanford Online (Coursera)",
    designation: "Issued: Jan 2024",
    src: "https://placehold.co/500x500.png?text=ML+Spec",
    aiHint: "machine learning",
  },
   {
    quote: "Introduction to Machine Learning in Production",
    name: "DeepLearning.AI (Coursera)",
    designation: "Issued: April 2024",
    src: "https://placehold.co/500x500.png?text=MLOps",
    aiHint: "mlops abstract",
  },
  {
    quote: "Python for Data Science, AI & Development",
    name: "IBM (Coursera)",
    designation: "Issued: Dec 2023",
    src: "https://placehold.co/500x500.png?text=IBM+Python",
    aiHint: "python data",
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CertificationSection() {
  return (
    <motion.section
      id="certifications"
      className="py-20 md:py-32 bg-background text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 font-headline"
          variants={titleVariants}
        >
          My Certifications
        </motion.h2>
        <AnimatedTestimonials testimonials={certificationsData} autoplay={true} />
      </div>
    </motion.section>
  );
}
