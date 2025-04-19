import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  icon: IconType;
  className?: string;
  style?: React.CSSProperties;
}

const Icon = ({ icon, className, style }: IconProps) => {
  // Cast icon to any to bypass TypeScript errors
  const IconComponent = icon as any;
  return <IconComponent className={className} style={style} />;
};

export default Icon; 