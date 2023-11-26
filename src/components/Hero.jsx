import Slider from './Slider/index';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
      <div id='hero' className='hero  align-items-center section section-bg'>
        <div className='container-fluid'>
          <div className='row hero-row '>
            <div className='hero-info col-lg-5 d-flex flex-column justify-content-space align-items-center
             align-items-lg-start text-center text-lg-start'>
              <h2 className='hero-text'>
                <span>Enjoy Your Healthy</span>
                <br />
                <span>Delicious Food</span>
              </h2>
              <p className='hero-text-2'>
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                eveniet. Eum quas beatae cumque eum quaerat.
              </p>

              <div className='home-btns'> 
               <div
                className='explore-btn d-flex'              
              >
                
                  <a href='#menu'>
                  Explore Menu <FaArrowRight />
                </a>
                
              </div>
             <div className=' btn-min-service '>
                 <div
                className='explore-btn d-flex'              
              >
                
                  <a href='booking'>
                  Book Service <FaArrowRight />
                </a>
                
              </div>
             </div>
              </div>
             
            </div>

            <div className='col-lg-7  slider'>
              <Slider />
            </div>
          </div>
        </div>
      </div>

  );
};
export default Hero;
