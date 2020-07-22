import React from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar'
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <NavigationBar/>
     <Introduction/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
