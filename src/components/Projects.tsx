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
import Tilt from 'react-parallax-tilt';

const Projects = () => {
  const [visiblePopup, setVisiblePopup] = useState<string | null>(null);

  const projects = [
    {
      title: 'Enterprise Full Stack Development',
      description:
        'Built scalable microservices using Java, Spring Boot, React, and Angular. Integrated AWS S3 uploads, Kafka streams, Docker containers, and REST APIs for high-performance enterprise systems.',
      technologies: [
        'Java',
        'Spring Boot',
        'React',
        'AWS S3',
        'Kafka',
        'Docker',
        'OAuth2'
      ],
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/web-development.webp?alt=media&token=347fc294-8bd1-4682-b7f6-4ca536f05def',

      github: '#',
    },
    {
      title: 'Validation & ETL Dashboard',
      description:
        'Developed .NET-based ETL tool for JSON to SQL migration. Integrated Angular 5 front end, Kafka messaging, Spark analytics, and PCF deployments for real-time vehicle data validation.',
      technologies: [
        '.NET',
        'Angular',
        'Kafka',
        'Spark',
        'Hive',
        'PCF',
        'SQL Server'
      ],
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/etl.jpg?alt=media&token=dd9bd111-3ba0-4f51-aad9-c9bb2c1f05a8',
 
      github: '#',
    },
    {
      title: 'PCF-Based Reporting System',
      description:
        'Created reporting app using Jasper, Spring Boot, and Angular 8. Streamlined backend processing via Kafka, Docker, and Groovy scripts. Used React for reusable UI and deployed to OpenShift.',
      technologies: [
        'Spring Boot',
        'Kafka',
        'Jasper',
        'React',
        'OpenShift',
        'Groovy',
        'PCF'
      ],
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/bofa.png?alt=media&token=63881dbf-5b90-4bf7-b3da-e3aa8216a4fa',
      github: '#',
    },
    {
      title: 'AWS-Powered Data Ingestion Engine',
      description:
        'Designed Spark + Kafka pipelines to process log streams and load Cassandra clusters. Leveraged AWS (EC2, S3, RDS) with Kubernetes and Docker to deploy real-time ingestion platform.',
      technologies: [
        'Spark',
        'Kafka',
        'Cassandra',
        'AWS EC2',
        'Docker',
        'Kubernetes',
        'Java'
      ],
      image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/aws.png?alt=media&token=58a4a621-d686-43a1-8950-948dc5f1c353',
      github: '#',
    },
  ];

  const handleClick = (e: React.MouseEvent, title: string, url: string) => {
    if (!url || url === '#') {
      e.preventDefault();
      setVisiblePopup(title);
      setTimeout(() => setVisiblePopup(null), 3000);
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-sky-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of impactful engineering projects that demonstrate my capabilities in full-stack development, cloud systems, and data streaming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              scale={1.02}
              transitionSpeed={1500}
              glareEnable={false}
              className="rounded-3xl"
              key={index}
            >
              <Card className="group relative bg-white/90 backdrop-blur-md border border-gray-200 hover:border-primary shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl">
                <div className="relative h-44 overflow-hidden rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {visiblePopup === project.title && (
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
                      <div className="text-white text-sm bg-white bg-opacity-90 text-black px-4 py-2 rounded shadow-xl max-w-xs text-center">
                        Code for "{project.title}" is not yet pushed to GitHub.
                      </div>
                    </div>
                  )}
                </div>

                <CardHeader className="px-6 pt-4">
                  <CardTitle className="text-xl font-semibold text-primary mb-1">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2 mb-4 animate-fade-in">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-tr from-primary/10 to-white text-primary text-xs rounded-full border border-primary/20 hover:scale-105 transition-transform shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => handleClick(e, project.title, project.github)}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
