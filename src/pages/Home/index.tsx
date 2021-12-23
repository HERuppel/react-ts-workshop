import React from 'react';
import Posts from './Posts';
import User from './User';

const Home: React.FC = () => {
  return (
    <>
      <Posts />
      <User />
    </>
  );
};

export default Home;
