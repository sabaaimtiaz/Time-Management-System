
import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Buttons from './Components/Buttons';
import './index.css'; 
function App() {
  return (
    <div >
      <Router> 
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Buttons" element={<Buttons/>} />
        
        </Routes>
        </Router>
    </div>
  );
}

export default App;
