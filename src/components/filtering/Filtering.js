import React, { useState, useEffect } from 'react';
import './filtering.css';

export default function Filtering() {
  const categoryApi = 'https://api.blog.redberryinternship.ge/api/categories';
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch(categoryApi, {
      method: 'GET',
      headers: {
        'access-control-allow-origin': '*',
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 1650e0888c3ec039725f7d3ca79b33821d1e74e22bd2126b75851c9ec2c9087e',
      },
    })
      .then((res) => res.json())
      .then((data) => setFilter(data.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='container-filter'>
      {filter.length > 0 && (
        <ul className='filter-body'>
          {filter.map((category) => (
            <li
              key={category.id}
              style={{
                backgroundColor: category.background_color,
                color: category.text_color,
              }}
              id={category.id}
              className='filter-choices'
            >
              {category.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
