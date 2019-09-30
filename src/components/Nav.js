import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <h3>Logo</h3>
      </Link>
      <ul className='nav-links'>
        <Link to='/about'>About</Link>
        <Link to='/shop'>Shop</Link>
      </ul>
    </nav>
  );
};

export default Nav;
