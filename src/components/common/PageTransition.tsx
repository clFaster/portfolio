import { ReactNode } from "react";
import { motion } from "framer-motion";
import useAnimation from "../../context/useAnimation";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const { direction } = useAnimation();
  
  const variants = {
    initial: (direction: "left" | "right" | null) => {
      return {
        x: direction === "right" ? "100%" : direction === "left" ? "-100%" : 0,
        opacity: 0,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: "left" | "right" | null) => {
      return {
        x: direction === "right" ? "-100%" : direction === "left" ? "100%" : 0,
        opacity: 0,
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      };
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={direction}
      style={{ width: "100%", height: "100%", position: "absolute" }}
    >
      {children}
    </motion.div>
  );
};
