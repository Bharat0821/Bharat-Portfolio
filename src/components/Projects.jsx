import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "AI Project",
    description:
      "Modern AI application with immersive animations and real-time data visualization built with React and Three.js.",
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
    description:
      "Interactive GSAP portfolio design featuring scroll-triggered animations, 3D elements and premium UI.",
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
    description:
      "Full-featured storefront with fluid page transitions, micro-interactions and a seamless checkout flow.",
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
    description:
      "Immersive WebGL landing page with custom shaders, particle systems and scroll-driven 3D camera paths.",
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
      whileTap={{ scale: 0.98 }}
      className={`group relative overflow-hidden rounded-[28px] md:rounded-[32px] border border-white/10 bg-gradient-to-br ${project.color} backdrop-blur-xl p-6 md:p-10 transition-all duration-500 cursor-pointer active:scale-[0.98] ${project.border} ${project.glow}`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

      <div
        className={`
          absolute
          top-6
          md:top-8
          right-6
          md:right-8
          text-5xl
          md:text-6xl
          font-black
          opacity-10
          group-hover:opacity-20
          transition-all
          duration-500
          ${project.accent}
          group-hover:scale-110
          group-hover:-rotate-6
        `}
      >
        {project.number}
      </div>

      <div className="flex items-start justify-between mb-6">
        <div
          className={`
            w-3
            h-3
            rounded-full
            bg-gradient-to-r
            ${project.color.replace("/20", "").replace("/10", "")}
            ring-2
            ring-white/20
            mt-1
          `}
        />

        <motion.div
          animate={{
            x: hovered ? 0 : 10,
            opacity: hovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="text-white text-lg md:text-xl"
        >
          ↗
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
        {project.title}
      </h3>

      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`
              px-3
              py-1
              rounded-full
              text-[11px]
              sm:text-xs
              font-medium
              border
              border-white/10
              bg-white/5
              ${project.accent}
            `}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        animate={{
          y: hovered ? 0 : 20,
          opacity: hovered ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-8"
      >
        <a
          href={project.link}
          className={`
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            ${project.accent}
            underline
            underline-offset-4
          `}
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
      className="
        relative
        min-h-screen
        bg-black
        text-white
        overflow-hidden
        px-4
        sm:px-6
        md:px-16
        py-20
        md:py-32
      "
    >
      {/* Background blobs */}
      <div className="absolute top-40 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-600/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-20 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-pink-600/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-purple-400 text-xs sm:text-sm mb-5 md:mb-6">
            My Work
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black leading-[0.9]">
              Featured
              <br />

              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-sm leading-relaxed">
              A selection of work I'm proud of — each built with attention
              to detail, performance and design.
            </p>
          </div>
        </motion.div>

        {/* MOBILE SLIDER + DESKTOP GRID */}
        <div
          className="
            flex
            md:grid
            md:grid-cols-2

            overflow-x-auto
            md:overflow-visible

            gap-5
            md:gap-6

            snap-x
            snap-mandatory

            pb-4

            scrollbar-hide
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="
                min-w-[88%]
                sm:min-w-[70%]
                md:min-w-0

                snap-center
              "
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <ProjectCard
                project={project}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="flex justify-center mt-14 md:mt-16"
        >
          <motion.a
            href="https://github.com/Bharat0821"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              px-7
              sm:px-10
              py-3.5
              sm:py-4
              rounded-full
              border
              border-white/20
              bg-white/[0.05]
              backdrop-blur-xl
              text-white
              hover:bg-white/[0.1]
              hover:border-purple-400/50
              transition-all
              duration-300
              font-semibold
              text-sm
              sm:text-base
            "
          >
            View All on GitHub ↗
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;