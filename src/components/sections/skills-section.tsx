"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  BrainCircuit,
  Cloud,
  Code,
  Cpu,
  Database,
  FileJson,
  Github,
  GitMerge,
  Layers,
  Pyramid,
  Server,
  Settings,
  Share2,
  Sigma,
  TerminalSquare,
  Wrench,
  Box,
} from 'lucide-react';

interface Skill {
  name: string;
  icon?: React.ElementType;
}

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    name: 'Programming Languages and Libraries',
    icon: Code,
    skills: [
      { name: 'Python', icon: TerminalSquare },
      { name: 'C/C++', icon: Code },
      { name: 'SQL', icon: Database },
      { name: 'Scikit-learn', icon: Settings },
      { name: 'Pandas', icon: FileJson },
      { name: 'NumPy', icon: Sigma },
      { name: 'Matplotlib', icon: Pyramid },
      { name: 'Seaborn', icon: Pyramid },
      { name: 'Keras', icon: Layers },
      { name: 'Tensorflow', icon: Layers },
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
      { name: 'Transformers', icon: Box },
      { name: 'Bert' },
      { name: 'GPT' },
      { name: 'Auto Encoders' },
    ],
  },
  {
    name: 'MLOps',
    icon: Share2,
    skills: [
      { name: 'AWS (Amazon Web Services)', icon: Cloud },
      { name: 'DVC (Data Version Control)', icon: GitMerge },
      { name: 'MLflow', icon: Settings },
      { name: 'Docker (Basics)', icon: Server },
      { name: 'CI/CD (Continuous Integration/Continuous Delivery)', icon: Wrench },
      { name: 'GitHub Actions', icon: Github },
      { name: 'Git', icon: GitMerge },
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

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillButtonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
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
          variants={categoryVariants}
        >
          My Skills
        </motion.h2>
        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              variants={categoryVariants}
              className="bg-neutral-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-primary/20 shadow-xl"
            >
              <div className="flex items-center mb-6 sm:mb-8">
                <category.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary mr-3 sm:mr-4" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-headline text-slate-100">
                  {category.name}
                </h3>
              </div>
              <motion.div
                className="flex flex-wrap gap-3 sm:gap-4"
                variants={{
                  visible: { transition: { staggerChildren: 0.07 } },
                }}
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={skillButtonVariants}>
                    <Button
                      variant="outline"
                      size="default"
                      className="border-primary text-primary hover:bg-primary/10 hover:text-primary px-4 py-2 font-[450] text-[0.84rem] shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                      {skill.icon && <skill.icon className="mr-2 h-4 w-4" />}
                      {skill.name}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
