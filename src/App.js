import React from "react";
import './assets/css/App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav";
import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/gallery"
import Services from "./pages/services"
import ContUs from "./components/contactus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <React.Fragment>
        <NavBar/>
      </React.Fragment>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      </BrowserRouter>
      <div>
        <ContUs/>
      </div>
    </div>
  );
}

export default App;

