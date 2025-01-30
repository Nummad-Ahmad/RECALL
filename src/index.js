import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './chat';
import Home from './home';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Contact from './feedback';
import Guidelines from './guidelines';
import Users from './users';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Toaster />
  <Router>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<App/>}></Route>
      <Route path='/users' element={<Users/>}></Route>
      <Route path='/guidelines' element={<Guidelines/>}></Route>
      <Route path='/feedback' element={<Contact/>}></Route>
      <Route path='/chat' element={<Chat/>}></Route>
    </Routes>
  </Router>
  </Provider>
);