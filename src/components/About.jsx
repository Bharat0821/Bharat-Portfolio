import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: "2+",
    text: "Years of Learning & Development",
  },
  {
    number: "10+",
    text: "Projects Built Using React & Modern UI",
  },
  {
    number: "100%",
    text: "Focused on Clean Design & Smooth Experience",
  },
];

const useCounter = (target, duration = 2000, inView = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const numeric = parseInt(target.replace(/\D/g, ""), 10);
    const suffix = target.replace(/[0-9]/g, "");
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numeric) + suffix);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return count || "0";
};

const StatCard = ({ item, index }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const count = useCounter(item.number, 1800, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl p-8 transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/10 to-pink-500/10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-5xl md:text-6xl font-black mb-3 leading-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tabular-nums">
          {count}
        </h3>
        <p className="text-zinc-300 text-lg leading-relaxed">{item.text}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white overflow-hidden py-32 px-6 md:px-16"
    >
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-6">
            About Me
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8">
            Crafting
            <br />
            Digital
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
            I create immersive and futuristic digital experiences using React,
            GSAP, Framer Motion and modern web technologies with a focus on
            smooth interactions and premium UI design.
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {["React", "GSAP", "Framer Motion", "Tailwind", "TypeScript"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30 bg-purple-500/10 text-purple-300"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <motion.a
              href="/CV.pdf"
              download="Bharat_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_45px_rgba(168,85,247,0.6)] transition-shadow duration-300 flex items-center gap-2"
            >
              <span>Download CV</span>
              <span className="text-sm">↓</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-xl text-white hover:bg-white/[0.1] hover:border-purple-400/50 transition-all duration-300"
            >
              My Skills
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT — stat cards */}
        <div className="space-y-6">
          {stats.map((item, index) => (
            <StatCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;