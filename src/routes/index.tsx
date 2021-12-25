import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../hooks/Auth';
import { PostProvider } from '../hooks/Post';
import Auth from '../pages/Auth';
import Home from '../pages/Home';

const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route path='/' element={<Navigate to='/home/posts' />} />
    <Route path='/home' element={<Navigate to='/home/posts' />} />
    <Route path='/auth' element={<Navigate to='/auth/login' />} />
    <Route
      path='/home/*'
      element={
        <AuthProvider>
          <PostProvider>
            <Home />
          </PostProvider>
        </AuthProvider>
      }
    />
    <Route
      path='/auth/*'
      element={
        <AuthProvider>
          <Auth />
        </AuthProvider>
      }
    />
    <Route path='*' element={<Navigate to='/home/posts' />} />
  </Routes>
);
export default AppRoutes;
