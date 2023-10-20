import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs"/>} />
          <Route path="/hello" element={<HelloWorld/>} />
          <Route path="/Labs/*" element={<Labs/>} />
          <Route path="/kanbas/*" element={<Kanbas/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

