import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./PageTransition";

export const RouteTransition = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition key={location.pathname}>{currentOutlet}</PageTransition>
    </AnimatePresence>
  );
};
