import {
  FaBraille,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const Chefs = () => {
  return (
    <div id='chefs' className='chefs container-fluid'>
      <div className='container-fluid'>
        <div className='title-container '>
          <div className='section-title'>Our Chefs</div>
          <span>
            <FaBraille />
          </span>
        </div>
        <p className='section-min-title'>Our Professional Chefs</p>

        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <div className='member'>
              <img
                src='images/chefs/chefs-1.jpg'
                className='img-fluid'
                alt=''
              />
              <div className='member-info'>
                <div className='member-info-content'>
                  <h4>Walter White</h4>
                  <span>Master Chef</span>
                </div>
                <div className='social'>
                  <a href=''>
                    <FaTwitter />
                  </a>
                  <a href=''>
                    <FaFacebook />
                  </a>
                  <a href=''>
                    <FaInstagram />
                  </a>
                  <a href=''>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className='member'>
              <img
                src='images/chefs/chefs-2.jpg'
                className='img-fluid'
                alt=''
              />
              <div className='member-info'>
                <div className='member-info-content'>
                  <h4>Sarah Jhonson</h4>
                  <span>Patissier</span>
                </div>
                <div className='social'>
                  <a href=''>
                    <FaTwitter />
                  </a>
                  <a href=''>
                    <FaFacebook />
                  </a>
                  <a href=''>
                    <FaInstagram />
                  </a>
                  <a href=''>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className='member'>
              <img
                src='images/chefs/chefs-3.jpg'
                className='img-fluid'
                alt=''
              />
              <div className='member-info'>
                <div className='member-info-content'>
                  <h4>William Anderson</h4>
                  <span>Cook</span>
                </div>
                <div className='social'>
                  <a href=''>
                    <FaTwitter />
                  </a>
                  <a href=''>
                    <FaFacebook />
                  </a>
                  <a href=''>
                    <FaInstagram />
                  </a>
                  <a href=''>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
