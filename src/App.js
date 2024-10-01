import './App.css';
import { HomeBody } from './HomeBody';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import { AboutMe } from './AboutMe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeBody/>}/>
          <Route exact path="/aboutme" element={<AboutMe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
