import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import Badge from '../common/Badge';
import { colors, spacing, shadows, borderRadius } from '../../styles/theme';
import { profileData } from '../../data/profileData';

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CourseWorkContainer = styled.div`
  margin-bottom: ${spacing.xl};
`;

const CourseWorkTitle = styled.h3`
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

const CourseWorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${spacing.sm};
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CourseItem = styled.div`
  background-color: ${colors.white};
  border-radius: ${borderRadius.md};
  padding: ${spacing.md};
  box-shadow: ${shadows.sm};
  font-size: 0.9rem;
  border-left: 3px solid ${colors.primary};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${shadows.md};
  }
`;

const SkillCard = styled.div`
  background-color: ${colors.white};
  border-radius: ${borderRadius.lg};
  padding: ${spacing.lg};
  box-shadow: ${shadows.sm};
  height: 100%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${shadows.md};
  }
`;

const SkillCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${spacing.md};
`;

const SkillCardIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${borderRadius.full};
  background-color: ${colors.primary};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin-right: ${spacing.sm};
`;

const SkillCardTitle = styled.h3`
  font-size: 1.2rem;
  color: ${colors.dark};
  margin: 0;
`;

const SkillTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: ${spacing.sm};
`;

const getSkillIcon = (category: string): React.ReactNode => {
  switch (category) {
    case 'Languages':
      return 'L';
    case 'Developer Tools':
      return 'T';
    case 'Technologies/Frameworks':
      return 'F';
    default:
      return 'S';
  }
};

const Skills: React.FC = () => {
  return (
    <Section 
      id="skills" 
      title="Skills & Expertise" 
      subtitle="My technical skills, competencies, and coursework"
      bgColor={colors.lightBackground}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <CourseWorkContainer>
          <CourseWorkTitle>Coursework</CourseWorkTitle>
          <CourseWorkGrid>
            {profileData.coursework.map((course, index) => (
              <CourseItem key={index}>{course}</CourseItem>
            ))}
          </CourseWorkGrid>
        </CourseWorkContainer>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SkillsContainer>
          {profileData.technicalSkills.map((skill, index) => (
            <SkillCard key={index}>
              <SkillCardHeader>
                <SkillCardIcon>
                  {getSkillIcon(skill.category)}
                </SkillCardIcon>
                <SkillCardTitle>{skill.category}</SkillCardTitle>
              </SkillCardHeader>
              
              <SkillTagsContainer>
                {skill.items.map((item, itemIndex) => (
                  <Badge 
                    key={itemIndex} 
                    variant={
                      index === 0 ? 'primary' : 
                      index === 1 ? 'info' : 
                      'success'
                    }
                  >
                    {item}
                  </Badge>
                ))}
              </SkillTagsContainer>
            </SkillCard>
          ))}
        </SkillsContainer>
      </motion.div>
    </Section>
  );
};

export default Skills; 