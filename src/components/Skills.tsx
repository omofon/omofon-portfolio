export function Skills() {
  const skills = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Figma', icon: '🎯' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Git', icon: '📦' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'PHP', icon: '🐘' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Redux', icon: '🔄' },
    { name: 'Webpack', icon: '📦' },
    { name: 'Adonis', icon: '🎭' }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center text-4xl mb-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                {skill.icon}
              </div>
              <p className="text-sm text-center text-gray-700 dark:text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
