import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Server, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Language",
    icon: Code2,
    skills: ["Java"],
  },
  {
    title: "Frameworks & Architecture",
    icon: Server,
    skills: ["Spring Boot", "Spring Data JPA", "Microservices Architecture", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Maven"],
  },
];

const SkillsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-sm">Technologies I work with</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 hover-glow group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <group.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
