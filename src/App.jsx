import React from "react";
import "./assets/css/index.css";

import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
    </>
  );
}
