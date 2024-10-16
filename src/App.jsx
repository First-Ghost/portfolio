import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
