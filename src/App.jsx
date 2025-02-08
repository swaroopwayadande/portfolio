import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Projects from './Components/Projects';
import ContactPage from './Components/ContactPage';
// import Techstack from './Components/Techtack';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background container */}
      <div className="fixed inset-0 -z-10">
        <div className="h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main content */}
      <Navbar />
      <Hero />
      <About />
      <Technologies/>
      <Projects />
      <ContactPage />
   
    </div>
  );
};

export default App;
