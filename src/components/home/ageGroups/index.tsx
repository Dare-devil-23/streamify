'use client';
import React from 'react';
import Card from '@/components/common/card';
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

const getTopPosition = (index: number) => {
  switch (index) {
    case 1:
      return 220;
    case 2:
      return 130;
    case 3:
      return 20;
    case 4:
      return 170;
    default:
      return 80;
  }
}

const getLeftPosition = (index: number) => {
  switch (index) {
    case 1:
      return 120;
    case 2:
      return 180;
    case 3:
      return 220;
    case 4:
      return 170;
    default:
      return 20;
  }
}

const AgeGroups: React.FC = () => {
  return (
      <div className="relative min-h-[450px]">
        {data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, delay: index * 0.2 } }}
            key={item.index}
            style={{
              backgroundColor: item.color,
              width: `${getCircleSize(item.percentage)}px`,
              height: `${getCircleSize(item.percentage)}px`,
              top: `${getTopPosition(index)}px`,
              left: `${getLeftPosition(index)}px`,
              fontSize: `${getFontSize(item.percentage)}px`,
            }}
            className="absolute cursor-default flex items-center backdrop-blur hover:scale-105 transition-all duration-500 hover:z-10 justify-center rounded-full text-black"
          >
            <div className="flex flex-col items-center">
              <div>{item.percentage}%</div>
              <div className="text-small">{item.ageRange}</div>
            </div>
          </motion.div>
        ))}
      </div>
  );
};

export default AgeGroups;
