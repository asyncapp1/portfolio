import React from 'react';
import styled, { css } from 'styled-components';
import { colors, spacing } from '../../styles/theme';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  bgColor?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
  centered?: boolean;
  className?: string;
}

const SectionContainer = styled.section<{
  bgColor?: string;
  noPadding?: boolean;
  fullWidth?: boolean;
}>`
  background-color: ${props => props.bgColor || 'transparent'};
  padding: ${props => props.noPadding ? '0' : `${spacing.xxl} 0`};
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  @media (max-width: 768px) {
    padding: ${props => props.noPadding ? '0' : `${spacing.xl} 0`};
  }
`;

const SectionContent = styled.div<{ centered?: boolean; fullWidth?: boolean }>`
  width: 100%;
  max-width: ${props => props.fullWidth ? '100%' : '1200px'};
  margin: 0 auto;
  padding: ${props => props.fullWidth ? '0' : `0 ${spacing.lg}`};
  
  ${props => props.centered && css`
    text-align: center;
  `}
`;

const SectionHeader = styled.div`
  margin-bottom: ${spacing.xl};
`;

const SectionTitle = styled.h2`
  color: ${colors.dark};
  margin-bottom: ${spacing.sm};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${colors.primary};
  }
`;

const SectionSubtitle = styled.p`
  color: ${colors.lightGrey};
  font-size: 1.1rem;
  max-width: 600px;
`;

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  bgColor,
  fullWidth = false,
  noPadding = false,
  centered = false,
  className,
}) => {
  return (
    <SectionContainer 
      id={id} 
      bgColor={bgColor} 
      noPadding={noPadding} 
      fullWidth={fullWidth}
      className={className}
    >
      <SectionContent centered={centered} fullWidth={fullWidth}>
        {(title || subtitle) && (
          <SectionHeader>
            {title && <SectionTitle>{title}</SectionTitle>}
            {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
          </SectionHeader>
        )}
        {children}
      </SectionContent>
    </SectionContainer>
  );
};

export default Section; 