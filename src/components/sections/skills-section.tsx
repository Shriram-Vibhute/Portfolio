
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Code,
  Cpu,
  BrainCircuit,
  Share2,
  Sigma,
  Database,
  Cloud,
  GitMerge,
  BarChart,
  Layers,
  Box
} from 'lucide-react';

interface Skill {
  name: string;
  icon?: React.ElementType;
}

interface SkillCategory {
  categoryName: string; // Used for internal logic, not displayed directly as a heading anymore
  skills: Skill[];
  themeClasses: {
    text: string; // e.g., 'text-pink-400' for light pink text
  };
}

const skillsData: SkillCategory[] = [
  {
    categoryName: 'Programming Languages and Libraries',
    skills: [
      { name: 'Python', icon: Code },
      { name: 'C/C++' },
      { name: 'SQL', icon: Database },
      { name: 'Scikit-learn' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Matplotlib', icon: BarChart },
      { name: 'Seaborn' },
      { name: 'Keras', icon: Layers },
      { name: 'Tensorflow', icon: Layers },
    ],
    themeClasses: {
      text: 'text-yellow-300', // Changed from text-orange-400
    },
  },
  {
    categoryName: 'Machine Learning',
    skills: [
      { name: 'Regression' },
      { name: 'Classification' },
      { name: 'Supervised Learning' },
      { name: 'Unsupervised Learning' },
      { name: 'Decision Trees' },
      { name: 'Ensemble Methods' },
      { name: 'Boosting' },
      { name: 'Clustering' },
      { name: 'Dimensionality Reduction' },
      { name: 'K-Nearest Neighbors (KNN)' },
      { name: 'Naive Bayes' },
    ],
    themeClasses: {
      text: 'text-pink-400', // Changed from text-yellow-400
    },
  },
  {
    categoryName: 'Deep Learning',
    skills: [
      { name: 'ANN' },
      { name: 'CNN' },
      { name: 'RNN' },
      { name: 'Transformers', icon: Box },
      { name: 'Bert' },
      { name: 'GPT' },
      { name: 'Auto Encoders' },
    ],
    themeClasses: {
      text: 'text-cyan-400',
    },
  },
  {
    categoryName: 'MLOps',
    skills: [
      { name: 'AWS', icon: Cloud },
      { name: 'DVC' },
      { name: 'MLflow' },
      { name: 'Docker (Basics)'},
      { name: 'CI/CD'},
      { name: 'GitHub Actions', icon: GitMerge },
      { name: 'Git', icon: GitMerge },
    ],
    themeClasses: {
      text: 'text-green-400',
    },
  },
  {
    categoryName: 'Mathematics',
    skills: [
      { name: 'Statistics' },
      { name: 'Probability' },
      { name: 'Linear Algebra' },
    ],
    themeClasses: {
      text: 'text-indigo-400',
    },
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const buttonItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="py-20 md:py-32 bg-background text-foreground"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 font-headline tracking-tight"
          variants={titleVariants}
        >
          My Skills
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4"
          variants={buttonContainerVariants}
        >
          {skillsData.flatMap((category, categoryIndex) =>
            category.skills.map((skill, skillIndex) => (
              <motion.div
                key={`${category.categoryName}-${skill.name}-${skillIndex}`}
                variants={buttonItemVariants}
              >
                <Button
                  variant="outline" // Base variant, visual styles overridden
                  className={cn(
                    "font-[450] text-[0.84rem] shadow-md transition-all duration-200 ease-out", // Base structure, font, and animation
                    "bg-black/60 backdrop-blur-md", // Glassmorphism background
                    "border border-white/30",       // Light white border
                    "hover:bg-black/80 hover:border-white/50", // Hover effect for glassmorphism
                    category.themeClasses.text       // Category-specific text color
                  )}
                  size="lg"
                >
                  {skill.icon && <skill.icon className={cn("mr-2 h-4 w-4", category.themeClasses.text)} />}
                  {skill.name}
                </Button>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
