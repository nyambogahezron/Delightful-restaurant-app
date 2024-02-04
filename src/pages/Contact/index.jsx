import {
  FaBraille,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCreativeCommonsShare,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="contact section container-fluid">
      <div className="container-fluid">
        <div className="title-container ">
          <div className="section-title">Contact Us</div>
          <span>
            <FaBraille />
          </span>
        </div>

        <div className="mb-5 row gy-4">
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <span className="icon">
                <FaMapMarkerAlt />
              </span>

              <div>
                <h3>Our Address</h3>
                <p>A108 Mombasa Road, Nairobi Kenya</p>
              </div>
            </div>
          </div>
          {/* End Info Item */}
          <div className="col-md-6">
            <div className="info-item d-flex align-items-center">
              <span className="icon">
                <FaEnvelope />
              </span>
              <div>
                <h3>Email Us</h3>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
          {/* End Info Item */}
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <span className="icon">
                <FaPhone />
              </span>
              <div>
                <h3>Call Us</h3>
                <p>+254 7124 92490</p>
              </div>
            </div>
          </div>
          {/* End Info Item */}
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <span className="icon">
                <FaCreativeCommonsShare />
              </span>

              <div>
                <h3>Opening Hours</h3>
                <div>
                  <strong>Mon-Sat:</strong> 11AM - 23PM;
                  <strong>Sunday:</strong> Closed
                </div>
              </div>
            </div>
          </div>
          {/* End Info Item */}
        </div>
        <form className="contact-form mt-5 p-3 p-md-4">
          <div className="row">
            <div className="col-xl-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-xl-6 form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              rows={5}
              placeholder="Message"
              required
              defaultValue={""}
            />
          </div>

          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
        {/*End Contact Form */}
      </div>
    </div>
  );
};
export default Contact;
