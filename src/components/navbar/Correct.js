import React, { useState } from 'react';
import './navbar.css';
import './incorrect.css';
import Check from '../../images/login/tick-circle.png';

export default function IncorrectLogin() {
  const [show, setShow] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional logic can be added here if needed
  };

  return (
    <div
      className='login-container modal-background'
      onClick={() => setShow(false)}
    >
      <div
        className='modal-content incorrect-container'
        style={{ paddingTop: '40px' }}
      >
        <svg
          className='x-btn'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          onClick={() => setShow(false)}
        >
          <path
            d='M7.75732 16.2426L16.2426 7.75736'
            stroke='#1A1A1F'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M16.2426 16.2426L7.75732 7.75736'
            stroke='#1A1A1F'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
        <img src={Check} alt='Check Icon' />
        <h2 className='successful-h2'>წარმატებული ავტორიზაცია</h2>
        <form onSubmit={handleSubmit}>
          <div className='not-logged-in-text'></div>
          <button className='login-successful'>კარგი</button>
        </form>
      </div>
    </div>
  );
}
