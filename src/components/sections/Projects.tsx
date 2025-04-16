import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import Button from '../common/Button';
import Icon from '../common/Icon';
import { colors, spacing, shadows, borderRadius } from '../../styles/theme';
import { profileData } from '../../data/profileData';
import { FaExternalLinkAlt, FaCalendarAlt, FaCode } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: ${colors.white};
  border-radius: ${borderRadius.lg};
  overflow: hidden;
  box-shadow: ${shadows.sm};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${shadows.lg};
  }
`;

const ProjectImagePlaceholder = styled.div`
  height: 200px;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  font-size: 3rem;
  font-weight: 700;
`;

const ProjectContent = styled.div`
  padding: ${spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectHeader = styled.div`
  margin-bottom: ${spacing.md};
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 ${spacing.xs} 0;
  color: ${colors.dark};
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
`;

const ProjectMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  margin-bottom: ${spacing.sm};
  font-size: 0.85rem;
  color: ${colors.lightGrey};
`;

const ProjectDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
`;

const ProjectTech = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
`;

const ProjectDescription = styled.p`
  color: ${colors.lightGrey};
  font-size: 0.95rem;
  line-height: 1.6;
  flex: 1;
`;

const ProjectFooter = styled.div`
  display: flex;
  gap: ${spacing.sm};
  margin-top: ${spacing.md};
`;

const ProjectLink = styled.a`
  color: ${colors.primary};
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${colors.accent};
  }
`;

const Projects: React.FC = () => {
  // We don't need filtering right now
  // const [filter, setFilter] = useState('all');
  
  // For now, just display all projects
  const filteredProjects = profileData.projects;
  
  const getProjectInitials = (title: string) => {
    return title
      .split(' ')
      .map(word => word[0])
      .join('')
      .substring(0, 2);
  };
  
  return (
    <Section 
      id="projects" 
      title="Projects" 
      subtitle="Some of my recent work and personal projects"
      bgColor={colors.lightBackground}
    >
      <ProjectsContainer>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard>
              <ProjectImagePlaceholder>
                {getProjectInitials(project.title)}
              </ProjectImagePlaceholder>
              
              <ProjectContent>
                <ProjectHeader>
                  <ProjectTitle>
                    {project.title}
                    {project.link && (
                      <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                        <Icon icon={FaExternalLinkAlt} />
                      </ProjectLink>
                    )}
                  </ProjectTitle>
                  
                  <ProjectMeta>
                    <ProjectDate>
                      <Icon icon={FaCalendarAlt} />
                      {project.duration}
                    </ProjectDate>
                    <ProjectTech>
                      <Icon icon={FaCode} />
                      {project.technologies.split(',')[0]}
                    </ProjectTech>
                  </ProjectMeta>
                </ProjectHeader>
                
                <ProjectDescription>
                  {project.description[0]}
                </ProjectDescription>
                
                <ProjectFooter>
                  {project.liveLink && (
                    <Button 
                      as="a" 
                      href={project.liveLink} 
                      size="small"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.liveLink, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      View Live
                    </Button>
                  )}
                  
                  {project.link && project.link.includes('github') && (
                    <Button 
                      as="a" 
                      href={project.link} 
                      variant="outlined"
                      size="small"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.link, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      View Code
                    </Button>
                  )}
                </ProjectFooter>
              </ProjectContent>
            </ProjectCard>
          </motion.div>
        ))}
      </ProjectsContainer>
    </Section>
  );
};

export default Projects; 