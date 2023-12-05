import Labs from './Labs';
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from './Kanbas';
// import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';
import { HashRouter, Link } from "react-router-dom";

import Project from "./project";


function App() {
  console.log('API base URL:', process.env.REACT_APP_BASE_API_URL);
  return (
    <HashRouter>
      <div>
        <Routes>
        <Route path="/" element={<Navigate to="/project/home" replace />} />
          <Route path="/project/*" element={<Project />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
