import React, { useState, useEffect } from 'react';
import './filtering.css';

export default function Filtering() {
  const categoryApi = 'https://api.blog.redberryinternship.ge/api/categories';
  const [filter, setFilter] = useState([]);
  const [clickedCategories, setClickedCategories] = useState([]);

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

  const handleClick = (categoryId) => {
    if (clickedCategories.includes(categoryId)) {
      setClickedCategories(clickedCategories.filter((id) => id !== categoryId));
    } else {
      setClickedCategories([...clickedCategories, categoryId]);
    }
  };

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
              onClick={() => handleClick(category.id)}
              className={`filter-choices ${
                clickedCategories.includes(category.id) ? 'clicked' : ''
              }`}
            >
              {category.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
