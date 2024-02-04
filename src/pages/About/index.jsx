import { FaBraille, FaCaretRight } from 'react-icons/fa';
const About = () => {
  return (
    <>
      <div className='section container-fluid about' id='about'>
        <div className='title-container '>
          <div className='section-title'>About us</div>
          <span>
            <FaBraille />
          </span>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-7 col-md-7 col-xs-12'>
              <div className='left-text-content'>
                <div className='about-heading'>
                  <h2>We Leave A Delicious Memory For You</h2>
                </div>
                <p>
                  Delightful is one of the best and perfect place to experience
                  a small part of Kenya’s natural beauty - guests can bird
                  watch, take guided colobus monkey walks, or just sit back to
                  enjoy an intimate lunch followed by a walk or bike ride in the
                  expansive forest. There is simply nowhere like it in Nairobi.
                  asha Café is located inside island game park-lake Naisha, one
                  of the world’s largest game park .Delightful is an al fresco,
                  all-day dining restaurant boasting panoramic lake views, with
                  wide, open spaces and high ceilings. It is simple and
                  welcoming, incorporating a menu that takes advantage of
                  Kenya’s wonderful produce. The menu features continental, à la
                  carte fare including an all-day breakfast. Welcome to Delightful
                  Restaurant.
                </p>
                <div className='row about-images-2'>
                  <div className='col-4'>
                    <img src='images/specials-1.png' />
                  </div>
                  <div className='col-4'>
                    <img src='images/specials-2.png' />
                  </div>
                  <div className='col-4'>
                    <img src='images/specials-3.png' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-md-5 col-xs-12 mt-5'>
              <div className='right-content'>
                <div className='thumb'>
                  <a rel='nofollow' href='' target='_blank'>
                    <FaCaretRight />
                  </a>
                  <img src='images/item-4.jpeg' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* why us section  */}

      <div id='why-us' className='why-us mt-5'>
        <div className='container-fluid'>
          <div className='why-us-title-container'>
            <h2 className='why-us-title'>Why Us</h2>
            <p>Why Choose Our Restaurant</p>
          </div>

          <div className='row'>
            <div className='col-lg-4'>
              <div className='box' data-aos='zoom-in'>
                <span>01</span>
                <h4>Lorem Ipsum</h4>
                <p>
                  Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                  consectetur ducimus vero placeat
                </p>
              </div>
            </div>

            <div className='col-lg-4 mt-4 mt-lg-0'>
              <div className='box' data-aos='zoom-in' data-aos-delay='200'>
                <span>02</span>
                <h4>Repellat Nihil</h4>
                <p>
                  Dolorem est fugiat occaecati voluptate velit esse. Dicta
                  veritatis dolor quod et vel dire leno para dest
                </p>
              </div>
            </div>

            <div className='col-lg-4 mt-4 mt-lg-0'>
              <div className='box' data-aos='zoom-in' data-aos-delay='300'>
                <span>03</span>
                <h4> Ad ad velit qui</h4>
                <p>
                  Molestiae officiis omnis illo asperiores. Aut doloribus vitae
                  sunt debitis quo vel nam quis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
