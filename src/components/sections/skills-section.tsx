
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { Cpu, Brain, GitFork, Sigma } from 'lucide-react'; // Icons for categories

interface SkillCategory {
  name: string;
  skills: string[];
  icon: React.ReactNode;
}

const skillsData: SkillCategory[] = [
  {
    name: 'Programming Languages and Libraries',
    skills: ['Python', 'C/C++', 'SQL', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    icon: <Cpu className="mr-3 h-6 w-6 text-primary" />,
  },
  {
    name: 'Machine Learning',
    skills: [
      'Regression',
      'Classification',
      'Supervised Learning',
      'Unsupervised Learning',
      'Decision Trees',
      'Ensemble Methods',
      'Boosting',
      'Clustering',
      'Dimensionality Reduction',
      'K-Nearest Neighbors (KNN)',
      'Naive Bayes',
    ],
    icon: <Brain className="mr-3 h-6 w-6 text-primary" />,
  },
  {
    name: 'MLOps',
    skills: ['AWS (Amazon Web Services)', 'DVC (Data Version Control)', 'MLflow', 'Docker (Basics)', 'CI/CD (Continuous Integration/Continuous Delivery)', 'GitHub Actions', 'Git'],
    icon: <GitFork className="mr-3 h-6 w-6 text-primary" />,
  },
  {
    name: 'Mathematics',
    skills: ['Statistics', 'Probability', 'Linear Algebra'],
    icon: <Sigma className="mr-3 h-6 w-6 text-primary" />,
  },
];

const SkillButton: React.FC<{ skill: string; index: number }> = ({ skill, index }) => {
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
        {skill}
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
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <h3 className="flex items-center text-2xl font-semibold text-primary mb-6 font-headline">
                {category.icon}
                {category.name}
              </h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <SkillButton key={skill} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
