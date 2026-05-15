import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "AI Project",
    description: "Modern AI application with immersive animations and real-time data visualization built with React and Three.js.",
    tags: ["React", "Three.js", "GSAP", "AI"],
    color: "from-purple-500/20 to-violet-500/10",
    border: "hover:border-purple-500/40",
    glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
    accent: "text-purple-400",
    number: "01",
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Interactive GSAP portfolio design featuring scroll-triggered animations, 3D elements and premium UI.",
    tags: ["React", "GSAP", "Framer Motion", "Tailwind"],
    color: "from-pink-500/20 to-rose-500/10",
    border: "hover:border-pink-500/40",
    glow: "hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]",
    accent: "text-pink-400",
    number: "02",
    link: "#",
  },
  {
    id: 3,
    title: "E-Commerce UI",
    description: "Full-featured storefront with fluid page transitions, micro-interactions and a seamless checkout flow.",
    tags: ["Next.js", "Tailwind", "Stripe", "Framer"],
    color: "from-cyan-500/20 to-blue-500/10",
    border: "hover:border-cyan-500/40",
    glow: "hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]",
    accent: "text-cyan-400",
    number: "03",
    link: "#",
  },
  {
    id: 4,
    title: "3D Landing Page",
    description: "Immersive WebGL landing page with custom shaders, particle systems and scroll-driven 3D camera paths.",
    tags: ["Three.js", "WebGL", "GLSL", "GSAP"],
    color: "from-amber-500/20 to-orange-500/10",
    border: "hover:border-amber-500/40",
    glow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]",
    accent: "text-amber-400",
    number: "04",
    link: "#",
  },
];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br ${project.color} backdrop-blur-xl p-8 md:p-10 transition-all duration-500 cursor-pointer ${project.border} ${project.glow}`}
    >
      {/* Animated corner number */}
      <div className={`absolute top-8 right-8 text-6xl font-black opacity-10 group-hover:opacity-20 transition-all duration-500 ${project.accent} group-hover:scale-110 group-hover:-rotate-6`}>
        {project.number}
      </div>

      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color.replace('/20', '').replace('/10', '')} ring-2 ring-white/20 mt-1`} />

        {/* Arrow icon — appears on hover */}
        <motion.div
          animate={{ x: hovered ? 0 : 10, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white text-xl"
        >
          ↗
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-zinc-400 text-base leading-relaxed mb-8">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 ${project.accent}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom slide-up CTA */}
      <motion.div
        animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8"
      >
        <a
          href={project.link}
          className={`inline-flex items-center gap-2 text-sm font-semibold ${project.accent} underline underline-offset-4`}
        >
          View Project ↗
        </a>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white overflow-hidden px-6 md:px-16 py-32"
    >
      {/* Background blobs */}
      <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-purple-600/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-pink-600/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-6">
            My Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-6xl md:text-8xl font-black leading-[0.9]">
              Featured
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-sm leading-relaxed">
              A selection of work I'm proud of — each built with attention to detail, performance and design.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="https://github.com/Bharat0821"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-xl text-white hover:bg-white/[0.1] hover:border-purple-400/50 transition-all duration-300 font-semibold"
          >
            View All on GitHub ↗
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;