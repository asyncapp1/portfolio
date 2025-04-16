import React from 'react';
import styled, { css } from 'styled-components';
import { colors, shadows, borderRadius, transitions } from '../../styles/theme';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  hoverable?: boolean;
  className?: string;
  onClick?: () => void;
}

const variants = {
  default: css`
    background-color: ${colors.white};
    border: none;
    box-shadow: ${shadows.sm};
  `,
  outlined: css`
    background-color: transparent;
    border: 1px solid ${colors.lightGrey};
    box-shadow: none;
  `,
  elevated: css`
    background-color: ${colors.white};
    border: none;
    box-shadow: ${shadows.md};
  `,
};

const StyledCard = styled.div<{
  variant: 'default' | 'outlined' | 'elevated';
  hoverable?: boolean;
  onClick?: () => void;
}>`
  border-radius: ${borderRadius.lg};
  padding: 1.5rem;
  transition: ${transitions.default};
  width: 100%;
  
  ${props => variants[props.variant]}
  
  ${props => props.hoverable && css`
    &:hover {
      transform: translateY(-5px);
      box-shadow: ${shadows.lg};
    }
  `}
  
  ${props => props.onClick && css`
    cursor: pointer;
  `}
`;

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hoverable = false,
  className,
  onClick,
}) => {
  return (
    <StyledCard
      variant={variant}
      hoverable={hoverable}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledCard>
  );
};

export default Card; 