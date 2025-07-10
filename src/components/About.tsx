
import { Card } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Clean Code",
      description: "Writing maintainable, efficient code that scales"
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-400" />,
      title: "Design Focus",
      description: "Creating beautiful user experiences with attention to detail"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Performance",
      description: "Optimizing applications for speed and reliability"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Nomaan, a passionate full-stack developer with a love for creating 
              digital experiences that are both beautiful and functional. My journey in web 
              development started with curiosity and has evolved into a career focused on 
              building impactful applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in modern web technologies and enjoy the challenge of turning 
              complex problems into simple, elegant solutions. When I'm not coding, you'll 
              find me exploring new technologies, contributing to open-source projects, or 
              sharing knowledge with the developer community.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in continuous learning and staying updated with the latest trends 
              in technology to deliver cutting-edge solutions that make a real difference.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
