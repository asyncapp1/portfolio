import React from 'react';
import styled, { css } from 'styled-components';
import { colors, borderRadius } from '../../styles/theme';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'dark';
type BadgeSize = 'small' | 'medium' | 'large';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variants = {
  primary: css`
    background-color: ${colors.primary};
    color: ${colors.white};
  `,
  secondary: css`
    background-color: ${colors.secondary};
    color: ${colors.white};
  `,
  success: css`
    background-color: ${colors.tagAccent};
    color: ${colors.dark};
  `,
  warning: css`
    background-color: #F9A825;
    color: ${colors.dark};
  `,
  info: css`
    background-color: #29B6F6;
    color: ${colors.white};
  `,
  dark: css`
    background-color: ${colors.darkGrey};
    color: ${colors.white};
  `,
};

const sizes = {
  small: css`
    padding: 0.1rem 0.5rem;
    font-size: 0.7rem;
  `,
  medium: css`
    padding: 0.25rem 0.7rem;
    font-size: 0.8rem;
  `,
  large: css`
    padding: 0.3rem 0.9rem;
    font-size: 0.9rem;
  `,
};

const StyledBadge = styled.span<{
  variant: BadgeVariant;
  size: BadgeSize;
}>`
  display: inline-block;
  border-radius: ${borderRadius.full};
  font-weight: 500;
  
  ${props => variants[props.variant]}
  ${props => sizes[props.size]}
`;

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className,
}) => {
  return (
    <StyledBadge
      variant={variant}
      size={size}
      className={className}
    >
      {children}
    </StyledBadge>
  );
};

export default Badge; 