import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './chat';
import Home from './home';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<App/>}></Route>
      <Route path='/chat' element={<Chat/>}></Route>
    </Routes>
  </Router>
  </Provider>
);