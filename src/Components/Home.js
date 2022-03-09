import Nav from '../Components/Nav';
import  Header from '../Components/Header';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import HireMe from '../Components/HireMe';

import * as React from "react";



function App() {
  return (
    <React.Fragment>
        <Nav />
        <Header />  
        <Skills />  
        <Projects />  
        <HireMe />  
    </React.Fragment>
  );
}

export default App;
