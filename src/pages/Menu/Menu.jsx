import React from 'react';

const Menu = ({ items }) => {
  return (
    <>
      {items.map((menuItem) => {
        const { id, title, img, desc, price, ingredients } = menuItem;
        return (
          <div key={id} className='menu-item col-lg-6'>
            <img src={img} alt={title} className='menu-img' />
            <div className='menu-content'>
              <a href='#'>{title}</a>
              <span>${price}</span>
            </div>
            <p className='item-description'>{desc}</p>

            <div className='menu-ingredients'>{ingredients}</div>
          </div>
        );
      })}
    </>
  );
};

export default Menu;
