import React, { useState } from 'react';
import './navbar.css';
import Login from '../login/login';
import Logo from '../../images/LOGO-023.png';

export default function Navbar() {
  const api = 'https://api.blog.redberryinternship.ge/api'; // API endpoint

  const [showModal, setShowModal] = useState(false);
  const [inputEmail, setInputEmail] = useState('');
  const [show, setShow] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true); // Show the modal window on button click
  };

  const handleEmailSubmit = () => {
    // Perform login logic with the entered email (inputEmail)
    console.log('Submitted Email:', inputEmail);

    fetch(api + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 1650e0888c3ec039725f7d3ca79b33821d1e74e22bd2126b75851c9ec2c9087e',
      },
      body: JSON.stringify({ email: inputEmail }), // Assuming the API expects email in this format
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Login successful:', data); // Log the successful response
        // Handle the response data here
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });

    setShowModal(false); // Close the modal after submitting
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
        {show == true && <Login />}
        {/* Modal for email input */}
        {showModal && (
          <div className='modal'>
            <div className='modal-content'>
              <span className='close' onClick={() => setShowModal(false)}>
                &times;
              </span>
              <h2>Enter Email</h2>
              <input
                type='email'
                placeholder='Enter your email'
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
              <button onClick={handleEmailSubmit}>Submit</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

//  return (
//    <nav className='nav'>
//      <div>
//        <img
//          className='logo'
//          src='../../../src/images/LOGO-02 3.png'
//          alt='Redberry Logo'
//        />
//      </div>
//      <div>
//        <button className='login'>შესვლა</button>
//      </div>
//    </nav>
//  );
