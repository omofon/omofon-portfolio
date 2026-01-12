import { Monitor, Smartphone, Layout } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'UI/UX Design',
      description: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit. Maxime hipsum prosequatur expedita lorem commodi ullam maiores.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit. Maxime hipsum prosequatur expedita lorem commodi ullam maiores.'
    },
    {
      icon: Layout,
      title: 'Web Apps',
      description: 'Lorem ipsum, dolor sit amet consectetur adipiscing elit. Maxime hipsum prosequatur expedita lorem commodi ullam maiores.'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What I do ?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
