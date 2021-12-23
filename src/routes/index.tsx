import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from '../pages/Auth';
import Home from '../pages/Home';

const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/auth' element={<Auth />} />
  </Routes>
);
export default AppRoutes;
