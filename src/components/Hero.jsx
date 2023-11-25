import Slider from './Slider/index';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <div id='hero' className='hero  align-items-center section-bg'>
        <div className='container-fluid'>
          <div className='row hero-row '>
            <div className='hero-info col-lg-5 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start'>
              <h2 className='hero-text'>
                <span>Enjoy Your Healthy</span>
                <br />
                Delicious Food
              </h2>
              <p className='hero-text-2'>
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                eveniet. Eum quas beatae cumque eum quaerat.
              </p>
              <div
                className='explore-btn d-flex'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <a href='#menu'>
                  Explore Menu <FaArrowRight />
                </a>
              </div>
            </div>

            <div className='col-lg-7  slider'>
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
