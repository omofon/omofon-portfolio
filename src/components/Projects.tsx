import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "FlowStudio",
      description:
        "A digital creative agency website that blends design, storytelling and technology to craft interactive experiences for brands. Built with HTML5, CSS3, and modern design principles.",
      image:
        "https://raw.githubusercontent.com/omofon/FlowStudio/main/assets/images/flowstudio.png",
      liveUrl: "https://flow-studio-phi.vercel.app/",
      githubUrl: "https://github.com/omofon/FlowStudio",
    },
    {
      title: "Splitter",
      description:
        "A lightweight, responsive tip calculator that focuses on clarity, usability, and performance. Built with vanilla JavaScript and Tailwind CSS v4, it enables users to quickly calculate tips and split bills through a polished UI that works seamlessly across desktop and mobile devices.",
      image:
        "https://raw.githubusercontent.com/omofon/Splitter/main/design/screenshot.png",
      liveUrl: "https://splitter-wheat.vercel.app/",
      githubUrl: "https://github.com/omofon/Splitter",
    },
    {
      title: "Figur",
      description:
        "A modern, conversion-optimized landing page built with React that introduces Figur's all-in-one financial management platform. The page features a clean, professional design emphasizing accessibility and seamless user experience.",
      image:
        "https://raw.githubusercontent.com/omofon/figur/main/src/images/screenshot.png",
      liveUrl: "https://figur-omega.vercel.app/",
      githubUrl: "https://github.com/omofon/figur",
    },
    {
      title: "Time-tracking Dashboard",
      description:
        "A responsive time tracking dashboard built with vanilla JavaScript and Tailwind CSS v4. Users can view their activity hours across daily, weekly, and monthly timeframes.",
      image:
        "https://raw.githubusercontent.com/omofon/Frontend-Mentor-Challenges/main/time-tracking-dashboard-main/design/desktop-design.jpg",
      liveUrl: "https://time-dashboard-weld.vercel.app/",
      githubUrl:
        "https://github.com/omofon/Frontend-Mentor-Challenges/tree/main/time-tracking-dashboard-main",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-foreground px-4 py-2 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
