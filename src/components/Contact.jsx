import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = "service_vqjmmgn";
const EMAILJS_TEMPLATE_ID = "template_sajonzd";
const EMAILJS_PUBLIC_KEY  = "9PLmIkNsU0O_Ftqdq";

const socials = [
  { icon: <FaGithub />,    link: "https://github.com/",                                          label: "GitHub"    },
  { icon: <FaLinkedin />,  link: "https://linkedin.com/",                                        label: "LinkedIn"  },
  { icon: <FaInstagram />, link: "https://instagram.com/",                                       label: "Instagram" },
  { icon: <FaEnvelope />,  link: "https://mail.google.com/mail/?view=cm&to=officialbharat2108@gmail.com", label: "Email" },
];

const infoItems = [
  { label: "Based in",       value: "India"                    },
  { label: "Available for",  value: "Freelance & Internships"  },
  { label: "Response time",  value: "Within 24 hours"          },
];

const inputClass =
  "w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 outline-none focus:border-purple-500/60 focus:bg-purple-500/5 transition-all duration-300";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
      // 4 second baad reset
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black text-white overflow-hidden px-6 md:px-16 py-32"
    >
      {/* Background blobs */}
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-6">
            Contact
          </p>
          <h2 className="text-6xl md:text-8xl font-black leading-[0.9]">
            Let's Work
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-md">
              Have a project idea, collaboration, or freelance opportunity?
              Let's create something visually stunning and meaningful together.
            </p>

            {/* Info cards */}
            <div className="space-y-4 mb-12">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
                >
                  <span className="text-zinc-500 text-sm">{item.label}</span>
                  <span className="text-white font-medium text-sm">{item.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-[4px] mb-5">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon, link, label }, index) => (
                  <motion.a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl text-xl text-zinc-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-colors duration-300"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-2xl p-8 md:p-10 overflow-hidden">

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-500/10 to-transparent pointer-events-none" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative z-10 grid gap-5"
              >
                {/* EmailJS reads these by `name` attribute */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    required
                    className={inputClass}
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className={inputClass}
                />

                <textarea
                  rows={6}
                  name="message"
                  placeholder="Your Message"
                  required
                  className={`${inputClass} resize-none`}
                />

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={status === "idle" ? { scale: 1.02 } : {}}
                  whileTap={status === "idle" ? { scale: 0.98 } : {}}
                  className="group relative overflow-hidden w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center justify-center gap-2"
                      >
                        Send Message
                        <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                      </motion.span>
                    )}
                    {status === "sending" && (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
                          <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8H4z"/>
                        </svg>
                        Sending...
                      </motion.span>
                    )}
                    {status === "success" && (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center justify-center gap-2"
                      >
                        ✓ Message Sent!
                      </motion.span>
                    )}
                    {status === "error" && (
                      <motion.span
                        key="error"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center justify-center gap-2"
                      >
                        ✕ Failed — Try Again
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;