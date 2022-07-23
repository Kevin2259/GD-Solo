import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {

  const navStyle = {
    color: 'white'
  }

  return (
    <nav class="main-nav">
        <ul className='nav-links'>
          <Link style={navStyle} to="/home">
            <li>Loans</li>
          </Link>
          <Link style={navStyle} to="/college">
            <li>Scholarships</li>
          </Link>
          <Link style={navStyle} to="/info">
            <li>Fafsa</li>
          </Link>
          <Link style={navStyle} to="/quiz">
            <li>Quiz</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;