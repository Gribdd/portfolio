import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";

const projects = [
  {
    title: "EBISX POS System",
    description:
      "A point-of-sale system designed and implemented during my internship at Arsene Software Solutions. Features include sales processing, inventory tracking, employee time tracking, and receipt generation with offline-online support.",
    color: "#4a90e2",
    githubLink: "https://github.com/Gribdd/Ebisx.POS.Api", // add your actual repo link if available
    techStack: ["C#", "MySQL", "SQLite", "Docker"],
    frameworks: [".NET MAUI", "ASP.NET Web API"],
  },
  {
    title: "Vision-based Intelligent Fish Analysis",
    description:
      "YOLOv8-based research project for assessing fish freshness using eye and gill analysis. Built a Python Flask web application for displaying freshness results, system errors, and live monitoring.",
    color: "#50e3c2",
    githubLink: "https://github.com/seraprogrammer/fish-analysis", // replace with actual link if available
    techStack: ["Python", "YOLOv8", "OpenCV"],
    frameworks: ["Flask"],
  },
  {
    title: "WinWin Cinema API",
    description:
      "Backend API for WinWin Cinema that extended the desktop app to support SQL Server and containerized deployment with Docker. Provides booking, payment, and seat management endpoints.",
    color: "#f08a24",
    githubLink: "https://github.com/Gribdd/WinWinCinema.Api", // update if repo name differs
    techStack: ["C#", "SQL Server", "Docker"],
    frameworks: ["ASP.NET Web API"],
  },
  {
    title: "WinWin Cinema Desktop",
    description:
      "A desktop movie ticketing application with seat selection, booking, and payment functionality. Initially used JSON for offline storage.",
    color: "#800080",
    githubLink: "https://github.com/Gribdd/MovieTicketingSystem",
    techStack: ["C#", "JSON"],
    frameworks: [".NET MAUI"],
  },
  {
    title: "BeatSync",
    description:
      "A mobile music streaming app with authentication, playlist management, real-time playback, and admin features. Data stored locally using JSON.",
    color: "#ed649e",
    githubLink: "https://github.com/Gribdd/beatsync", 
    techStack: ["C#", "JSON"],
    frameworks: [".NET MAUI"],
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                techStack={project.techStack}
                frameworks={project.frameworks}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  techStack = [],
  frameworks = [],
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern card without image */}
        <div className="w-full flex flex-col bg-zinc-900 rounded-2xl overflow-hidden shadow-xl p-8 md:p-10 lg:p-12">
          {/* Project number */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-2 h-2 md:w-3 md:h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
            <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
            <span className="text-xs md:text-sm text-gray-400">
              Project {i + 1}
            </span>
          </div>

          {/* Content */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-300 mb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          {frameworks.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((fw, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="mt-auto pt-4 border-t border-gray-800">
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span
                className="text-xs md:text-sm font-medium"
                style={{ color }}
              >
                Code
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}