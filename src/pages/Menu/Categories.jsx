import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <li
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </li>
        );
      })}
    </div>
  );
};

export default Categories;
