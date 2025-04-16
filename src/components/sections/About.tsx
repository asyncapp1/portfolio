import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { colors, spacing, shadows } from '../../styles/theme';
import { profileData } from '../../data/profileData';
import aboutImage from '../../assets/images/about.png';

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.xl};
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div``;

const AboutImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 992px) {
    order: -1;
  }
`;

const AboutImageWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 400px;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border: 4px solid ${colors.primary};
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 300px;
  }
`;

const AboutImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${colors.primary};
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${shadows.md};
  overflow: hidden;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Paragraph = styled.p`
  margin-bottom: ${spacing.md};
  color: ${colors.lightGrey};
  line-height: 1.7;
  font-size: 1.05rem;
`;

const EducationContainer = styled.div`
  margin-top: ${spacing.lg};
`;

const EducationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${spacing.md};
  color: ${colors.dark};
  position: relative;
  display: inline-block;
  
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

const EducationCard = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  padding: ${spacing.md};
  margin-bottom: ${spacing.md};
  box-shadow: ${shadows.sm};
  border-left: 4px solid ${colors.primary};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${shadows.md};
  }
`;

const EducationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing.sm};
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Institution = styled.h4`
  font-size: 1.1rem;
  color: ${colors.dark};
  margin: 0;
`;

const Duration = styled.span`
  font-size: 0.9rem;
  color: ${colors.lightGrey};
  
  @media (max-width: 576px) {
    margin-top: ${spacing.xs};
  }
`;

const Degree = styled.p`
  font-size: 1rem;
  color: ${colors.darkGrey};
  margin-bottom: ${spacing.xs};
`;

const Location = styled.p`
  font-size: 0.9rem;
  color: ${colors.lightGrey};
  display: flex;
  align-items: center;
`;

const About: React.FC = () => {
  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="Get to know more about me and my educational background"
    >
      <AboutContainer>
        <AboutContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Paragraph>
              Hello! I'm Navneet Prajapati, a Full Stack Developer with a strong focus on Flutter, Node.js, and AWS technologies. 
              I have a passion for creating efficient, user-friendly applications and websites that provide an excellent user experience.
            </Paragraph>
            
            <Paragraph>
              With experience in both front-end and back-end development, I enjoy working on all aspects of software development, from designing 
              beautiful interfaces to building robust server-side applications. I'm always eager to learn new technologies and improve my skills.
            </Paragraph>
            
            <Paragraph>
              Throughout my career, I've worked with various companies and clients, helping them build and improve their digital products. 
              I'm particularly interested in mobile application development, cloud technologies, and creating seamless user experiences.
            </Paragraph>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <EducationContainer>
              <EducationTitle>Education</EducationTitle>
              
              {profileData.education.map((edu, index) => (
                <EducationCard key={index}>
                  <EducationHeader>
                    <Institution>{edu.institution}</Institution>
                    <Duration>{edu.duration}</Duration>
                  </EducationHeader>
                  <Degree>{edu.degree}</Degree>
                  <Location>{edu.location}</Location>
                </EducationCard>
              ))}
            </EducationContainer>
          </motion.div>
        </AboutContent>
        
        <AboutImageContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AboutImageWrapper>
              <AboutImage>
                <LogoImage src={aboutImage} alt="Navneet Prajapati" />
              </AboutImage>
            </AboutImageWrapper>
          </motion.div>
        </AboutImageContainer>
      </AboutContainer>
    </Section>
  );
};

export default About; 