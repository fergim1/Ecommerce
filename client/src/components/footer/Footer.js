import React from 'react';
import Redes from './Redes.png'
import './Footer.css';

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='Redes'>
        <img width="6%" height='6%' src={Redes}></img>
      </div>

      <div className='Copyright'>
        Move Now© 2020 Copyright
      </div>

    </div>
  )
}
