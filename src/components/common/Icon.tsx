import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  icon: IconType;
  className?: string;
}

const Icon = ({ icon, className }: IconProps) => {
  // Cast icon to any to bypass TypeScript errors
  const IconComponent = icon as any;
  return <IconComponent className={className} />;
};

export default Icon; 