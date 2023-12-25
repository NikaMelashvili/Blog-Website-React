import React, { useState, useEffect } from 'react';
import './blog.css';
import '../filtering/filtering.css';

const Blog = () => {
  const api = 'https://api.blog.redberryinternship.ge/api';

  // State to hold the blog posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(api + '/blogs', {
      headers: {
        Authorization:
          'Bearer 467aae0e7dc5314400e2de227aba35a5e9690e210af1f93136eb552975ebe9a9',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const categoryApi = 'https://api.blog.redberryinternship.ge/api/categories';
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch(categoryApi, {
      method: 'GET',
      headers: {
        'access-control-allow-origin': '*',
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 467aae0e7dc5314400e2de227aba35a5e9690e210af1f93136eb552975ebe9a9',
      },
    })
      .then((res) => res.json())
      .then((data) => setFilter(data.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='post-grid'>
      {posts.map((post) => (
        <div className='blog-post' key={post.id}>
          <img className='post-image' src={post.image} alt='Blog Post' />
          <div className='post-details'>
            <p className='author'>{post.author}</p>
            <p className='date'>{post.publish_date}</p>
            <h2 className='title'>{post.title}</h2>
            <div className='category-section'>
              {' '}
              {post.categories.map((category, filter) =>
                category.id === filter.id ? (
                  <ul key={post.id} className='choice-wrapper'>
                    <li
                      style={{
                        backgroundColor: category.background_color,
                        color: category.text_color,
                      }}
                      id={category.id}
                      className='filter-choices filter-choices--1'
                    >
                      {category.title}
                    </li>
                  </ul>
                ) : (
                  <il class='choice-wrapper'>
                    <li
                      key={category.id}
                      style={{
                        backgroundColor: category.background_color,
                        color: category.text_color,
                      }}
                      id={category.id}
                      className='filter-choices filter-choices--1'
                    >
                      {category.title}
                    </li>
                  </il>
                ),
              )}
            </div>
            <p className='desc'>{post.description}</p>
            <a className='view-more'>
              სრულად ნახვა{' '}
              <svg
                width='10'
                height='10'
                viewBox='0 0 10 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.934514 8.00519C0.64162 8.29809 0.64162 8.77296 0.934514 9.06585C1.22741 9.35875 1.70228 9.35875 1.99517 9.06585L0.934514 8.00519ZM9.28591 1.46446C9.28591 1.05024 8.95012 0.714455 8.53591 0.714455L1.78591 0.714455C1.3717 0.714455 1.03591 1.05024 1.03591 1.46445C1.03591 1.87867 1.3717 2.21445 1.78591 2.21445H7.78591V8.21445C7.78591 8.62867 8.1217 8.96445 8.53591 8.96445C8.95013 8.96445 9.28591 8.62867 9.28591 8.21445L9.28591 1.46446ZM1.99517 9.06585L9.06624 1.99478L8.00558 0.934125L0.934514 8.00519L1.99517 9.06585Z'
                  fill='#5D37F3'
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
