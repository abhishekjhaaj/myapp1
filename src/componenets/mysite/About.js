import React, { useEffect } from 'react'
import { Card } from 'reactstrap';
// import im1 from '../../images/35.jpg';
import im2 from '../../images/5.jpg';
import im3 from '../../images/uploads/maxresdefault.jpg';

function About() {
    useEffect(()=>{
        document.title='Exceptional Panacea Solutions|About';
      })
  return (
    <>
    <div style={{backgroundColor: "#e0e0e0"}}>
              <div className="container-fluid" style={{
                  backgroundPosition: 'center', backgroundRepeat: 'no-repeat', margin: '1px', height: '250px',
                  width: '100%', backgroundImage: `url(${im3})`, filter: 'blur(0)'
              }}>
                  <h1 style={{ textAlign: "center", marginTop: 100 }}>
                      <font size="60" color="white">ABOUT US</font></h1>
              </div><div className="container-fluid" style={{ margin: 'auto', marginTop: 5 }}>
                      <div className="row">
                          <div className="col-md-6">
                          <Card className='text-center'>
                              <div className="head_title ">
                                

                                  <h1 style={{textAlign: 'center'}}>WHO WE ARE...?</h1></div>
                              <blockquote className="text-mute text-justify" 
                              style={{backgroundColor: 'white !important', fontFamily: 'times new roman'}}>
                                  <p>
                                      Exceptional Panacea Solution is located in Vadodara, It is in the website design, mobile design
                                      as well as making field for the past 6 years. We started with a simple idea in the creative industry
                                      and emerged into a leading full-service website company in Vadodara.
                                  </p>
                                  <p>
                                      Our talented team of website has been perfecting the art of website design, mobile design and
                                      other web solutions which you will cherish for lifetime.
                                  </p>
                                  <p>
                                      Exceptional Panacea Solution is a continuous learning process. We do lot of research before
                                      every design, development process so that we can exceed client’s expectations.
                                  </p>
                                  <p>
                                      We are the leading organization to offer our precious clients an optimum quality of website
                                      design, apps design, mobile website design and development for individuals as well as
                                      customized web solution for agencies and customers
                                  </p>
                              </blockquote>
                              </Card>

                          </div>
                          
                          <div className="col-md-6">
                            <Card>
                              <img src={im2} alt='' style={{marginTop:'auto', height:'375px', width:'100%'}} />
                              </Card>
                              </div>
                      </div>
                  </div>
                  <section id="trial" className="trial text-center wow fadeIn" data-wow-duration="2s" data-wow-dealy="1.5s" >
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
                  </section><div className="w3_agile_footer">
                      <div className="container-fluid" 
                      style={{backgroundColor: '#212121', textAlign: 'center'}}>
                          <p className="text-muted" 
                          style={{marginTop: 15}}><font size="3px">© 2018 | Developed by </font>
                          <a href="http://exceptionalpanaceasolutions.com/">Exceptional Panacea Solutions.</a></p>
                          <div className="arrow-container animated fadeInDown">
                              <a href="#home" className="arrow-2 scroll scrollToTop">
                                  <i className="fa fa-angle-up"></i>
                              </a>
                              <div className="arrow-1 animated hinge infinite zoomIn"></div>
                          </div>
                      </div>
                  </div>


    </div>
    </>
  )
}

export default About;