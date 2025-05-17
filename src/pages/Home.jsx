import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import {HeroSection} from "../components/HeroSection";
import {AboutMe} from "../components/AboutMe";
import {SkillsSection} from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import {ContactSection} from "../components/ContactSection";
import {Footer} from '../components/Footer';


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {
            // Theme Toggle
            <ThemeToggle/> 
        }
        {
            // BackGround
            <StarBackground/>
        }
        {
            // navbar
            <Navbar/>
        }
        {
            // main Content
            <main>
                <HeroSection></HeroSection>
                <AboutMe></AboutMe>
                <SkillsSection></SkillsSection>
                <ProjectSection></ProjectSection>
                <ContactSection></ContactSection>
            </main>
        }
        {
            // Footer
            <Footer></Footer>
        }
    </div>;
};