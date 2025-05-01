import './App.css';
import LeftBar from './components/LeftBar.js';
import Home from './components/Home.js';
import Education from './components/Education/Education.js';
import Experience from './components/Experience/Experience.js';
import Projects from './components/Projects/Projects.js';
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const renderSection = () => {
    switch (activeSection) {
      case 'Experience':
        return <Experience />;
      case 'Education':
        return <Education />;
      case 'Projects':
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        <LeftBar onSectionChange={setActiveSection} />
        <div className="main-content">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

export default App;

