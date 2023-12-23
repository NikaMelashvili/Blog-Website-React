import React, { useState, useEffect } from 'react';
import './navbar.css';
import '../login/login.css';
import Logo from '../../images/LOGO-023.png';

export default function Navbar() {
  const emailApi = 'https://api.blog.redberryinternship.ge/api/login';

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState([]);
  const [emailInput, setEmailInput] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [loginReqSent, setLoginReqSent] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginReqSent(() => true);

    fetch(emailApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 467aae0e7dc5314400e2de227aba35a5e9690e210af1f93136eb552975ebe9a9',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ email: emailInput }),
    })
      .then((res) => {
        setSuccessful((prevSuccessful) => res?.status === 204);
        setShow(!res?.status === 204);
        return res.json();
      })
      .then((data) => setEmail(data.email))
      .catch((error) => console.error('Error fetching data:', error));
  };
  const handleChange = (e) => {
    setEmailInput(e.target.value);
  };

  return (
    <nav className='nav'>
      <div>
        <img className='logo' src={Logo} alt='Redberry Logo' />
      </div>
      <div>
        <button className='login' onClick={() => setShow(true)}>
          შესვლა
        </button>
        {loginReqSent === true && (
          <h1>{successful === false && 'incorect credentials'}</h1>
        )}
        {show === true && (
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
              <form>
                <label>ელ-ფოსტა</label>
                <input
                  placeholder='Example@redberry.ge'
                  className='label-for-email'
                  value={emailInput}
                  onChange={handleChange}
                ></input>
                <button type='submit' onClick={handleLogin}>
                  შესვლა
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
