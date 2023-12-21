import React from 'react';
import './BlogBody.css';
import BlogPic from '../../images/Blog-1024x3551.png';

export default function BlogBody() {
  return (
    <div className='container-body'>
      <div>
        <h1 className='blog-title'>ბლოგი</h1>
      </div>
      <div>
        <img className='blog-img' src={BlogPic} alt='Blog' />
      </div>
    </div>
  );
}
