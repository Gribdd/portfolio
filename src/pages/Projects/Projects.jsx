import { motion } from "framer-motion";


const projects = [
  {
    title: "EBISX POS System",
    description:
      "A point-of-sale system designed and developed during my internship at Arsene Software Solutions",
    color: "#4a90e2",
    githubLink: "https://github.com/Gribdd/Ebisx.POS.Api",
    technologies: [
      "C#",
      "MySQL",
      "SQLite",
      "Docker",
      ".NET MAUI",
      "ASP.NET Web API",
    ],
  },
  {
    title: "Vision-based Intelligent Fish Analysis",
    description:
      "YOLOv8-based research project for assessing fish freshness using eye and gill analysis.",
    color: "#50e3c2",
    image: "/images/vifa.png",
    technologies: ["Python", "YOLOv8", "OpenCV", "Flask"],
  },
  {
    title: "WinWin Cinema API",
    description:
      "API for WinWin Cinema support SQL Server and containerized deployment with Docker.",
    color: "#f08a24",
    githubLink: "https://github.com/Gribdd/WinWinCinema.Api",
    technologies: [
      "C#",
      ".NET MAUI",
      "SQL Server",
      "ASP.NET Web API",
      "Docker",
    ],
  },
  {
    title: "WinWin Cinema Desktop",
    description:
      "A desktop movie ticketing application with seat selection, booking, and payment functionality. Initially used JSON for data storage.",
    color: "#800080",
    githubLink: "https://github.com/Gribdd/MovieTicketingSystem",
    image: "/images/winwin-cinema-desktop.png",
    technologies: ["C#", ".NET MAUI", "JSON"],
  },
  {
    title: "BeatSync",
    description:
      "A mobile music streaming app with authentication, playlist management, real-time playback, and admin features. Data was stored locally in JSON.",
    color: "#ed649e",
    githubLink: "https://github.com/Gribdd/MovieTicketingSystem",
    image: "/images/beatsync.png",
    technologies: ["C#", ".NET MAUI", "JSON"],
  },
];

export default function Projects() {
  return (
      <section id="projects" className="py-20 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-900 rounded-md border border-gray-700 shadow-lg overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="w-full h-40 bg-gray-800 flex items-center justify-center">
                  <img
                    src={project.image}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "";
                      e.currentTarget.className =
                        "h-full w-full bg-gray-800 flex items-center justify-center text-gray-400 text-sm";
                    }}
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm flex-1">
                    {project.description}
                  </p>

                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xs font-semibold text-gray-200 mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-md bg-gray-800 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <div className="mt-6">
                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Code
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-red-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Confidential
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>
  );
}
