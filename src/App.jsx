import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import Navbar from "./components/NavBar";
import Certificates from "./sections/Certificates";
const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <Certificates />
    <LogoShowcase />
    <Education />
    <TechStack />
    <Contact />
    <Footer />
  </>
);

export default App;
