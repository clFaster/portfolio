import { createContext, useState, ReactNode } from "react";

export type Direction = "left" | "right" | null;

export interface AnimationContextType {
  direction: Direction;
  setDirection: (direction: Direction) => void;
}

export const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined,
);

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
