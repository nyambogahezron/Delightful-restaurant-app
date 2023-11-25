import { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
import { FaBraille } from 'react-icons/fa';

function Menu2() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div id='menu' className='menu section-bg'>
      <div className='container-fluid'>
        <div className='title-container '>
          <div className='section-title'>Menu</div>
          <span>
            <FaBraille />
          </span>
        </div>
        <Menu2 />
        <p className='menu-min-title pt-3'>Check Our Tasty Menu</p>

        <div className='row mt-4 mb-4'>
          <div className='col-lg-12 d-flex justify-content-center'>
            <ul id='menu-filters'>
              <Categories categories={categories} filterItems={filterItems} />
              {/* <li className='filter-active'> All </li> */}
            </ul>
          </div>
        </div>

        <div className='row menu-container'>
          <Menu items={menuItems} />
        </div>
      </div>
    </div>
  );
}

export default Menu2;
