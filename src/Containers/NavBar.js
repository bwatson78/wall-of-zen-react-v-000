import React from 'react';
import {Link} from 'react-router';

const NavBar = () => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li role="presentation" className="active"><Link to="/">Wall</Link></li>
        <li role="presentation" ><Link to='/search'>Search For Images</Link></li>
        <li role="presentation" ><Link to='/tags'>Tags</Link></li>
      </ul>
    </div>
  )
}

export default NavBar;
