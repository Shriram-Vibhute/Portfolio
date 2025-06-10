
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ContactSection() {
  const twitterLink = "https://x.com/darshanbhuva"; 
  const emailAddress = "darshanbhuva57@gmail.com"; 

  return (
    <motion.section
      id="contact"
      className="py-20 md:py-32 bg-background text-foreground"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-headline tracking-tight"
          variants={itemVariants}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg leading-relaxed"
          variants={itemVariants}
        >
          Want to chat? Just shoot me a DM with a direct question on Twitter and I&apos;ll respond whenever I can. I will ignore all soliciting.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          variants={itemVariants}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 hover:text-primary px-8 py-4 font-[450] text-[0.9rem] shadow-md shadow-primary/20 hover:shadow-primary/30 transition-shadow w-full sm:w-auto"
          >
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-2 h-5 w-5" />
              DM on Twitter
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 hover:text-primary px-8 py-4 font-[450] text-[0.9rem] shadow-md shadow-primary/20 hover:shadow-primary/30 transition-shadow w-full sm:w-auto"
          >
            <a href={`mailto:${emailAddress}`}>
              <Mail className="mr-2 h-5 w-5" />
              Send an Email
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
