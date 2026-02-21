import { createContext } from "react";

export type Direction = "left" | "right" | null;

export interface AnimationContextType {
  direction: Direction;
  setDirection: (direction: Direction) => void;
}

export const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined,
);
