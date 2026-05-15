import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Highlight nav link based on scroll position
  useEffect(() => {
    const sections = links.map(({ label, href }) => ({
      label,
      el: document.querySelector(href),
    }));

    const onScroll = () => {
      // Shrink navbar on scroll
      setScrolled(window.scrollY > 40);

      // Active section tracking
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const { label, el } = sections[i];
        if (el && el.offsetTop <= scrollY) {
          setActive(label);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto"
      >
        <motion.div
          animate={{
            paddingTop: scrolled ? "12px" : "16px",
            paddingBottom: scrolled ? "12px" : "16px",
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between gap-6 md:gap-10 px-5 md:px-10 rounded-full border border-white/10 bg-black/50 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.4)]"
        >
          {/* Logo */}
          <h1 className="text-2xl font-black tracking-wide bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent select-none">
            Bharat.
          </h1>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8 text-base text-zinc-400">
            {links.map(({ label, href }) => (
              <li key={label} className="relative">
                <a
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className={`transition duration-300 hover:text-white ${
                    active === label ? "text-white" : ""
                  }`}
                >
                  {label}
                </a>
                {active === label && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:block relative overflow-hidden px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-shadow duration-300"
            >
              Hire Me
            </motion.button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-[1.5px] bg-white origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-6 h-[1.5px] bg-white"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-[1.5px] bg-white origin-center"
              />
            </button>
          </div>
        </motion.div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl overflow-hidden"
            >
              <ul className="flex flex-col py-4">
                {links.map(({ label, href }, index) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.3 }}
                  >
                    <a
                      href={href}
                      onClick={(e) => handleClick(e, href)}
                      className={`flex items-center justify-between px-6 py-3 text-base transition duration-200 hover:bg-white/5 ${
                        active === label
                          ? "text-white font-semibold"
                          : "text-zinc-400"
                      }`}
                    >
                      {label}
                      {active === label && (
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Hire Me in mobile menu */}
              <div className="px-4 pb-4">
                <button className="w-full py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500">
                  Hire Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;