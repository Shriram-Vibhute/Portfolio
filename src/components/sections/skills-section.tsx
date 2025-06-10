
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import {
  BrainCircuit,
  Code,
  Cpu,
  Share2,
  Sigma,
} from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: Array<{ name: string; icon?: React.ElementType }>; // Kept for data structure, but not rendered as buttons
}

const skillsData: SkillCategory[] = [
  {
    name: 'Programming Languages and Libraries',
    icon: Code,
    skills: [
      { name: 'Python' },
      { name: 'C/C++' },
      { name: 'SQL' },
      { name: 'Scikit-learn' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      { name: 'Keras' },
      { name: 'Tensorflow' },
    ],
  },
  {
    name: 'Machine Learning',
    icon: Cpu,
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
  },
  {
    name: 'Deep Learning',
    icon: BrainCircuit,
    skills: [
      { name: 'ANN' },
      { name: 'CNN' },
      { name: 'RNN' },
      { name: 'Transformers' },
      { name: 'Bert' },
      { name: 'GPT' },
      { name: 'Auto Encoders' },
    ],
  },
  {
    name: 'MLOps',
    icon: Share2,
    skills: [
      { name: 'AWS (Amazon Web Services)' },
      { name: 'DVC (Data Version Control)' },
      { name: 'MLflow' },
      { name: 'Docker (Basics)' },
      { name: 'CI/CD (Continuous Integration/Continuous Delivery)' },
      { name: 'GitHub Actions' },
      { name: 'Git' },
    ],
  },
  {
    name: 'Mathematics',
    icon: Sigma,
    skills: [
      { name: 'Statistics' },
      { name: 'Probability' },
      { name: 'Linear Algebra' },
    ],
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const categoryItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
          variants={categoryItemVariants} // Use categoryItemVariants for the main heading as well
        >
          My Skills
        </motion.h2>
        <div className="space-y-10">
          {skillsData.map((category) => (
            <motion.div
              key={category.name}
              variants={categoryItemVariants}
              className="text-left" // Ensure text alignment is left for category titles
            >
              <div className="flex items-center mb-4">
                <category.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary mr-3 sm:mr-4 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-headline text-slate-100">
                  {category.name}
                </h3>
              </div>
              <Separator className="bg-neutral-700/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
