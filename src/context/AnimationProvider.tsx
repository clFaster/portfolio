import { ReactNode, useState } from "react";
import { AnimationContext, Direction } from "./AnimationContext";

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [direction, setDirection] = useState<Direction>(null);

  const handleSetDirection = (newDirection: Direction) => {
    setDirection(newDirection);
  };

  return (
    <AnimationContext.Provider
      value={{ direction, setDirection: handleSetDirection }}
    >
      {children}
    </AnimationContext.Provider>
  );
};
