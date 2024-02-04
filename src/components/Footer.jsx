import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () =>{
	return(
	<footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-geo-alt icon" />
              <div>
                <h4>Address</h4>
                <p>
                  <h5>Our Address</h5>
                <p>A108 Mombasa Road, Nairobi Kenya</p>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links d-flex">
              <i className="bi bi-telephone icon" />
              <div>
                <h4>Reservations</h4>
                <p>
                  <strong>Phone:</strong> +254 7124 92490<br />
                  <strong>Email:</strong> info@DelighfulRestaurant.com<br />
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links d-flex">
              <i className="bi bi-clock icon" />
              <div>
                <h4>Opening Hours</h4>
                <p>
                  <strong>Mon-Sat: 11AM</strong> - 23PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
                <FaTwitter  className='icon'/>
                <FaFacebook className='icon' />
                <FaInstagram className='icon'/>
                <FaLinkedin className='icon'/>
              </div>
            </div>
          </div>
        </div>
         </footer>)
}
export default Footer;