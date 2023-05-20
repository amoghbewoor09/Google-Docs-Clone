import React from 'react';
import './SideNavbar.css';
import side from '../images/cal.png';
import keep from '../images/keep.png';
import task from '../images/task.png';
import contact from '../images/contact.png';
import maps from '../images/maps.png';
import plus from '../images/plus.jpg';

const SideNavbar = () => {
  return (
    <div className="right-side-navbar">
      <ul className="navbar-icons">
        <li>
          <a href="/">
            <img src={side} alt="error" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={keep} alt="error" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={task} style={{ height: '1.5rem' }} alt="error" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={contact} style={{ height: '1.5rem' }} alt="error" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={maps} style={{ height: '2rem' }} alt="error" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={plus} style={{ height: '2rem' }} alt="error" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
