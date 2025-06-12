
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
<div className="relative w-fit mx-auto mt-6">
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-green-300 blur-2xl opacity-30"></div>
  <img
    src="https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/img1.jpeg?alt=media&token=179bae9d-ca56-4992-abe0-18099e4ea54f"
    alt="Profile"
    className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
  />
</div>


          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in gradient-text">
            Bhavya Sai Sree
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in">
            Full Stack Developer & Software Engineer
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Master's in Computer Science from UT Arlington. Experienced in full-stack development,
            cloud technologies, and building scalable web applications with modern frameworks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://firebasestorage.googleapis.com/v0/b/portfolio-84f15.firebasestorage.app/o/bhavya_resume.pdf?alt=media&token=9c677669-4e42-47c0-ba04-df5a65034570"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="hover-scale bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </a>

            {/* <Button variant="outline" size="lg" className="hover-scale glass-effect">
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button> */}
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/bhavya394" className="text-muted-foreground hover:text-primary transition-all duration-300 hover-scale hover:drop-shadow-lg">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/bhavya-sai-sree-yatham-0323871b8/" className="text-muted-foreground hover:text-primary transition-all duration-300 hover-scale hover:drop-shadow-lg">
              <Linkedin size={28} />
            </a>
            <a href="mailto:ybhavyasaisree@gmail.com" className="text-muted-foreground hover:text-primary transition-all duration-300 hover-scale hover:drop-shadow-lg">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
