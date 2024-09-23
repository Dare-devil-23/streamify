'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type AgeGroupData = {
  ageRange: string;
  percentage: number;
  index: number;
  color: string;
};

const data: AgeGroupData[] = [
  { ageRange: '18-30 years', percentage: 46, index: 1, color: '#B88AF790' },
  { ageRange: '30-45 years', percentage: 32, index: 2, color: '#F7E18A90' },
  { ageRange: '45-60 years', percentage: 18, index: 3, color: '#82CA9D90' },
  { ageRange: '60+ years', percentage: 4, index: 4, color: '#F7B18A90' },
];

const getCircleSize = (percentage: number) => {
  if (percentage > 40) return 200;
  if (percentage > 30) return 160;
  if (percentage > 10) return 140;
  return 90;
};

const getFontSize = (percentage: number) => {
  if (percentage > 90) return 40;
  if (percentage > 70) return 34;
  if (percentage > 50) return 28;
  if (percentage > 30) return 24;
  if (percentage > 10) return 20;
  return 16;
};

// Positions in relative percentage from center
const positions = [
  { xPercent: -20, yPercent: -20 },
  { xPercent: 10, yPercent: 0 },
  { xPercent: -10, yPercent: 20 },
  { xPercent: 30, yPercent: -30 },
];

const AgeGroups: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  // Dynamically track container size
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateSize(); // Set size on mount
    window.addEventListener('resize', updateSize); // Adjust on resize

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className='w-full min-h-[450px]'>
      <div ref={containerRef} className="relative min-h-[450px] flex items-center justify-center">
        {containerSize.width > 0 && containerSize.height > 0 && (
          data.map((item, index) => {
            const { xPercent, yPercent } = positions[index];

            // Calculate actual pixel positions based on container size and relative percentage
            const xPos = (xPercent / 100) * containerSize.width;
            const yPos = (yPercent / 100) * containerSize.height;

            return (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, x: 0, y: 0 }} // Start in center
                animate={{
                  opacity: 1,
                  x: xPos, // Dynamic positions based on container size
                  y: yPos,
                  transition: { duration: 0.5, delay: index * 0.2 },
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                  zIndex: 10,
                }}
                style={{
                  backgroundColor: item.color,
                  width: `${getCircleSize(item.percentage)}px`,
                  height: `${getCircleSize(item.percentage)}px`,
                  fontSize: `${getFontSize(item.percentage)}px`,
                }}
                className="absolute flex items-center justify-center backdrop-blur rounded-full text-black"
              >
                <div className="flex flex-col items-center">
                  <div>{item.percentage}%</div>
                  <div className="text-small">{item.ageRange}</div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AgeGroups;