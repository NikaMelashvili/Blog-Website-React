import React, { useState, useEffect } from 'react';
import './navbar.css';
import Logo from '../../images/LOGO-023.png';
import LoginForm from './LoginForm.js';
import Check from '../../images/login/tick-circle.png';

export default function NavbarLogin() {
  const emailApi = 'https://api.blog.redberryinternship.ge/api/login';

  const [show, setShow] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [loginReqSent, setLoginReqSent] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (loginReqSent) {
      fetch(emailApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer your_access_token_here',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ email: emailInput }),
      })
        .then((res) => {
          if (res.status === 204) {
            setSuccessful(true);
            setShow(true);
          } else {
            setSuccessful(false);
            setShow(true);
          }
          return res.json();
        })
        .then((data) => setEmail(data.email))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [loginReqSent, emailInput]);

  const handleChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
  };

  return (
    <nav className='nav'>
      <div>
        <img className='logo' src={Logo} alt='Redberry Logo' />
      </div>
      <div>
        <button
          className='login'
          onClick={() => {
            setShow(true);
            setLoginReqSent(true);
          }}
        >
          {successful === true ? 'დაამატე ბლოგი' : 'შესვლა'}
        </button>
        {show === true && loginReqSent === true && (
          <div
            className='login-container modal-background'
            onClick={() => setShow(false)}
          >
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
              {successful === true ? (
                <div
                  className='login-container modal-background'
                  onClick={() => setShow(false)}
                >
                  <div
                    className='modal-content incorrect-container'
                    style={{ paddingTop: '40px' }}
                  >
                    <img src={Check} alt='Check Icon' />
                    <h2 className='successful-h2'>წარმატებული ავტორიზაცია</h2>
                    <form onSubmit={handleSubmit}>
                      <div className='not-logged-in-text'></div>
                      <button className='login-successful'>კარგი</button>
                    </form>
                  </div>
                </div>
              ) : (
                <div
                  className='login-container modal-background'
                  onClick={() => setShow(false)}
                >
                  <div
                    className='modal-content incorrect-container'
                    style={{ paddingTop: '40px' }}
                  >
                    <h2>შესვლა</h2>
                    {/* Your form content */}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
