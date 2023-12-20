import React from 'react';
import './BlogBody.css';

export default function BlogBody() {
  return (
    <div className='container-body'>
      <div>
        <h1 className='blog-title'>ბლოგი</h1>
      </div>
      <div>
        <img
          className='blog-img'
          src='/images/Blog-1024x355 1.png'
          alt='Blog'
        />
      </div>
    </div>
  );
}
