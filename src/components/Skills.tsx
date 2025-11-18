"use client";

import { motion } from "framer-motion";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiJavascript,
  SiFigma, SiBootstrap, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiMongodb, SiGit, SiGithub, SiVercel, SiPostman
} from "react-icons/si";

import { 
  Users, MessageCircle, Clock, Target, 
  Lightbulb, Search, Zap, BookOpen, Code2
} from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    gradient: "from-blue-500/20 to-cyan-500/20",
    hoverGradient: "from-blue-500/30 to-cyan-500/30",
    border: "border-blue-200/50",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
      { name: "React", icon: SiReact, color: "text-blue-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    ],
  },
  {
    category: "Design",
    gradient: "from-purple-500/20 to-pink-500/20",
    hoverGradient: "from-purple-500/30 to-pink-500/30",
    border: "border-purple-200/50",
    skills: [
      { name: "Figma", icon: SiFigma, color: "text-purple-600" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-violet-600" },
      { name: "HTML/CSS", icon: SiHtml5, color: "text-orange-500" },
    ],
  },
  {
    category: "Tools",
    gradient: "from-green-500/20 to-emerald-500/20",
    hoverGradient: "from-green-500/30 to-emerald-500/30",
    border: "border-green-200/50",
    skills: [
      { name: "VS Code", icon: Code2, color: "text-blue-500" },
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "GitHub", icon: SiGithub, color: "text-black dark:text-white" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    ],
  },
  
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold font-dancing text-4xl md:text-5xl gradient-text mb-4">
            Tech Stack
          </h2>
          <p className="text-muted-foreground font-bold text-lg max-w-2xl mx-auto">
            Technologies I Work With
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Main Card */}
              <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.gradient} border ${category.border} backdrop-blur-sm transition-all duration-500 group-hover:shadow-xl h-full`}>
                
                {/* Animated overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                
                <div className="relative z-10">
                  {/* Category Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
                    {category.category}
                  </h3>
                  
                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.05 + categoryIndex * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex flex-col items-center p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 group-hover:bg-background/90"
                      >
                        <skill.icon className={`w-8 h-8 mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                        <span className="text-sm font-medium text-foreground text-center leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
         >
          <h3 className="text-lg font-semibold text-foreground mb-5">
           Other Skills and Practices
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
             {[
               "State Management", "Responsive Design", "User Flows",
               "API Integration and Testing", "Debugging", "Cross Browser Compatibility",
               "Component Based Development", "Routing & Navigation"
             
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-foreground text-sm hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
          {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
         >
          <h3 className="text-lg font-semibold text-foreground mb-5">
           Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
             {[
               "Effective Communication","Problem Solving", "Time Management", "Creativity & Innovation",
               "Teamwork & Collaboration", "Attention to Detail", "Adaptability", "Flexibility", "Continuous Learning"
             
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-foreground text-sm hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}