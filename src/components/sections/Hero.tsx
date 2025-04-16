import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, spacing } from '../../styles/theme';
import Button from '../common/Button';
import Icon from '../common/Icon';
import { profileData } from '../../data/profileData';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import logoImage from '../../assets/images/logo_first.png';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: ${spacing.xl} 0;
  background: linear-gradient(135deg, ${colors.background} 0%, ${colors.lightBackground} 100%);
  
  @media (max-width: 768px) {
    min-height: calc(100vh - 80px);
    padding-top: 100px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    gap: ${spacing.xl};
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  
  @media (max-width: 992px) {
    max-width: 100%;
    order: 2;
  }
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  
  @media (max-width: 992px) {
    max-width: 80%;
    order: 1;
  }
`;

const HeroImage = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px dashed ${colors.accent};
    animation: rotate 30s linear infinite;
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const InitialsCircle = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 85%;
    height: 85%;
  }
`;

const Greeting = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${colors.primary};
  margin-bottom: ${spacing.xs};
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: ${spacing.sm};
  color: ${colors.dark};
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const RoleText = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.accent};
  margin-bottom: ${spacing.md};
  display: flex;
  align-items: center;
  
  @media (max-width: 992px) {
    font-size: 1.5rem;
    justify-content: center;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${colors.lightGrey};
  margin-bottom: ${spacing.lg};
  max-width: 550px;
  line-height: 1.6;
  
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: ${spacing.md};
  margin-bottom: ${spacing.lg};
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${spacing.md};
  margin-top: ${spacing.md};
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: ${colors.dark};
  font-size: 1.5rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${colors.primary};
  }
`;

const LogoImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer id="home">
      <ContentWrapper>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Greeting>Hello, I'm</Greeting>
            <Title>{profileData.name}</Title>
            <RoleText>Full Stack Developer</RoleText>
            <Description>
              Passionate and experienced developer specializing in Flutter, Node.js and 
              AWS technologies. Crafting beautiful mobile applications and robust backend services.
            </Description>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ButtonsContainer>
              <Button as="a" href="#contact">
                Contact Me
              </Button>
              <Button as="a" href="#projects" variant="outlined">
                View Projects
              </Button>
            </ButtonsContainer>
            
            <SocialLinks>
              <SocialLink href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon icon={FaLinkedin} />
              </SocialLink>
              <SocialLink href={profileData.github} target="_blank" rel="noopener noreferrer">
                <Icon icon={FaGithub} />
              </SocialLink>
              <SocialLink href={profileData.youtube} target="_blank" rel="noopener noreferrer">
                <Icon icon={FaYoutube} />
              </SocialLink>
              <SocialLink href={`mailto:${profileData.email}`}>
                <Icon icon={FaEnvelope} />
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </HeroContent>
        
        <HeroImageContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <HeroImage>
              <InitialsCircle>
                <LogoImage src={logoImage} alt="Navneet Prajapati Logo" />
              </InitialsCircle>
            </HeroImage>
          </motion.div>
        </HeroImageContainer>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero; 