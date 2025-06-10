
"use client";

import type React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Meteors } from '@/components/ui/meteors'; 

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
    logoAlt: "Data Science Mentorship Program 2.0 Logo",
    institution: "Data Science Mentorship Program 2.0",
    degree: "Machine Learning + Deep Learning + MLOps",
    dates: "June 2024 - Present",
  },
  {
    id: "2",
    logoUrl: "REPLACE_WITH_ACTUAL_LOGO_URL_PCCOE.png",
    logoAlt: "Pimpri Chnichwad College of Engineering, Pune Logo",
    institution: "Pimpri Chnichwad College of Engineering, Pune",
    degree: "Bachelor of Technology (B.Tech) Mechanical Engineering",
    dates: "2020 - 2024",
  },
  {
    id: "3",
    logoUrl: "REPLACE_WITH_ACTUAL_LOGO_URL_PCCOE.png", 
    logoAlt: "Pimpri Chnichwad College of Engineering, Pune Logo",
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const EducationItem: React.FC<EducationItemData> = ({ logoUrl, logoAlt, institution, degree, dates }) => {
  const actualLogoUrl = logoUrl.startsWith('REPLACE_WITH') ? `https://placehold.co/80x80.png?text=Logo` : logoUrl;
  return (
    <motion.div 
      className="relative w-full max-w-lg flex flex-col" 
      variants={itemVariants} 
    >
      <div className="absolute inset-0 h-full w-full scale-[0.85] transform rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
      
      <div className="relative flex flex-col flex-grow items-start overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-sm px-6 py-8 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center w-full gap-4">
          <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full p-1 flex items-center justify-center overflow-hidden shadow-md">
            <Image
              src={actualLogoUrl}
              alt={logoAlt}
              width={actualLogoUrl.includes('placehold.co') ? 80 : 72}
              height={actualLogoUrl.includes('placehold.co') ? 80 : 72}
              className="rounded-full object-contain"
            />
          </div>
          <div className="flex-grow text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-1 font-headline">{institution}</h3>
            <p className="text-sm sm:text-md text-slate-300">{degree}</p>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 whitespace-nowrap mt-2 sm:mt-0 sm:ml-auto">{dates}</p>
        </div>
        <Meteors number={10} /> 
      </div>
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
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 font-headline text-slate-100"
          variants={titleVariants}
        >
          Education
        </motion.h2>
        <motion.div 
          className="flex flex-wrap justify-center items-start gap-8 md:gap-12"
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
