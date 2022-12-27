import React, { useEffect } from 'react'
// import im1 from '../../images/35.jpg';
import im2 from '../../images/uploads/maxresdefault.jpg';
import ContactForm from './ContactForm';
function Contact() {
  useEffect(()=>{
    document.title='Exceptional Panacea Solutions|Contact';
  })
  return (
    <>
      <div style={{ backgroundColor: '#e0e0e0' }}>

        <div className="container-fluid" style={{
          backgroundPosition: 'center', backgroundRepeat: 'no-repeat', margin: '1px', height: '250px',
          width: '100%', backgroundImage: `url(${im2})`, filter: 'blur(0px)'}}>
          <h1 style={{ textAlign: 'center', marginTop: '150px' }}><font size="60px" color="white" >CONTACT US</font></h1>
        </div>

        <div>
          <div className="container-fluid" style={{ height: '70px', width: '100%' }}>

          </div>
          <div className="contact-area">
            <div className="container">
              <div className="row">
                {/* <!-- contact-info start --> */}
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="contact-info">
                    <h3>Contact info</h3>
                    <ul>
                      <li>
                        <i className="fa fa-map-marker"></i> <strong>Address</strong>
                        Exceptional Panacea Solutions ,
                        303, Vraj Residency
                        Near Air Force Station, Makarpura Road,
                        Baroda-390014.
                      </li>
                      <li>
                        <i className="fa fa-phone"></i> <strong>Phone</strong>
                        +91-7990583390 / +91-8788513923
                      </li>

                      <li>
                        <i className="fa fa-envelope"></i> <strong>Email</strong>
                        <a href="mailto:info@exceptionalpanaceasolutions.com">info@exceptionalpanaceasolutions.com</a>
                      </li>
                    </ul>
                    
                  </div>
                </div>
                {/* <!-- contact-info end --> */}
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="contact-form">
                    <h3><i className="fa fa-envelope-o"></i> Leave a Message</h3>
                    <div className="row">
                    <ContactForm/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.3030590888907!2d73.18317751440193!3d22.22857738536093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc58d3a41d8e9%3A0x2c0d19b26c6b2ef!2sExceptional%20Panacea%20Solutions!5e0!3m2!1sen!2sin!4v1638129935046!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
          </div>




         

          {/* <!-- //contact --> */}
          <section id="trial" className="trial text-center wow fadeIn" data-wow-duration="2s" data-wow-dealy="1.5s">
            <div className="main_trial_area">
              <div className="container">
                <div className="row">
                  <div className="main_trial">
                    <div className="col-md-12">
                      <h2><span>OUR GOAL</span> </h2>
                      <p>Our goal is to give you the best experience and to let your company grow on web so that you can
                        let go all your worries and enjoy the moment. We focus on optimized web solution so when you
                        flip the chapters of your life, you realize what you were feeling or what you did at the same time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        </div>
      </>
      )
}

      export default Contact;