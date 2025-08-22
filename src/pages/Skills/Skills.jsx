import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Layers, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaGithub,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaCss3,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import {
  SiDotnet,
  SiVercel,
  SiFlask,
  SiSqlite,
  SiPostman
} from "react-icons/si";
import { TbBrandVscode, TbBrandCSharp, TbBrandMysql } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
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

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-blue-400",
      skills: [
        { name: "C#", icon: <TbBrandCSharp className="w-4 h-4 text-[#8b449c]" /> },
        {
          name: "Python",
          icon: <FaPython className="w-4 h- text-[#3776AB]" />,
        },
        {
          name: "HTML",
          icon: <FaHtml5 className="w-4 h- text-orange-500" />,
        },
        {
          name: "CSS",
          icon: <FaCss3 className="w-4 h- text-[#3776AB]" />,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="w-4 h- text-yellow-400" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-green-400",
      skills: [
        {
          name: "MySQL",
          icon: <TbBrandMysql className="w-4 h-4 text-[#1a6997]" />,
        },
        {
          name: "SQL Server",
          icon: <DiMsqlServer  className="w-4 h-4 text-[#F24E1E]" />,
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
        {
          name: "Responsive Design",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Wireframing",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" />,
        },
        {
          name: "Prototyping",
          icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" />,
        },
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
        { name: "GitHub", icon: <FaGithub className="w-4 h-4 text-[#fdfdfd]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
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
        // Frameworks
        {
          name: ".NET",
          icon: <SiDotnet  className="w-4 h-4 text-[#512BD4]" />,
        },
        {
          name: ".NET MAUI",
          icon: <SiDotnet  className="w-4 h-4 text-[#512BD4]" />, // no dedicated MAUI icon
        },
        {
          name: "ASP.NET Web API",
          icon: <SiDotnet  className="w-4 h-4 text-[#512BD4]" />, // reuse .NET icon
        },
        {
          name: "Flask",
          icon: <SiFlask className="w-4 h-4 text-white" />,
        },

        // Libraries
        {
          name: "Entity Framework Core",
          icon: <TbBrandCSharp className="w-4 h-4 text-[#239120]" />, // EFCore doesn’t have its own icon
        },
        {
          name: "FluentValidation",
          icon: <TbBrandCSharp className="w-4 h-4 text-[#178600]" />, // placeholder
        },
        {
          name: "AutoMapper",
          icon: <TbBrandCSharp className="w-4 h-4 text-[#178600]" />, // placeholder
        },
        {
          name: "Bogus Faker",
          icon: <TbBrandCSharp className="w-4 h-4 text-[#239120]" />, // placeholder
        },
      ],
    },

    
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10 min-h-screen flex items-center">
        <div className="mx-auto px-4 py-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
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

export default SkillsSection;
