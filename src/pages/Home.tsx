import React from 'react';
import { Link } from 'react-router-dom';
import { Routes} from '../constants';

export const Home = () => (
  <div>
    <Link to={Routes.Login}>Login</Link>
    <Link to={Routes.Game}>Game</Link>
  </div>
);
