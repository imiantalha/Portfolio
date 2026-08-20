import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Metrics from "./components/Metrics";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Metrics />
        <About />
      </main>
    </>
  );
}