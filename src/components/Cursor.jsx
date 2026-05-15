import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [visible]);

  return (
    <motion.div
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        x: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
        y: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
        opacity: { duration: 0.2 },
      }}
      className="fixed top-0 left-0 w-5 h-5 rounded-full bg-purple-500 pointer-events-none z-[9999] mix-blend-difference"
    />
  );
};

export default Cursor;