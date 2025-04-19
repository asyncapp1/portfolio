import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import Button from '../common/Button';
import Icon from '../common/Icon';
import { colors, spacing, shadows, borderRadius } from '../../styles/theme';
import { profileData } from '../../data/profileData';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.xl};
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactForm = styled.div`
  background-color: ${colors.lightBackground};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.md};
  
  @media (max-width: 992px) {
    order: -1;
  }
`;

const ContactTitle = styled.h3`
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

const ContactText = styled.p`
  margin-bottom: ${spacing.md};
  color: ${colors.lightGrey};
  line-height: 1.7;
  font-size: 1.05rem;
`;

const ContactDetailsContainer = styled.div`
  margin-top: ${spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${borderRadius.full};
  background-color: ${colors.primary};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

const ContactItemContent = styled.div``;

const ContactItemTitle = styled.h4`
  font-size: 1.1rem;
  color: ${colors.dark};
  margin: 0 0 ${spacing.xs} 0;
`;

const ContactItemValue = styled.a`
  font-size: 1rem;
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
  margin-top: ${spacing.lg};
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: ${borderRadius.full};
  background-color: ${colors.primary};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background-color: ${colors.accent};
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${spacing.md};
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${spacing.xs};
  font-size: 0.9rem;
  color: ${colors.darkGrey};
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${colors.lightGrey};
  border-radius: ${borderRadius.md};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${colors.lightGrey};
  border-radius: ${borderRadius.md};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

const ContactFormCard = styled.div`
  background-color: ${colors.lightBackground};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: ${shadows.md};
`;

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    // For this demo, we'll just log the form data
    console.log(formState);
    
    // Redirect to email client as a fallback
    window.location.href = `mailto:${profileData.email}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
  };
  
  return (
    <Section 
      id="contact" 
      title="Contact Me" 
      subtitle="Get in touch with me for collaborations or opportunities"
    >
      <ContactContainer>
        <ContactInfo>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactTitle>Let's Talk</ContactTitle>
            <ContactText>
              Feel free to reach out to me for job opportunities, collaborations, or just to say hello.
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </ContactText>
            
            <ContactDetailsContainer>
              <ContactItem>
                <ContactIcon>
                  <Icon icon={FaEnvelope} />
                </ContactIcon>
                <ContactItemContent>
                  <ContactItemTitle>Email</ContactItemTitle>
                  <ContactItemValue href={`mailto:${profileData.email}`}>
                    {profileData.email}
                  </ContactItemValue>
                </ContactItemContent>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <Icon icon={FaPhone} />
                </ContactIcon>
                <ContactItemContent>
                  <ContactItemTitle>Phone</ContactItemTitle>
                  <ContactItemValue href={`tel:${profileData.phone}`}>
                    {profileData.phone}
                  </ContactItemValue>
                </ContactItemContent>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <Icon icon={FaMapMarkerAlt} />
                </ContactIcon>
                <ContactItemContent>
                  <ContactItemTitle>Location</ContactItemTitle>
                  <ContactItemValue as="span">
                    {profileData.location}
                  </ContactItemValue>
                </ContactItemContent>
              </ContactItem>
            </ContactDetailsContainer>
            
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
            </SocialLinks>
          </motion.div>
        </ContactInfo>
        
        <ContactForm>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactTitle>Send a Message</ContactTitle>
            
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput 
                type="text" 
                id="name" 
                name="name" 
                value={formState.name} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput 
                type="email" 
                id="email" 
                name="email" 
                value={formState.email} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput 
                type="text" 
                id="subject" 
                name="subject" 
                value={formState.subject} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea 
                id="message" 
                name="message" 
                value={formState.message} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <Button type="submit" fullWidth>
              Send Message
            </Button>
          </motion.form>
        </ContactForm>
      </ContactContainer>
    </Section>
  );
};

export default Contact; 