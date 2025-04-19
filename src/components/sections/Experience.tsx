import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { colors, spacing, shadows, borderRadius } from '../../styles/theme';
import { profileData } from '../../data/profileData';
import { FaExternalLinkAlt, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import Icon from '../common/Icon';

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

const ExperienceCard = styled.div`
  background-color: ${colors.lightBackground};
  border-radius: ${borderRadius.lg};
  padding: ${spacing.lg};
  box-shadow: ${shadows.md};
  margin-bottom: ${spacing.lg};
  border-left: 4px solid ${colors.primary};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${shadows.lg};
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${spacing.md};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${spacing.sm};
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  font-size: 1.25rem;
  color: ${colors.white};
  margin: 0 0 ${spacing.xs} 0;
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
`;

const ExternalLink = styled.a`
  color: ${colors.primary};
  font-size: 0.875rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${colors.accent};
  }
`;

const PositionTitle = styled.h4`
  font-size: 1.1rem;
  color: ${colors.dark};
  margin: 0;
  font-weight: 500;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
  font-size: 0.875rem;
  color: ${colors.lightGrey};
  margin-bottom: ${spacing.xs};
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
  font-size: 0.875rem;
  color: ${colors.lightGrey};
`;

const RemoteTag = styled.span`
  background-color: ${colors.tagAccent};
  color: ${colors.background};
  font-size: 0.75rem;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 20px;
  margin-left: ${spacing.xs};
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: ${colors.lightBackground};
  margin: ${spacing.md} 0;
`;

const Description = styled.div`
  margin-top: ${spacing.md};
`;

const DescriptionList = styled.ul`
  padding-left: 1.2rem;
  margin: 0;
`;

const DescriptionItem = styled.li`
  margin-bottom: ${spacing.xs};
  color: ${colors.dark};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const TechBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: ${spacing.md};
`;

const Experience: React.FC = () => {
  return (
    <Section 
      id="experience" 
      title="Work Experience" 
      subtitle="My professional journey and career experience"
    >
      <ExperienceContainer>
        {profileData.experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ExperienceCard>
              <ExperienceHeader>
                <CompanyInfo>
                  <CompanyName>
                    {experience.company}
                    {experience.link && (
                      <ExternalLink href={experience.link} target="_blank" rel="noopener noreferrer">
                        <Icon icon={FaExternalLinkAlt} />
                      </ExternalLink>
                    )}
                  </CompanyName>
                  <PositionTitle>{experience.position}</PositionTitle>
                </CompanyInfo>
                
                <MetaInfo>
                  <Duration>
                    <Icon icon={FaCalendarAlt} />
                    {experience.duration}
                  </Duration>
                  <Location>
                    <Icon icon={FaMapMarkerAlt} />
                    {experience.location}
                    {experience.remote && <RemoteTag>Remote</RemoteTag>}
                  </Location>
                </MetaInfo>
              </ExperienceHeader>
              
              <Divider />
              
              <Description>
                <DescriptionList>
                  {experience.description.map((item, descIndex) => (
                    <DescriptionItem key={descIndex}>{item}</DescriptionItem>
                  ))}
                </DescriptionList>
              </Description>
              
              {experience.technologies && (
                <TechBadges>
                  {experience.technologies.split(',').map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant={techIndex % 3 === 0 ? 'primary' : techIndex % 3 === 1 ? 'success' : 'info'}
                      size="small"
                    >
                      {tech.trim()}
                    </Badge>
                  ))}
                </TechBadges>
              )}
            </ExperienceCard>
          </motion.div>
        ))}
      </ExperienceContainer>
    </Section>
  );
};

export default Experience; 