import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.15, // Increased from 0.1 for more responsiveness
        duration: 1.2, // Decreased from 1.5 for faster response
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5, // Slightly reduced to prevent over-scrolling
        infinite: false,
      }}

    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
