import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "shreshtabhatnagar@gmail.com",
    href: "mailto:shreshtabhatnagar@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "GitHub",
    href: "https://github.com/shreshtabhatnagar-max",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/shrestha008/",
    icon: Linkedin,
  },
];

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-sm">
            Let's connect and build something great
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 text-center hover-glow group flex flex-col items-center gap-3"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <c.icon size={24} />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{c.label}</h3>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors break-all">
                  {c.value}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
