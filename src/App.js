import './App.css';
import { HomeBody } from './HomeBody';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeBody/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
