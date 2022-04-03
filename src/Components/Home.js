import Nav from '../Components/Nav';
import  Header from '../Components/Header';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import HireMe from '../Components/HireMe';
import * as React from "react";




function App() {

  const div1 = React.useRef();
  const div2 = React.useRef();
  const div3 = React.useRef();

  function smoothScroll(target) { 
    const { top } = target.getBoundingClientRect()
    window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth"
    });
  }

  return (
    <React.Fragment>
        <div className="links">
              <div className="link-item"><i class="fas fa-home" onClick={()=> {smoothScroll(div1.current)}}></i></div>
              <div className="link-item"><i class="fas fa-laptop-code" onClick={()=> {smoothScroll(div2.current)}}></i></div>
              <div className="link-item"><i class="fas fa-briefcase" onClick={()=> {smoothScroll(div3.current)}}></i></div>
        </div>
        <Nav ref={div1}/>
        <Header />  
        <Skills ref={div2}/>  
        <Projects ref={div3} />  
        <HireMe />  
    </React.Fragment>
  );
}

export default App;
