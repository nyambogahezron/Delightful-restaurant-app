import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <div key={id} className='menu-item'>
            <img src={img} alt={title} className='menu-img' />
            <div className='menu-content'>
              <a href='#'>{title}</a>
              <span>${price}</span>
            </div>
            <p className='item-text'>{desc}</p>

            <div className='menu-ingredients '>
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
