import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import Home from './routes/Home';
import Login from './routes/Login';
import Logup from './routes/LogUp';
import NavApp from './components/NavApp';
import CustomRouter from './components/CustomRouter';
import './style.css';

const AppContainer = () => {
  const [token, setToken] = useState('');

  const history = createHashHistory();
  return (
    <>
      <CustomRouter history={history}>
        <NavApp history={history} token={token} setToken={setToken}/>
        <Routes>
          <Route path='/' element={<Home history={history} />}/>
          <Route path='/login' element={<Login history={history} setToken={setToken} />}/>
          <Route path='/logup' element={<Logup history={history} />}/>
        </Routes>
      </CustomRouter>

    </>
  );
};

export default AppContainer;
