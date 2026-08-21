import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Navbar from "./components/Navbar";
import Recognition from "./components/Recognition";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <Metrics />
        <About />
        <Skills />
        <FeaturedProjects />
        <Experience />
        <Education />
        <Recognition />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
