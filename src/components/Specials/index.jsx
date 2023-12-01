import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight, FaBraille } from 'react-icons/fa';
import SpecialsTabs from './data';

const Specials = () => {
  const [value, setValue] = useState(0);
  const [tabs, setTabs] = [SpecialsTabs[value]];

  const { id, tabTitle, title, category, desc, img } = SpecialsTabs[value];

  return (
    <div id='specials' className='specials mt-4 mb-5'>
      <div className=' container-fliud'>
        <div className='title-container '>
          <div className='section-title'>Our Specials</div>
          <span>
            <FaBraille />
          </span>
        </div>
        <div className='row tabs-container'>
          <div className=' tabs col-lg-3'>
            {SpecialsTabs.map((item, index) => {
              return (
                <div key={index}>
                  <div className='nav-tabs'>
                    <button
                      key={item.id}
                      onClick={() => setValue(index)}
                      className={`tab-link ${index === value && 'active'}`}
                    >
                      {item.tabTitle}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='col-lg-9 mt-4 mt-lg-0'>
            <div className='tab-content'>
              <div className=' ' id={`tab +${id}`}>
                <div className='row tabs-container-details'>
                  <div className='col-lg-8 details order-2 order-lg-1'>
                    <h3>{title}</h3>
                    <p className='fst-italic'>{category}</p>
                    <p>{desc}</p>
                  </div>
                  <div className='specialImg col-lg-4 text-center order-1 order-lg-2'>
                    <img src={img} alt={title} className='img-fluid' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
