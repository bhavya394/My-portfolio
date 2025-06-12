import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-slate-50 to-blue-50 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, experience, and what drives me as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="relative flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop"
              alt="Developer workspace"
              className="rounded-xl shadow-2xl w-full h-[500px] object-cover hover-scale glow"
            />
            <div className="absolute -bottom-10 right-0 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          </div>

          {/* Right: Education + Experience + Certifications */}
          <div className="flex flex-col space-y-10">
            {/* 🎓 Education */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-100 to-white backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-700">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-l-4 border-blue-300 pl-6 space-y-4">
                  <div>
                    <h4 className="text-blue-700 font-semibold">University of Texas at Arlington</h4>
                    <p className="text-sm text-slate-700">
                      Master of Science in Computer Science (May 2025)  
                      <br />GPA: 3.91 / 4.0
                    </p>
                  </div>
                  <div>
                    <h4 className="text-blue-700 font-semibold">Koneru Lakshmaiah Education Foundation</h4>
                    <p className="text-sm text-slate-700">
                      Bachelor of Technology in Computer Science (Apr 2023)  
                      <br />GPA: 9.4 / 10.0
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 💼 Experience */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-100 to-white backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-green-700">
                  <Briefcase className="w-6 h-6 text-green-600" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-5 shadow-md border border-green-200 hover:shadow-lg transition duration-300">
                    <h4 className="text-green-700 font-semibold">Spark Foundation</h4>
                    <p className="text-sm text-slate-700">
                      Full Stack Developer Intern – Spring Boot, Java, REST APIs, DB optimization.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-md border border-green-200 hover:shadow-lg transition duration-300">
                    <h4 className="text-green-700 font-semibold">AWS Virtual Internship</h4>
                    <p className="text-sm text-slate-700">
                      Built serverless apps using EC2, Lambda, S3, and DynamoDB.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 🏅 Certifications */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-100 via-white to-pink-100 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-700">
                  <Award className="w-6 h-6 text-purple-600" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Oracle Java SE 8', desc: 'Associate Certified Programmer' },
                    { title: 'Wipro TalentNext', desc: 'Java Full Stack Developer' },
                    { title: 'Automation Anywhere', desc: 'Advanced Bot Developer' },
                    { title: 'Microsoft AZ-400', desc: 'DevOps Engineer Expert' }
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-sm border border-purple-200 transition transform duration-300 hover:shadow-md hover:scale-[1.02]"
                    >
                      <h4 className="text-purple-700 font-semibold">{cert.title}</h4>
                      <p className="text-sm text-slate-700">{cert.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
