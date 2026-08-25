import About from "./components/About";
import Architecture from "./components/Architecture";
import Contact from "./components/Contact";
import Credentials from "./components/Credentials";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-void text-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Architecture />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
