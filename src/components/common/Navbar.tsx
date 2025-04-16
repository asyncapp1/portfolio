import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, shadows, zIndices, transitions } from '../../styles/theme';
import { FaBars, FaTimes } from 'react-icons/fa';
import Icon from './Icon';

const Header = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${zIndices.navigation};
  background-color: ${props => props.isScrolled ? colors.white : 'transparent'};
  transition: ${transitions.default};
  box-shadow: ${props => props.isScrolled ? shadows.md : 'none'};
  padding: ${props => props.isScrolled ? '0.8rem 0' : '1.5rem 0'};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${colors.accent};
  }
`;

const NavList = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    flex-direction: column;
    background-color: ${colors.white};
    box-shadow: ${shadows.lg};
    padding: 2rem;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: ${zIndices.modal};
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  color: ${colors.dark};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover, &.active {
    color: ${colors.primary};
    
    &::after {
      width: 100%;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${colors.dark};
  transition: color 0.3s ease;
  z-index: ${zIndices.navigation + 1};
  
  &:hover {
    color: ${colors.primary};
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${colors.dark};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${colors.primary};
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

interface NavbarProps {
  logoText?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ logoText = 'Navneet Prajapati' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Header isScrolled={isScrolled}>
      <NavContainer>
        <Logo to="/">{logoText}</Logo>
        
        <HamburgerButton onClick={toggleMenu}>
          <Icon icon={FaBars} />
        </HamburgerButton>
        
        <NavList isOpen={isMenuOpen}>
          <CloseButton onClick={closeMenu}>
            <Icon icon={FaTimes} />
          </CloseButton>
          
          <NavItem>
            <NavLink to="/#about" onClick={closeMenu}>About</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/#experience" onClick={closeMenu}>Experience</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/#projects" onClick={closeMenu}>Projects</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/#skills" onClick={closeMenu}>Skills</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/#contact" onClick={closeMenu}>Contact</NavLink>
          </NavItem>
        </NavList>
      </NavContainer>
    </Header>
  );
};

export default Navbar; 