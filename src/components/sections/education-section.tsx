
"use client";

import type React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface EducationItemData {
  id: string;
  logoUrl: string;
  logoAlt: string;
  institution: string;
  degree: string;
  dates: string;
  logoHint?: string;
}

const educationData: EducationItemData[] = [
  {
    id: "1",
    logoUrl: "REPLACE_WITH_ACTUAL_LOGO_URL_DATASCIENCE_MENTORSHIP.png",
    logoAlt: "Replace with Data Science Mentorship Program 2.0 Logo",
    institution: "Data Science Mentorship Program 2.0",
    degree: "Machine Learning + Deep Learning + MLOps",
    dates: "June 2024 - Present",
  },
  {
    id: "2",
    logoUrl: "REPLACE_WITH_ACTUAL_LOGO_URL_PCCOE.png",
    logoAlt: "Replace with Pimpri Chnichwad College of Engineering, Pune Logo",
    institution: "Pimpri Chnichwad College of Engineering, Pune",
    degree: "Bachelor of Technology (B.Tech) Mechanical Engineering",
    dates: "2020 - 2024",
  },
  {
    id: "3",
    logoUrl: "REPLACE_WITH_ACTUAL_LOGO_URL_PCCOE.png",
    logoAlt: "Replace with Pimpri Chnichwad College of Engineering, Pune Logo",
    institution: "Pimpri Chnichwad College of Engineering, Pune",
    degree: "Minor Degree - Software Development",
    dates: "2020 - 2024",
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const EducationItem: React.FC<EducationItemData> = ({ logoUrl, logoAlt, institution, degree, dates }) => {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row items-center py-6 border-b border-neutral-700/50 last:border-b-0"
      variants={itemVariants}
    >
      <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-0 sm:mr-6 bg-white rounded-full p-1 flex items-center justify-center overflow-hidden">
        <Image
          src={logoUrl.startsWith('REPLACE_WITH') ? `https://placehold.co/80x80.png?text=Logo` : logoUrl}
          alt={logoAlt}
          width={72}
          height={72}
          className="rounded-full object-contain"
          // No data-ai-hint for user-provided or placeholder URLs
        />
      </div>
      <div className="flex-grow text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-1">{institution}</h3>
        <p className="text-sm sm:text-md text-slate-300">{degree}</p>
      </div>
      <p className="text-sm sm:text-md text-slate-400 whitespace-nowrap mt-2 sm:mt-0 sm:ml-6">{dates}</p>
    </motion.div>
  );
};

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      className="py-20 md:py-32 bg-background text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 font-headline tracking-tight text-slate-100"
          variants={titleVariants}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-4"
          variants={listVariants}
        >
          {educationData.map((edu) => (
            <EducationItem key={edu.id} {...edu} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
