import './styles/style_desktop.css';
import './styles/flex.css'
import './styles/style_phone.css'
import '../src/styles/fontawesome-free-5.12.1-web/css/all.min.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import { Routes, Route } from "react-router-dom";



function App() {
  return (

    <div className="App flex j_center a_center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
