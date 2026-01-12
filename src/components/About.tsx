import { Card, CardContent } from "./ui/card";
import { Code, Palette, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Clean Code",
      description: "I write maintainable, scalable code following best practices and industry standards."
    },
    {
      icon: <Palette className="h-6 w-6 text-primary" />,
      title: "Design Focus",
      description: "I bridge the gap between design and development, ensuring pixel-perfect implementations."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Performance",
      description: "I optimize applications for speed and efficiency, creating smooth user experiences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate frontend developer with 5+ years of experience creating digital experiences 
              that users love. My journey started with a curiosity for how websites work, and it's evolved 
              into a career of turning ideas into reality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8 border">
            <h3 className="text-2xl mb-6">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey into web development began during college when I built my first website 
                for a local nonprofit. The excitement of seeing my code come to life in the browser 
                was addictive, and I knew I had found my calling.
              </p>
              <p>
                Over the years, I've worked with startups and established companies, helping them 
                build everything from landing pages to complex web applications. I'm constantly 
                learning new technologies and staying up-to-date with the latest trends in web development.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, 
                writing technical blog posts, or exploring the great outdoors with my camera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}