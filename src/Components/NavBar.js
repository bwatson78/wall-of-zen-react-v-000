import React from 'react';
import {Link} from 'react-router';

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Wall</Link></li>
        <li><Link to='/search'>Search For Images</Link></li>
        <li><Link to='/tags'>Tags</Link></li>
      </ul>
    </div>
  )
}

export default NavBar;
