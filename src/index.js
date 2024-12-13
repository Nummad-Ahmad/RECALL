import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './homepage';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
    {/* <Toaster /> */}
      <Route path='/' element={<App/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
  </Router>
);