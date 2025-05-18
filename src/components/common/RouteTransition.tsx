import { useRef, useState, useEffect } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./PageTransition";

export const RouteTransition = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  const [displayedChildren, setDisplayedChildren] = useState(currentOutlet);

  const prevPathRef = useRef<string>(location.pathname);

  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setDisplayedChildren(currentOutlet);
    }
  }, [currentOutlet, location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition key={location.key || location.pathname}>
        {displayedChildren}
      </PageTransition>
    </AnimatePresence>
  );
};
