import React from 'react';

export default function Navbar() {
  return (
    <nav className='nav'>
      <div>
        <img
          className='logo'
          src={'./public/images/LOGO-02 3.png'}
          alt='Redberry Logo'
        />
      </div>
      <div>
        <button className='login'>შესვლა</button>
      </div>
    </nav>
  );
}
