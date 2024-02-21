import React from 'react';
import Labs from "./Labs";
import Kanbas from './Kanbas';
import HelloWorld from './Labs/a3/HelloWorld';
import { HashRouter } from 'react-router-dom';
import {Route, Routes, Navigate} from 'react-router'
import "./index.css"

function App() {
   return (
    <HashRouter>
      <div>
        <Routes>
          {/* <Route path="/"         element={<Navigate to="/Labs"/>}/> */}
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
        </Routes>
      </div>
      </HashRouter>
    
      
);}


export default App;
