import AboutSection from "./AboutSection";
import "./App.css";
import ContactSection from "./ContactSection";
import CopyrightFooter from "./CopyrightFooter";
import HomeSection from "./HomeSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

function App() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <CopyrightFooter />
    </>
  );
}

export default App;
