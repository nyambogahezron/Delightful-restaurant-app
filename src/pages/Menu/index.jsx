import { FaBraille } from 'react-icons/fa';
import Specials from "../../components/Specials";
import Chefs from '../../components/Chefs';
import { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function MenuSection() {
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
    <>
    <div id='menu' className='menu section-bg'>
      <div className='container-fluid'>
        <div className='title-container '>
          <div className='section-title'>Menu</div>
          <span>
            <FaBraille />
          </span>
        </div>
          <p className='menu-min-title pt-3'>Check Our Tasty Menu</p>

        <div className='row mt-4 mb-4'>
          <div className='col-lg-12 d-flex justify-content-center'>
            <ul id='menu-filters'>
              <Categories categories={categories} filterItems={filterItems} />
            </ul>
          </div>
        </div>

        <div className='row col-lg-12 menu-container'>
          <Menu items={menuItems} />
        </div>
      </div>
    </div>
    <Specials />
    <Chefs />
    </>
  );
}

export default MenuSection;
