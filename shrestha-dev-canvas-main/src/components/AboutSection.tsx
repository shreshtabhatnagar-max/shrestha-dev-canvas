import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Target, Sparkles } from "lucide-react";

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-sm">Get to know me better</p>

          <div className="glass-card rounded-2xl p-6 md:p-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-1">
                <User size={20} />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I am currently pursuing my <span className="text-foreground font-medium">Master of Computer Applications (MCA)</span> from JSS Academy of Technical Education, Noida. I completed my <span className="text-foreground font-medium">Bachelor of Computer Application</span> from IMS University Courses Campus, Ghaziabad.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-1">
                <Sparkles size={20} />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I am passionate about backend development and modern server-side technologies. I enjoy building scalable backend applications, designing RESTful APIs, solving complex programming problems, and continuously learning new technologies related to backend systems and software architecture.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-1">
                <Target size={20} />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                My goal is to become a skilled <span className="text-foreground font-medium">Java Backend Developer</span> and contribute to building efficient, secure, and scalable software solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
