import { FaBraille } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className='container-fluid section services pt-2' id='services'>
      <div className='title-container '>
        <div className='section-title'>Our Services</div>
        <span>
          <FaBraille />
        </span>
      </div>
      <div className='service-title pt-2 mx-2'>
        This are the services we over
      </div>
      <div className='services-container'>
        <div className='services-cards'>
          <div className='card'>
            <div className='image-content'>
              <span className='overlay'></span>
              <div className='card-image'>
                <img src='images/events-bg.jpg' alt='' className='card-img' />
              </div>
            </div>
            <div className='card-content'>
              <h2 className='service-name'>Events</h2>
              <p className='service-desc'>
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>
              <button className='btn btn-primary'>
                <a href='services/events'>View More</a>
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='image-content'>
              <span className='overlay'></span>
              <div className='card-image'>
                <img src='images/gallery-1.jpg' alt='' className='card-img' />
              </div>
            </div>
            <div className='card-content'>
              <h2 className='service-name'>Resevation</h2>
              <p className='service-desc'>
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>
              <button className='btn btn-primary'>
                <a href='services/events'>View More</a>
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='image-content'>
              <span className='overlay'></span>
              <div className='card-image'>
                <img src='images/gallery-7.jpg' alt='' className='card-img' />
              </div>
            </div>

            <div className='card-content'>
              <h2 className='service-name'>Meetings and Conferance</h2>
              <p className='service-desc'>
                The lorem text the section that contains header with having open
                functionality. Lorem dolor sit amet consectetur adipisicing
                elit.
              </p>
              <button className='btn btn-primary'>View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
