
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "C", "C++", "SQL", "JSP", "Servlets", "HTML", "CSS", "JavaScript"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Server,
      title: "Frameworks & Technologies",
      skills: ["Spring Boot", "Spring Core", "Spring MVC", "Spring ORM", "Hibernate", "JDBC"],
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: Database,
      title: "Databases & Cloud",
      skills: ["MySQL", "Git", "Google Colab", "AWS (EC2, RDS)", "RESTful Web Services"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["RESTful APIs", "Web Data Management", "Software Engineering", "Database Systems"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Smartphone,
      title: "Development Tools",
      skills: ["RPA (Automation Anywhere)", "Flask", "Data Mining", "Object-Oriented Programming"],
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      icon: Zap,
      title: "Soft Skills & Activities",
      skills: ["Team Collaboration", "Technical Writing", "Event Planning", "Data Analysis", "REST APIs", "Linear Programming"],
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 gradient-text">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I work with a diverse set of technologies and tools to build modern, scalable applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-scale glass-effect border-0 shadow-xl group">
              <CardHeader className="text-center">
                <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${category.gradient} rounded-full w-fit shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <category.icon size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-center py-2 px-3 bg-white/70 backdrop-blur-sm rounded-md text-sm text-foreground border border-white/20 hover:border-primary/50 transition-all duration-300 hover:shadow-md hover-scale"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
