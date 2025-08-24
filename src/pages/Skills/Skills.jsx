import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaGithub,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiDotnet,
  SiVercel,
  SiFlask,
  SiSqlite,
  SiPostman,
} from "react-icons/si";
import { TbBrandVscode, TbBrandCSharp, TbBrandMysql } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import {
  Code2,
  Layers,
  Database,
  Layout,
  Cpu,
  Cloud,
  Network,
} from "lucide-react";

// ---------------- SkillCard ----------------
const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-15 h-15" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

// ---------------- ExperienceCard ----------------
const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />
    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

// ---------------- Main Section ----------------
const SkillsAndExperienceSection = () => {
  const skillCategories = [
    {
      color: "text-blue-400",
      skills: [
        {
          name: "C#",
          icon: <TbBrandCSharp className="w-4 h-4 text-[#8b449c]" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
      ],
    },
    {
      color: "text-green-400",
      skills: [
        {
          name: "MySQL",
          icon: <TbBrandMysql className="w-4 h-4 text-[#1a6997]" />,
        },
        {
          name: "SQL Server",
          icon: <DiMsqlServer className="w-4 h-4 text-[#F24E1E]" />,
        },
        {
          name: "SQLite",
          icon: <SiSqlite className="w-4 h-4 text-[#4faade]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        {
          name: "GitHub",
          icon: <FaGithub className="w-4 h-4 text-[#fdfdfd]" />,
        },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        {
          name: "Postman",
          icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" />,
        },
      ],
    },
    {
      icon: Layers,
      title: "Frameworks & Libraries",
      color: "text-green-400",
      skills: [
        { name: ".NET", icon: <SiDotnet className="w-4 h-4 text-[#512BD4]" /> },
        {
          name: ".NET MAUI",
          icon: <SiDotnet className="w-4 h-4 text-[#512BD4]" />,
        },
        {
          name: "ASP.NET Web API",
          icon: <SiDotnet className="w-4 h-4 text-[#512BD4]" />,
        },
        { name: "Flask", icon: <SiFlask className="w-4 h-4 text-white" /> },
      ],
    },
  ];

  const experience = {
    icon: Network,
    title: "Software Developer Intern",
    company: "Arsene Software Solutions",
    period: "Feb 2025 - May 2025",
    description: `Developed Ebisx, a point-of-sale (POS) application built with .NET MAUI, 
    ASP.NET Core Web API, MySQL, and SQLite.`,
  };

  return (
    <main className="pt-20 text-white bg-[rgb(4,8,26)] relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Left column: Skills */}
          <div className=" lg:col-span-2 flex flex-col h-full  ">
            <h2 className="text-3xl font-bold mb-6">Current Technologies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 flex-1">
              {skillCategories.flatMap((category) =>
                category.skills.map((skill, index) => (
                  <div
                    key={skill.name + index}
                    className="flex items-center gap-2 bg-gray-900/80 border border-gray-700 
                            rounded-lg px-3 py-2 hover:bg-gray-800 transition-all 
                            hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    {skill.icon}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right column: Experience */}
          <div className="flex flex-col  ">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <ExperienceCard {...experience} />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsAndExperienceSection;
