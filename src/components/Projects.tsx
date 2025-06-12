import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const [visiblePopup, setVisiblePopup] = useState<string | null>(null);

  const projects = [
    {
      title: 'Online Voting System',
      description:
        'A web-based application built using Spring Boot, JSP, and HTML to enable secure and streamlined digital voting. Features separate modules for Admin, Candidates, and Voters with secure authentication.',
      image:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
      technologies: ['Spring Boot', 'JSP', 'HTML', 'MySQL'],
      github: '#',
    },
    {
      title: 'Arlington Organic Market Web Interface',
      description:
        'A Flask and MySQL-based web application to manage inventory, pricing, vendors, and sales analytics across multiple store locations with real-time feedback through interactive HTML templates.',
      image:
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=250&fit=crop',
      technologies: ['Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      github: '#',
    },
    {
      title: 'Sales Analytics Dashboard',
      description:
        'Developed analytics dashboard using SQL views to report top-selling items, loyal customers, and overall revenue performance with interactive data visualization.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      technologies: ['SQL', 'Data Analytics', 'Dashboard', 'MySQL'],
      github: '#',
    },
  ];

  const handleClick = (e: React.MouseEvent, title: string, url: string) => {
    if (!url || url === '#') {
      e.preventDefault();
      setVisiblePopup(title);

      setTimeout(() => {
        setVisiblePopup(null);
      }, 3000);
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in full-stack development and data management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-scale group relative">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay Message */}
                {visiblePopup === project.title && (
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
                    <div className="text-white text-sm bg-white bg-opacity-90 text-black px-4 py-2 rounded shadow-xl max-w-xs text-center">
                      Code for "{project.title}" is not yet pushed to GitHub.
                    </div>
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" onClick={(e) => handleClick(e, project.title, project.github)}>
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
