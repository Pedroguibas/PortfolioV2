import React, { createContext, useContext, useState, useEffect } from "react";

interface ScrollDirectionProviderProps {
  children: React.ReactNode;
}

type ScrollDirectionType = "up" | "down";

type ScrollDirectionContextType = {
  lastScrollPosition: number;
  currentScrollPosition: number;
  lastScrollDirection: ScrollDirectionType;
};

const ScrollDirectionContext = createContext<
  ScrollDirectionContextType | undefined
>(undefined);

export function ScrollDirectionProvider({
  children,
}: ScrollDirectionProviderProps) {
  const [lastScrollPosition, setLastScrollPosition] = useState<number>(0);
  const [currentScrollPosition, setCurrentScrollPosition] = useState<number>(
    window.scrollY
  );
  const [lastScrollDirection, setLastScrollDirection] =
    useState<ScrollDirectionType>("down");

  useEffect(() => {
    if (currentScrollPosition > lastScrollPosition)
      setLastScrollDirection("down");
    else if (currentScrollPosition < lastScrollPosition)
      setLastScrollDirection("up");

    if (Math.abs(currentScrollPosition - lastScrollPosition) > 150)
      setLastScrollPosition(currentScrollPosition);
  }, [currentScrollPosition]);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollDirectionContext.Provider
      value={{ lastScrollPosition, currentScrollPosition, lastScrollDirection }}
    >
      {children}
    </ScrollDirectionContext.Provider>
  );
}

export function useScrollDirection() {
  const ctxt = useContext(ScrollDirectionContext);
  if (!ctxt)
    throw new Error(
      "useScrollDirection must be used inside ScrollDirectionContext."
    );

  return ctxt;
}
