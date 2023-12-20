import React from 'react';
import './blog.css';

const Blog = (props) => {
  const { img, author, date, title, categories, content } = props;

  return (
    <div className='blog-post'>
      <img className='post-image' src={img} alt='Blog Post' />
      <div className='post-details'>
        <h2>{title}</h2>
        <p>Author: {author}</p>
        <p>Date: {date}</p>
        <p>Categories: {categories.join(', ')}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Blog;
