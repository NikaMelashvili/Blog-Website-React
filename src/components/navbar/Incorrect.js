import React, { useState } from 'react';
import './navbar.css';
import './incorrect.css';

export default function Incorrect() {
  const [show, setShow] = useState(false);
  return (
    <div
      className='login-container modal-background'
      onClick={() => setShow(false)}
    >
      <div
        className='modal-content incorrect-container'
        style={{ paddingTop: '40px' }}
      >
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
            className={`not-logged-in`}
          ></input>
          <div className='not-logged-in-text'>
            <p>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                style={{ verticalAlign: 'middle', marginRight: '5px' }}
              >
                <path
                  d='M10.0002 1.66666C5.41683 1.66666 1.66683 5.41666 1.66683 10C1.66683 14.5833 5.41683 18.3333 10.0002 18.3333C14.5835 18.3333 18.3335 14.5833 18.3335 10C18.3335 5.41666 14.5835 1.66666 10.0002 1.66666Z'
                  fill='#EA1919'
                />
                <path
                  d='M10 13.3333L10 9.16666'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M10.0044 6.66667L9.99691 6.66667'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              ელ-ფოსტა არ მოიძებნა
            </p>
          </div>
          <button className='login-inner' type='submit'>
            შესვლა
          </button>
        </form>
      </div>
    </div>
  );
}
