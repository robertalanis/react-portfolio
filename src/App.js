import React from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar'
import Introduction from './components/Introduction';
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
     <NavigationBar/>
     <Introduction/>
     <About/>
  
     <Footer/>


    </div>
  );
}

export default App;
