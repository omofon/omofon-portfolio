import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'FlowStudio',
      description: 'A digital creative agency website that blends design, storytelling and technology to craft interactive experiences for brands. Built with HTML5, CSS3, and modern design principles.',
      image: 'https://images.unsplash.com/photo-1609203673123-56fff9f4ceff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbGFuZGluZyUyMHBhZ2V8ZW58MXx8fHwxNzY4MTk2NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      liveUrl: 'https://flowstudio-demo.com',
      githubUrl: 'https://github.com/omofon/flowstudio'
    },
    {
      title: 'StreamMind AI',
      description: 'A full-stack conversational AI application powered by OpenAI and LangChain. Features real-time chat, secure authentication, and scalable backend with FastAPI and PostgreSQL.',
      image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjgxNTA0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      liveUrl: 'https://streammind-demo.com',
      githubUrl: 'https://github.com/omofon/streammind-ai'
    },
    {
      title: 'AI-Assisted CGPA Calculator',
      description: 'Machine Learning web app that helps students forecast their final CGPA. Improved accuracy of academic predictions by up to 18% using Python and scikit-learn models.',
      image: 'https://images.unsplash.com/photo-1753998943413-8cba1b923c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yJTIwc2NyZWVufGVufDF8fHx8MTc2ODE0NDYwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      liveUrl: 'https://cgpa-calculator-demo.com',
      githubUrl: 'https://github.com/omofon/cgpa-calculator'
    },
    {
      title: 'Weather Forecast App',
      description: 'Python-based weather forecasting application using GeoPy and public weather APIs. Provides real-time weather data with reliable forecasting for multiple locations.',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4MTk2NjMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      liveUrl: 'https://weather-forecast-demo.com',
      githubUrl: 'https://github.com/omofon/weather-forecast'
    }
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
