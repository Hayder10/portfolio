import './App.css';
import Dashboard from './Dashboard';
import Introduction from './Introduction';
import React from 'react';
import PreSkills from './PreSkills';
import Skills from './Skills';
import Projects from './Projects';
import Interests from './Interests';
import Contact from './Contact';

function App() {
  return (
      <div className="App">
        <section className='dashboard'>
          <Dashboard />
        </section>
        <section className='introduction'>
          <Introduction />
        </section>
        <section>
          <PreSkills />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Interests />
        </section>
        <section>
          <Contact />
        </section>
      </div>
  );
}

export default App;
