import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, CheckCircle2, Clock } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Application",
    institution: "IMS University Courses Campus, Ghaziabad",
    status: "Completed",
    icon: CheckCircle2,
    color: "text-primary",
  },
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "JSS Academy of Technical Education, Noida",
    status: "Currently Pursuing",
    icon: Clock,
    color: "text-accent",
  },
];

const EducationSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="education" className="section-padding relative bg-grid">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-sm">My academic journey</p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-6 top-4 w-4 h-4 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>

                  <div className="glass-card rounded-xl p-6 hover-glow transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap size={18} className="text-primary" />
                      <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{edu.institution}</p>
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10">
                      <edu.icon size={12} className={edu.color} />
                      <span className={edu.color}>{edu.status}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
