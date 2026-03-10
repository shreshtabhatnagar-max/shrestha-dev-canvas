import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Layers } from "lucide-react";

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A backend application that allows users to manage and track their income and expenses efficiently through RESTful APIs. The system enables users to add, update, and delete financial transactions while maintaining accurate records of their financial data.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "REST APIs"],
    features: [
      "Add and manage transactions",
      "Track income and expenses",
      "Real-time balance calculation",
      "Simple and responsive interface",
    ],
    github: "https://github.com/shreshtabhatnagar-max/Expense",
  },
  {
    title: "E-Wallet (Microservice Based)",
    description:
      "An E-Wallet backend application that allows users to manage their digital wallet securely. The system enables users to perform financial operations such as adding money, transferring funds, and viewing transaction history through RESTful APIs.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "REST APIs"],
    features: [
      "User registration and authentication",
      "Add money to wallet",
      "Send and receive money between users",
      "Transaction history management",
      "Secure database integration",
    ],
    github: "https://github.com/shreshtabhatnagar-max/E-Wallet-Microservice-Based-",
  },
  {
    title: "Digital Library Management System",
    description:
      "A Digital Library Management backend application that allows users to manage and access library resources efficiently. The system provides RESTful APIs for managing books, users, and borrowing records.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "REST APIs"],
    features: [
      "Book management system (add, update, delete)",
      "User management for library members",
      "Borrow and return book functionality",
      "Search and retrieve book records",
      "Structured database integration",
    ],
    github: "https://github.com/shreshtabhatnagar-max/Digital_Library",
  },
];

const ProjectsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="section-padding relative bg-grid">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-sm">
            Things I've built
          </p>

          <div className="grid gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card rounded-xl p-6 md:p-8 hover-glow group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Layers size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 w-fit"
                  >
                    <ExternalLink size={14} />
                    View on GitHub
                  </a>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="text-xs text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
