import React, { useState, useEffect } from 'react';
import './blog.css';

const Blog = () => {
  const api = 'https://api.blog.redberryinternship.ge/'; // API endpoint

  // State to hold the blog posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched posts
        setPosts(data.data); // Assuming the response has a similar structure to the given boilerplate
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [api]); // Include 'api' in the dependency array to re-fetch when 'api' changes

  return (
    <div>
      {posts.map((post) => (
        <div className='blog-post' key={post.id}>
          <img className='post-image' src={post.image} alt='Blog Post' />
          <div className='post-details'>
            <h2>{post.title}</h2>
            <p>Author: {post.author}</p>
            <p>Date: {post.publish_date}</p>
            <p>
              Categories:{' '}
              {post.categories.map((category) => category.name).join(', ')}
            </p>
            <p>{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
