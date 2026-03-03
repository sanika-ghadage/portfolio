"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg border-b border-gray-800" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-black bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">Sanika</h1>
          <div className="hidden md:flex gap-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition font-semibold text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center justify-center text-center md:text-left relative z-10">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-orange-500 font-bold text-base uppercase tracking-widest mb-4">Welcome to my portfolio</p>
              <h1 className="text-7xl md:text-8xl font-black leading-tight mb-4">
                Hello,<br />
                I'm<br />
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">Sanika</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mt-4 mb-6">Full Stack Developer</h2>
            </div>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium shadow-lg p-4 rounded-xl bg-gray-800/60">
              MCA student crafting digital experiences. <span className="text-orange-400 font-bold">572 GfG score</span>, <span className="text-pink-400 font-bold">151+ DSA problems</span>. Passionate about <span className="text-purple-400 font-bold">AI/ML</span> and building with cutting-edge tech.
            </p>

            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              <a
                href="https://github.com/sanika-ghadage"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-orange-500/50 transition transform hover:scale-105"
              >
                View GitHub
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition"
              >
                My Work
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="absolute w-[28rem] h-[28rem] bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative w-[24rem] h-[24rem] rounded-full border-4 border-orange-500 shadow-2xl shadow-orange-500/50 overflow-hidden">
              <Image
                src="/profile.jpeg"
                alt="Profile"
                width={384}
                height={384}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            {[
              { label: "DSA Problems", value: 306, icon: "📚" },
              { label: "GitHub Repos", value: 7, icon: "⭐" },
              { label: "GfG Score", value: 572, icon: "🏆" },
            ].map((stat, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-800 group-hover:border-orange-500 transition text-center">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-5xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter target={stat.value} />
                    {stat.label.includes("Score") && "+"}
                  </div>
                  <p className="text-gray-300 font-semibold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Stats */}
          <div className="grid md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { num: "151", label: "GfG\nProblems" },
              { num: "155", label: "LeetCode\nSolved" },
              { num: "#1", label: "BCA\nInstitute Rank" },
              { num: "77%", label: "Acceptance\nRate" },
              { num: "2022-25", label: "BCA\nCompleted" },
              { num: "2025+", label: "MCA\nPursuing" },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:border-orange-500 transition">
                <div className="text-3xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">{item.num}</div>
                <p className="text-xs text-gray-400 mt-2 whitespace-pre-line">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black mb-4 text-center">About Me</h2>
          <p className="text-gray-400 text-center mb-16">My coding journey and expertise</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "💻", title: "Web Development", desc: "Full-stack development with Next.js, TypeScript, React & Supabase" },
              { icon: "🧠", title: "AI & ML", desc: "TensorFlow, OpenCV, Image Processing & Computer Vision projects" },
              { icon: "🎯", title: "Problem Solving", desc: "572 GfG score, 151+ DSA problems, strong competitive programming foundation" },
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition"></div>
                <div className="relative bg-gray-900 p-8 rounded-xl border border-gray-800 group-hover:border-orange-500 transition text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black mb-4 text-center">Technical Skills</h2>
          <p className="text-gray-400 text-center mb-16">Languages, frameworks & tools I use</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Languages", skills: ["C++", "Java", "Python", "TypeScript", "JavaScript"], color: "from-blue-500 to-blue-600" },
              { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"], color: "from-purple-500 to-pink-500" },
              { title: "Backend", skills: ["Node.js", "Supabase", "Firebase", "PostgreSQL", "REST APIs"], color: "from-green-500 to-teal-500" },
              { title: "ML & AI", skills: ["TensorFlow", "OpenCV", "Python ML", "Image Processing", "GANs"], color: "from-orange-500 to-red-500" },
            ].map((group, idx) => (
              <div key={idx} className="group">
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className={`px-3 py-1.5 bg-gradient-to-r ${group.color} rounded-full text-xs font-bold shadow-lg hover:scale-110 transition transform cursor-default`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black mb-4 text-center">Featured Projects</h2>
          <p className="text-gray-400 text-center mb-16">My best work & contributions</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🌱", title: "Plant Disease Detection", desc: "AI model using TensorFlow & OpenCV to detect plant diseases from images", tech: ["TensorFlow", "Python", "OpenCV"], link: "https://github.com/sanika-ghadage/plant-disease-detection" },
              { icon: "🎵", title: "Beatzy Music Streamer", desc: "Full-stack music platform with real-time playback and playlist management", tech: ["Next.js", "Supabase", "TypeScript"], link: "https://github.com/sanika-ghadage/beatzy" },
              { icon: "🎓", title: "Smart AI Classroom", desc: "Intelligent classroom automation using AI for enhanced learning experience", tech: ["Python", "AI/ML", "Computer Vision"], link: "https://github.com/sanika-ghadage/ai-smart-classroom" },
              { icon: "🍕", title: "Food Website", desc: "Responsive restaurant website with modern UI/UX design and interactions", tech: ["HTML5", "CSS3", "JavaScript"], link: "https://github.com/sanika-ghadage/food-website" },
              { icon: "✅", title: "Todo App", desc: "Task management application with local storage and smooth interactions", tech: ["JavaScript", "DOM", "LocalStorage"], link: "https://github.com/sanika-ghadage/Todo-App" },
              { icon: "🎮", title: "Bird Game", desc: "Interactive game with collision detection and dynamic game mechanics", tech: ["Go", "Game Dev"], link: "https://github.com/sanika-ghadage/Bird-Shooting-Game" },
            ].map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-xl p-8 group-hover:border-orange-500 transition h-full flex flex-col">
                  <div className="text-6xl mb-4">{project.icon}</div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{project.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs bg-gray-800 px-2 py-1 rounded text-orange-400">{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-black mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm open to collaborations, hackathons, and opportunities to build amazing things together!
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <a
              href="https://github.com/sanika-ghadage"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition transform hover:scale-105"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sanika-ghadage/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-xl hover:bg-orange-500 hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sanikaghadage55@gmail.com"
              className="px-8 py-4 border-2 border-pink-500 text-pink-500 font-bold rounded-xl hover:bg-pink-500 hover:text-white transition"
            >
              Email
            </a>
          </div>

          <p className="text-gray-400">
            📧 sanikaghadage55@gmail.com | 📍 Mumbai, India
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6 text-center text-gray-500 text-sm">
        <p>Designed & Built with Next.js & Tailwind CSS | © 2026 Sanika Ghadage</p>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
