import React from "react";
import { PortfolioProvider } from "./context/PortfolioContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import "./styles/main.scss";
import SEO from "./components/SEO/SEO";
import Footer from "./components/Footer/Footer";
import ChatWidget from "./components/ChatWidget/ChatWidget";

// Import all SCSS files
import "./components/Header/Header.scss";
import "./components/Hero/Hero.scss";
import "./components/Skills/Skills.scss";
import "./components/Experience/Experience.scss";
import "./components/Education/Education.scss";
import "./components/Contact/Contact.scss";

// Import portfolio data
import portfolioData from "./data/portfolio-data.json";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <PortfolioProvider>
      <SEO
        title="Amulya Bandla | Senior Full Stack Developer"
        description="Senior Full Stack Developer with expertise in React.js and Node.js"
        keywords="React, Node.js, Full Stack, Developer"
      />
      <div className="app">
        <Header />
        <main className="main-content">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <Footer />
          <ChatWidget />
        </main>
      </div>
    </PortfolioProvider>
  );
};

export default App;
