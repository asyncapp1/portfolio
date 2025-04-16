import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, spacing } from '../../styles/theme';
import { FaLinkedin, FaGithub, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { profileData } from '../../data/profileData';
import Icon from './Icon';

const FooterContainer = styled.footer`
  background-color: ${colors.dark};
  color: ${colors.white};
  padding: ${spacing.xl} 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spacing.xl};
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: ${spacing.md};
  color: ${colors.white};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${colors.primary};
  }
`;

const FooterNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterNavItem = styled.li`
  margin-bottom: ${spacing.sm};
`;

const FooterLink = styled(Link)`
  color: ${colors.lightGrey};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${spacing.md};
  margin-top: ${spacing.sm};
`;

const SocialLink = styled.a`
  color: ${colors.lightGrey};
  font-size: 1.2rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${colors.primary};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${spacing.sm};
  color: ${colors.lightGrey};
  
  svg {
    margin-right: ${spacing.sm};
    color: ${colors.primary};
  }
`;

const CopyRight = styled.div`
  text-align: center;
  margin-top: ${spacing.xl};
  padding-top: ${spacing.md};
  border-top: 1px solid ${colors.darkGrey};
  color: ${colors.lightGrey};
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${spacing.lg};
  padding-right: ${spacing.lg};
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>{profileData.name}</FooterTitle>
          <p style={{ color: colors.lightGrey, marginBottom: spacing.md }}>
            A Full Stack Developer specializing in {profileData.technicalSkills.find(skill => skill.category === "Technologies/Frameworks")?.items.slice(0, 3).join(", ")} technologies.
          </p>
          <SocialLinks>
            <SocialLink href={profileData.github} target="_blank" rel="noopener noreferrer">
              <Icon icon={FaGithub} />
            </SocialLink>
            <SocialLink href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon icon={FaLinkedin} />
            </SocialLink>
            <SocialLink href={profileData.youtube} target="_blank" rel="noopener noreferrer">
              <Icon icon={FaYoutube} />
            </SocialLink>
            <SocialLink href={`mailto:${profileData.email}`}>
              <Icon icon={FaEnvelope} />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterNav>
            <FooterNavItem>
              <FooterLink to="/#about">About Me</FooterLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterLink to="/#experience">Experience</FooterLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterLink to="/#projects">Projects</FooterLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterLink to="/#skills">Skills</FooterLink>
            </FooterNavItem>
            <FooterNavItem>
              <FooterLink to="/#contact">Contact</FooterLink>
            </FooterNavItem>
          </FooterNav>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <ContactItem>
            <Icon icon={FaEnvelope} />
            <a href={`mailto:${profileData.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {profileData.email}
            </a>
          </ContactItem>
          <ContactItem>
            <Icon icon={FaPhone} />
            <a href={`tel:${profileData.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {profileData.phone}
            </a>
          </ContactItem>
          <ContactItem>
            <Icon icon={FaMapMarkerAlt} />
            {profileData.location}
          </ContactItem>
        </FooterSection>
      </FooterContent>
      
      <CopyRight>
        &copy; {currentYear} {profileData.name}. All rights reserved.
      </CopyRight>
    </FooterContainer>
  );
};

export default Footer; 