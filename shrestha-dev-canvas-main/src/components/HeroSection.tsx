import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2 } from "lucide-react";

const titles = [
  "MCA Student",
  "Java Backend Developer",
  "Spring Boot Enthusiast",
  "API Designer",
];

const HeroSection = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIdx];
    const timeout = deleting ? 40 : 80;

    if (!deleting && charIdx === current.length) {
      setTimeout(() => setDeleting(true), 1800);
      return;
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setTitleIdx((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIdx((prev) => prev + (deleting ? -1 : 1));
    }, timeout);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, titleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding bg-grid overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-6 text-xs font-medium text-muted-foreground">
            <Code2 size={14} className="text-primary" />
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Hi, I'm{" "}
            <span className="gradient-text">Shrestha Bhatnagar</span>
          </h1>

          <div className="h-10 mb-6 flex items-center justify-center">
            <span className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground">
              {titles[titleIdx].slice(0, charIdx)}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10">
            I am a passionate <span className="text-foreground font-medium">Java Backend Developer</span> interested in backend development and software engineering. I enjoy building scalable server-side applications using{" "}
            <span className="text-foreground font-medium">Java, Spring Boot, REST APIs, and MySQL</span>. I focus on designing efficient backend systems, developing microservices, and continuously improving my knowledge of modern backend technologies and system design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 glow-primary"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm glass-card text-foreground hover-glow"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
