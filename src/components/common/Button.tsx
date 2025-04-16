import React from 'react';
import styled, { css } from 'styled-components';
import { colors, borderRadius, transitions } from '../../styles/theme';

type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  as?: React.ElementType;
  to?: string;
  href?: string;
}

const variants = {
  primary: css`
    background-color: ${colors.primary};
    color: ${colors.white};
    border: 2px solid ${colors.primary};
    
    &:hover {
      background-color: transparent;
      color: ${colors.primary};
    }
  `,
  secondary: css`
    background-color: ${colors.secondary};
    color: ${colors.white};
    border: 2px solid ${colors.secondary};
    
    &:hover {
      background-color: transparent;
      color: ${colors.secondary};
    }
  `,
  outlined: css`
    background-color: transparent;
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
    
    &:hover {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  `,
  text: css`
    background-color: transparent;
    color: ${colors.primary};
    border: none;
    padding-left: 0;
    padding-right: 0;
    
    &:hover {
      color: ${colors.accent};
      background-color: transparent;
    }
  `,
};

const sizes = {
  small: css`
    padding: 0.4rem 0.8rem;
    font-size: 0.875rem;
  `,
  medium: css`
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
  `,
  large: css`
    padding: 0.8rem 1.6rem;
    font-size: 1.125rem;
  `,
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: ${borderRadius.md};
  font-weight: 500;
  cursor: pointer;
  transition: ${transitions.default};
  text-decoration: none;
  
  ${props => variants[props.variant || 'primary']};
  ${props => sizes[props.size || 'medium']};
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 