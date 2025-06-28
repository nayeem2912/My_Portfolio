import React from 'react';
import HeroSection from './Hero/HeroSection';
import SkillsSection from './Skill/SkillsSection';
import EducationSection from './Education/EducationSection';
import ProjectsSection from './Project/ProjectsSection';
import AboutSection from './About/AboutSection';
import ContactSection from './Contact/ContactSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <SkillsSection></SkillsSection>
            <EducationSection></EducationSection>
            <ProjectsSection></ProjectsSection>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;