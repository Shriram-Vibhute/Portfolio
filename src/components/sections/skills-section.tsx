
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Code,
  Cpu, // Kept for ML general, though not directly used as category icon
  BrainCircuit, // Kept for DL general
  Share2, // Kept for MLOps general
  Sigma, // Kept for Math general
  Database,
  Cloud,
  GitMerge,
  BarChart,
  Layers, // For Keras/Tensorflow
  Box // For Transformers
} from 'lucide-react';

interface Skill {
  name: string;
  icon?: React.ElementType;
}

const skillsData: Array<{
  categoryName: string; // For internal reference, not displayed
  skills: Skill[];
}> = [
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
  },
  {
    categoryName: 'Mathematics',
    skills: [
      { name: 'Statistics' },
      { name: 'Probability' },
      { name: 'Linear Algebra' },
    ],
  },
];

const allSkills: Skill[] = skillsData.flatMap(category => category.skills);

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger title and then button container
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
      staggerChildren: 0.07, // Stagger for each button
      delayChildren: 0.2, // Delay after title animation
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
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name + '-' + index}
              variants={buttonItemVariants}
            >
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary font-[450] text-[0.84rem] shadow-md hover:shadow-primary/20 transition-all duration-200 ease-out"
                size="lg" // Make buttons a bit larger for better tap targets and visual balance
              >
                {skill.icon && <skill.icon className="mr-2 h-4 w-4" />}
                {skill.name}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
