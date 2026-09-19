import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
  perspective?: number;
  scaleOnHover?: number;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 14,
  glare = true,
  perspective = 1000,
  scaleOnHover = 1.02,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Normalized mouse coordinates from -0.5 to 0.5
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for buttery-smooth response
  const springConfig = { damping: 20, stiffness: 260, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Rotate axes (moving mouse left tilts card to the left, so rotateY is positive)
  const rotateX = useTransform(springY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Glare lighting position
  const glareX = useTransform(springX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(springY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Center-offset normalized (-0.5 to 0.5)
    const normX = mouseX / width - 0.5;
    const normY = mouseY / height - 0.5;

    x.set(normX);
    y.set(normY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className={`relative ${className}`}
      onClick={onClick}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: scaleOnHover }}
        transition={{ duration: 0.2 }}
        className="w-full h-full relative"
      >
        {children}

        {/* Dynamic Specular Light Flare Overlay */}
        {glare && isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden z-20"
            style={{
              background: `radial-gradient(circle 320px at ${glareX.get()} ${glareY.get()}, rgba(255, 255, 255, 0.22), transparent 70%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};
