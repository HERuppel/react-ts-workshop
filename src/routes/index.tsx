import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../hooks/Auth';
import Auth from '../pages/Auth';
import Home from '../pages/Home';

const AppRoutes = (): JSX.Element => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Navigate to='/home/posts' />} />
        <Route path='/auth' element={<Navigate to='/auth/login' />} />
        <Route path='/home/*' element={<Home />} />
        <Route path='/auth/*' element={<Auth />} />
      </Routes>
    </AuthProvider>
  );
};
export default AppRoutes;
