import React from 'react';
import './blog.css';
import blogs from '../../blogs-library';
import Blog from './Blog';

const BlogGrid = () => {
  return (
    <div className='post-grid'>
      {blogs.map((post) => (
        <Blog
          key={post.id}
          img={post.img}
          author={post.author}
          date={post.date}
          title={post.title}
          categories={post.category}
          content={post.desc}
        />
      ))}
    </div>
  );
};

export default BlogGrid;
