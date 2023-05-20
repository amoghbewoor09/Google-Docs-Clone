import React from 'react';
import redo from '../images/f.png';
import undo from '../images/b.png';
import print from '../images/p.png';
import A from '../images/A.png';
import brush from '../images/brush.png';
import hundred from '../images/100.png';
import normal from '../images/normal.png';
import arial from '../images/arial.png';
import eleven from '../images/eleven.png';
import bold from '../images/bold.png';
import link from '../images/link.png';
import align from '../images/align.png';
import edit from '../images/edit.png';
import './Header.css';

function Header() {
  return (
    <>
      <div className='container p-3 d-flex' style={{ borderRadius: '50px', backgroundColor: 'rgb(241,241,241)', gap: '0.5rem', marginLeft: '2rem', width: '1600px', height: '2rem', alignItems: 'center' }}>
        <span>
          <img src={undo} style={{ height: '1.4rem' }} className="hover-image" />
        </span>
        <span>
          <img src={redo} style={{ height: '1.5rem' }} className="hover-image" />
        </span>
        <span>
          <img src={print} style={{ height: '1.5rem' }} className="hover-image" />
        </span>
        <span>
          <img src={A} style={{ height: '1.5rem' }} className="hover-image" />
        </span>
        <span>
          <img src={brush} style={{ height: '1.5rem' }} className="hover-image" />
        </span>
        <span>
          <img src={hundred} style={{ height: '1.5rem' }} className="hover-image" />
        </span>
        <span>
          <img src={normal} style={{ height: '1.5rem' }} className="hover-image" />
        </span>
        <span>
          <img src={arial} style={{ height: '1.5rem' }} className="hover-image" />
        </span>
        <span>
          <img src={eleven} style={{ height: '1.5rem' }} className="hover-image" />
        </span>
        <span>
          <img src={bold} style={{ height: '1.9rem' }} className="hover-image" />
        </span>
        <span>
          <img src={link} style={{ height: '1.9rem' }} className="hover-image" />
        </span>
        <span>
          <img src={align} style={{ height: '1.9rem' }} className="hover-image" />
        </span>
        <span>
          <img src={edit} style={{ height: '1.8rem', marginLeft: '1.5rem' }} className="hover-image" />
        </span>
      </div>
    </>
  );
}

export default Header;






