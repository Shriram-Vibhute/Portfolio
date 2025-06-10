
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { Cpu, Brain, GitFork, Sigma, FileCode2, Database, Cloud, Container, Github, Settings, Calculator, Activity, Palette, BrainCircuit, Layers, Box } from 'lucide-react';

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
  icon: React.ReactNode;
}

const skillsData: SkillCategory[] = [
  {
    name: 'Programming Languages and Libraries',
    skills: [
      { name: 'Python', icon: <FileCode2 className="inline-block h-4 w-4" /> },
      { name: 'C/C++' },
      { name: 'SQL', icon: <Database className="inline-block h-4 w-4" /> },
      { name: 'Scikit-learn', icon: <Settings className="inline-block h-4 w-4" /> },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Matplotlib', icon: <Activity className="inline-block h-4 w-4" /> },
      { name: 'Seaborn', icon: <Palette className="inline-block h-4 w-4" /> },
      { name: 'Keras', icon: <Layers className="inline-block h-4 w-4" /> },
      { name: 'Tensorflow', icon: <Layers className="inline-block h-4 w-4" /> },
    ],
    icon: <Cpu className="mr-3 h-6 w-6 text-primary" />,
  },
  {
    name: 'Machine Learning',
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
    icon: <Brain className="mr-3 h-6 w-6 text-primary" />,
  },
  {
    name: 'Deep Learning',
    skills: [
      { name: 'ANN' },
      { name: 'CNN' },
      { name: 'RNN' },
      { name: 'Transformers', icon: <Box className="inline-block h-4 w-4" /> },
      { name: 'Bert' },
      { name: 'GPT' },
      { name: 'Auto Encoders' },
    ],
    icon: <BrainCircuit className="mr-3 h-6 w-6 text-primary" />,
  },
  {
    name: 'MLOps',
    skills: [
      { name: 'AWS (Amazon Web Services)', icon: <Cloud className="inline-block h-4 w-4" /> },
      { name: 'DVC (Data Version Control)' },
      { name: 'MLflow' },
      { name: 'Docker (Basics)', icon: <Container className="inline-block h-4 w-4" /> },
      { name: 'CI/CD (Continuous Integration/Continuous Delivery)', icon: <GitFork className="inline-block h-4 w-4" /> },
      { name: 'GitHub Actions', icon: <Github className="inline-block h-4 w-4" /> },
      { name: 'Git', icon: <Github className="inline-block h-4 w-4" /> },
    ],
    icon: <GitFork className="mr-3 h-6 w-6 text-primary" />,
  },
  {
    name: 'Mathematics',
    skills: [
      { name: 'Statistics', icon: <Activity className="inline-block h-4 w-4" /> },
      { name: 'Probability' },
      { name: 'Linear Algebra', icon: <Calculator className="inline-block h-4 w-4" /> },
    ],
    icon: <Sigma className="mr-3 h-6 w-6 text-primary" />,
  },
];

const SkillButton: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Button
        variant="outline"
        className="border-primary text-primary hover:bg-primary/10 hover:text-primary m-1 shadow-md transition-all hover:shadow-lg hover:scale-105 font-[450] text-[0.84rem]"
      >
        {skill.icon && <span className="mr-2">{skill.icon}</span>}
        {skill.name}
      </Button>
    </motion.div>
  );
};

export default function SkillsSection() {
  const sectionRef = React.useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="skills" className="py-20 md:py-32 bg-background text-foreground" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 font-headline tracking-tight"
        >
          My Skills
        </motion.h2>
        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }} // Adjusted delay for better staggering
            >
              <h3 className="flex items-center text-2xl font-semibold text-primary mb-6 font-headline">
                {category.icon}
                {category.name}
              </h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <SkillButton key={skill.name} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
