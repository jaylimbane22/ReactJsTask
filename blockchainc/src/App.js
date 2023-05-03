import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";
import Section6 from "./pages/Section6";
import Section7 from "./pages/Section7";
import Section8 from "./pages/Section8";
import Documentation from "./pages/Documentation";
import './App.css';

function App() {
  return (
    <BrowserRouter className="h-screen">
       <div className="text-center text-white p-2 bg-light-blue">
        <span>Lorem Ipsum is simply dummy text of printing</span>
      </div>
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="section1" element={<Section1 />} />
        <Route path="section2" element={<Section2 />} />
        <Route path="section3" element={<Section3 />} />
        <Route path="section4" element={<Section4 />} />
        <Route path="section5" element={<Section5 />} />
        <Route path="section6" element={<Section6 />} />
        <Route path="section7" element={<Section7 />} />
        <Route path="section8" element={<Section8 />} />
        <Route path="documentation" element={<Documentation />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
