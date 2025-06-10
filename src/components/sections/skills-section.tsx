
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
  Box,
  Sheet, // For Pandas
  LineChart, // For Regression
  Tags, // For Classification
  GitFork, // For Decision Trees
  Combine, // For Ensemble Methods
  TrendingUp, // For Boosting
  Minimize2, // For Dimensionality Reduction
  Users, // For KNN & Clustering
  Scan, // For CNN
  Repeat, // For RNN
  MessageSquareText, // For Bert, GPT
  Container, // For Docker
  Workflow, // For MLflow
  RefreshCw, // For CI/CD
  Dices, // For Probability
  Table2, // Alternative for Pandas if Sheet is not preferred, or for SQL variant
} from 'lucide-react';

interface Skill {
  name: string;
  icon?: React.ElementType;
}

interface SkillCategory {
  categoryName: string; 
  skills: Skill[];
  themeClasses: {
    text: string;
  };
}

const skillsData: SkillCategory[] = [
  {
    categoryName: 'Programming Languages and Libraries',
    skills: [
      { name: 'Python', icon: Code },
      { name: 'C/C++', icon: Code },
      { name: 'SQL', icon: Database },
      { name: 'Scikit-learn', icon: BrainCircuit },
      { name: 'Pandas', icon: Sheet },
      { name: 'NumPy', icon: Sigma },
      { name: 'Matplotlib', icon: BarChart },
      { name: 'Seaborn', icon: BarChart },
      { name: 'Keras', icon: Layers },
      { name: 'Tensorflow', icon: Layers },
    ],
    themeClasses: {
      text: 'text-indigo-400', 
    },
  },
  {
    categoryName: 'Machine Learning',
    skills: [
      { name: 'Regression', icon: LineChart },
      { name: 'Classification', icon: Tags },
      { name: 'Supervised Learning', icon: Cpu },
      { name: 'Unsupervised Learning', icon: Share2 }, // Changed icon for variety
      { name: 'Decision Trees', icon: GitFork },
      { name: 'Ensemble Methods', icon: Combine },
      { name: 'Boosting', icon: TrendingUp },
      { name: 'Clustering', icon: Users }, // Changed icon
      { name: 'Dimensionality Reduction', icon: Minimize2 },
      { name: 'K-Nearest Neighbors (KNN)', icon: Users },
      { name: 'Naive Bayes', icon: Sigma },
    ],
    themeClasses: {
      text: 'text-pink-400', 
    },
  },
  {
    categoryName: 'Deep Learning',
    skills: [
      { name: 'ANN', icon: BrainCircuit },
      { name: 'CNN', icon: Scan },
      { name: 'RNN', icon: Repeat },
      { name: 'Transformers', icon: Box },
      { name: 'Bert', icon: MessageSquareText },
      { name: 'GPT', icon: MessageSquareText },
      { name: 'Auto Encoders', icon: Layers },
    ],
    themeClasses: {
      text: 'text-cyan-400',
    },
  },
  {
    categoryName: 'MLOps',
    skills: [
      { name: 'AWS', icon: Cloud },
      { name: 'DVC', icon: GitMerge },
      { name: 'MLflow', icon: Workflow },
      { name: 'Docker (Basics)', icon: Container },
      { name: 'CI/CD', icon: RefreshCw },
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
      { name: 'Statistics', icon: BarChart },
      { name: 'Probability', icon: Dices },
      { name: 'Linear Algebra', icon: Sigma },
    ],
    themeClasses: {
      text: 'text-yellow-300',
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
          {skillsData.flatMap((category) =>
            category.skills.map((skill, skillIndex) => (
              <motion.div
                key={`${category.categoryName}-${skill.name}-${skillIndex}`}
                variants={buttonItemVariants}
              >
                <Button
                  variant="outline"
                  className={cn(
                    "font-[450] text-[0.84rem] shadow-md transition-all duration-200 ease-out",
                    "bg-black/60 backdrop-blur-md",
                    "border border-white/30",
                    category.themeClasses.text
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
