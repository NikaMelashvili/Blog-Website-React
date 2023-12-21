import React, { useState, useEffect } from 'react';
import './blog.css';
import Blog from './Blog';

const BlogGrid = () => {
  const api = 'https://api.blog.redberryinternship.ge/api'; // API endpoint

  // State to hold the blog posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(api + '/blogs', {
      headers: {
        Authorization:
          'Bearer 1650e0888c3ec039725f7d3ca79b33821d1e74e22bd2126b75851c9ec2c9087e',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='post-grid'>
      {posts ? (
        posts.map((post) => (
          <Blog
            key={post?.id}
            title={post.title}
            description={post.description}
            image={post.image}
            date={post.date}
            categories={post.categories}
            author={post.author}
            publish_date={post.publish_date}
          />
        ))
      ) : (
        <h1>Posts are loading...</h1>
      )}
    </div>
  );
};

export default BlogGrid;
