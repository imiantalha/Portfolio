import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Metrics from "./components/Metrics";
import Skills from "./components/Skills";
import FeaturedProjects from "./components/FeaturedProjects";

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
      </main>
    </>
  );
}