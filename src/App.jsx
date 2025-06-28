import './main.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home'
import About from './About/About';
import TechStack from './TechStack/TechStack';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Layout from './Layout/Layout';
import { useEffect, useState } from 'react';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('darkstyle');
    } else {
      document.body.classList.remove('darkstyle');
    }
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  return (
        <Routes>
          <Route path='/' element={<Layout
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />}>
            <Route path='/home' element={<Home />} index />
            <Route path='/about' element={<About />} index />
            <Route path='/techStack' element={<TechStack index />} />
            <Route path='/projects' element={<Projects index />} />
            <Route path='/Contact' element={<Contact index />} />
          </Route>
        </Routes>
  )
}

export default App
