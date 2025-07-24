import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { Parallax } from 'react-scroll-parallax';

const experiences = [
  {
    company: 'Synchrony',
    location: 'Dallas, TX, USA',
    role: 'Java Full Stack Developer',
    period: 'Feb 2025 – Present',
    description: [
      'Built and deployed full-stack applications using Java, Spring Boot, React, and Angular across multiple domains.',
      'Integrated Kafka, Spark, and Docker in microservices for real-time processing and scalability.',
      'Handled DevOps workflows using Jenkins, GitHub, EC2, and PCF for CI/CD pipelines.',
      'Used AWS S3, Lambda, and EC2 for scalable backend architecture with secure file uploads and compute.',
      'Developed features with REST APIs, Hibernate ORM, and NoSQL/SQL databases including Oracle and MongoDB.',
    ],
  },
  {
    company: 'General Motors',
    location: 'Austin, TX, USA',
    role: 'Java Full Stack Developer',
    period: 'Jul 2024 – Jan 2025',
    description: [
      'Built and deployed full-stack applications using Java, Spring Boot, React, and Angular across multiple domains.',
      'Integrated Kafka, Spark, and Docker in microservices for real-time processing and scalability.',
      'Handled DevOps workflows using Jenkins, GitHub, EC2, and PCF for CI/CD pipelines.',
      'Used AWS S3, Lambda, and EC2 for scalable backend architecture with secure file uploads and compute.',
      'Developed features with REST APIs, Hibernate ORM, and NoSQL/SQL databases including Oracle and MongoDB.',
    ],
  },
  {
    company: 'Bank of America',
    location: 'Hyderabad, India',
    role: 'Java Full Stack Developer',
    period: 'Mar 2022 – Jul 2023',
    description: [
      'Built and deployed full-stack applications using Java, Spring Boot, React, and Angular across multiple domains.',
      'Integrated Kafka, Spark, and Docker in microservices for real-time processing and scalability.',
      'Handled DevOps workflows using Jenkins, GitHub, EC2, and PCF for CI/CD pipelines.',
      'Used AWS S3, Lambda, and EC2 for scalable backend architecture with secure file uploads and compute.',
      'Developed features with REST APIs, Hibernate ORM, and NoSQL/SQL databases including Oracle and MongoDB.',
    ],
  },
  {
    company: 'Qualcomm',
    location: 'Hyderabad, India',
    role: 'Java Developer',
    period: 'Mar 2021 – Feb 2022',
    description: [
      'Built and deployed full-stack applications using Java, Spring Boot, React, and Angular across multiple domains.',
      'Integrated Kafka, Spark, and Docker in microservices for real-time processing and scalability.',
      'Handled DevOps workflows using Jenkins, GitHub, EC2, and PCF for CI/CD pipelines.',
      'Used AWS S3, Lambda, and EC2 for scalable backend architecture with secure file uploads and compute.',
      'Developed features with REST APIs, Hibernate ORM, and NoSQL/SQL databases including Oracle and MongoDB.',
    ],
  },
];

const education = [
  {
    institution: 'University of Texas at Arlington',
    degree: 'Master of Science in Computer Science',
    graduation: 'May 2025',
    gpa: '3.91 / 4.0',
  },
  {
    institution: 'Koneru Lakshmaiah Education Foundation',
    degree: 'Bachelor of Technology in Computer Science',
    graduation: 'Apr 2022',
    gpa: '9.4 / 10.0',
  },
];

const certifications = [
  { title: 'Oracle Java SE 8', desc: 'Associate Certified Programmer' },
  { title: 'Wipro TalentNext', desc: 'Java Full Stack Developer' },
  { title: 'Automation Anywhere', desc: 'Advanced Bot Developer' },
  { title: 'Microsoft AZ-400', desc: 'DevOps Engineer Expert' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const glassCard = `
  relative overflow-hidden rounded-3xl border border-white/30 bg-white/10 
  backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] 
  transition-transform duration-700 transform hover:-translate-y-2 
  hover:scale-[1.04] hover:shadow-purple-200/40 group
`;

const GlowBorder = () => (
  <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-purple-400 transition-all duration-700"></div>
);

const sectionHeading = (Icon, title, color) => (
  <motion.div className="flex items-center gap-4" variants={fadeInUp}>
    <Icon className={`text-${color}-600 w-9 h-9 drop-shadow-md animate-pulse`} />
    <h3 className={`text-5xl font-extrabold text-${color}-700 tracking-tight`}>{title}</h3>
  </motion.div>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e1efff] via-[#fbfdff] to-[#d8f5ff] px-6 py-32">
      <section className="max-w-7xl mx-auto space-y-40">

<motion.div
  className="text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <h2 className="text-5xl font-bold text-purple-700 mb-6">About Me</h2>
  <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
    I’m a passionate full stack developer driven by building scalable systems and immersive user experiences.
  </p>
</motion.div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-20"
        >
          {sectionHeading(Briefcase, 'Experience', 'green')}
          <div className="grid md:grid-cols-2 gap-14">
            {experiences.map((exp, idx) => (
              <motion.div key={idx} variants={fadeInUp} className={glassCard}>
                
                <div className="p-8 relative z-10">
                  <h4 className="text-2xl font-extrabold text-green-700">{exp.company}</h4>
                  <p className="text-sm italic text-gray-500">{exp.location}</p>
                  <p className="text-base text-gray-700 font-semibold mt-1">{exp.role} | {exp.period}</p>
                  <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-gray-700">
                    {exp.description.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-20"
        >
          {sectionHeading(GraduationCap, 'Education', 'blue')}
          <div className="grid md:grid-cols-2 gap-14">
            {education.map((edu, idx) => (
              <motion.div key={idx} variants={fadeInUp} className={glassCard}>
                <GlowBorder />
                <div className="p-8 relative z-10">
                  <h4 className="text-xl font-bold text-blue-800">{edu.institution}</h4>
                  <p className="text-base text-gray-700">{edu.degree} ({edu.graduation})</p>
                  <p className="text-sm text-gray-600 mt-1">GPA: {edu.gpa}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-20"
        >
          {sectionHeading(Award, 'Certifications', 'purple')}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            {certifications.map((cert, idx) => (
              <motion.div key={idx} variants={fadeInUp} className={glassCard}>
                <GlowBorder />
                <div className="p-6 relative z-10">
                  <h4 className="text-lg font-semibold text-purple-800">{cert.title}</h4>
                  <p className="text-sm text-gray-700 mt-2">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </section>
    </main>
  );
}
