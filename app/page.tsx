import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Metrics from "./components/Metrics";
import Skills from "./components/Skills";
import FeaturedProjects from "./components/FeaturedProjects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Recognition from "./components/Recognition";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Metrics />
        <About />
        <Skills />
        <FeaturedProjects />
        <Experience />
        <Education />
        <Recognition />
      </main>
    </>
  );
}