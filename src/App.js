import './App.css';
import { HomeBody } from './HomeBody';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutMe } from './AboutMe';
import { Contact } from './Contact';
import { Projects } from './Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeBody/>}/>
          <Route exact path="/aboutme" element={<AboutMe/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
