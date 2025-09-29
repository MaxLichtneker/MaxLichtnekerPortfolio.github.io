import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Switch from './pages/Switch';
import Overgrown from './pages/Overgrown';
import AsrBurnout from './pages/AsrBurnout';
import EggGameJam from './pages/EggGameJam';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <Router>
       <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/switch" element={<Switch />} />
          <Route path="/overgrown" element={<Overgrown/>}/> 
          <Route path='/asrburnout' element={<AsrBurnout/>}/>
          <Route path='/gamejamegg' element={<EggGameJam/>}/>
       </Routes>
      </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
