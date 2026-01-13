import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
// import "./styles/globals.css";

export default function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
