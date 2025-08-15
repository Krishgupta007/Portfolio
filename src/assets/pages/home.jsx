import { StarBackground } from "../../components/StarBackground";
import { ThemeToggle } from "../../components/ThemeToggle";
import { Navbar } from "../../components/Navbar";
import { Maincontent } from "../../components/Maincontent";
import { Aboutme } from "../../components/Aboutme";
import { SkillsSection } from "../../components/SkillsSection";
import { ContactSection } from "../../components/ContactSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <Maincontent />
        <Aboutme />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};
