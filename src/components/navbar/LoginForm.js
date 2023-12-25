import React, { useState } from 'react';
import './navbar.css';

export default function LoginForm() {
  const [show, setShow] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [unseccessful, setUnsuccessful] = useState(false);
  const [email, setEmail] = useState([]);
  const [emailInput, setEmailInput] = useState('');
  const [loginReqSent, setLoginReqSent] = useState(false);
  return (
    <div
      className='login-container modal-background'
      onClick={() => setShow(false)}
    >
      <div class='modal-content' onClick={(e) => e.stopPropagation()}>
        <h2>შესვლა</h2>
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
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16.2426 16.2426L7.75732 7.75736'
            stroke='#1A1A1F'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <form>
          <label>ელ-ფოსტა</label>
          <input
            placeholder='Example@redberry.ge'
            className={`label-for-email`}
          ></input>
          <button type='submit'>შესვლა</button>
        </form>
      </div>
    </div>
  );
}
