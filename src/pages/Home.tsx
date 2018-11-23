import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div>
    <Link to="/login">Login</Link>
    <Link to="/game">Game</Link>
  </div>
);
