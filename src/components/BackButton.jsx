import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home } from "lucide-react";
import { useState } from "react";

export default function BackButton() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <motion.button
        onClick={() => navigate("/")}
        className="relative p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-xl border border-gray-200 dark:border-gray-700"
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: [0, -4, 0],
          opacity: 1,
          transition: {
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
            opacity: { duration: 0.5 },
          },
        }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 300 },
        }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Home className="w-5 h-5" />

        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute bottom-14 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs rounded bg-gray-800 text-white shadow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              Back to Home
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
