import React from 'react';
import canvas from '../images/canvas.png';

export default function RulerContainer() {
  return (
    <div>
      <img src={canvas} style={{height:'40rem',width:'80rem',justifyContent:'center',cursor:'text',marginLeft:'3rem'}}/> 
    </div>
  )
}
