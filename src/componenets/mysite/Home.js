import React, { useEffect } from 'react';

import img2 from '../../images/5.jpg';
import img1 from '../../images/uploads/Auteur-zonder-foto-1.png';
import img3 from '../../images/uploads/images.png';
import img4 from '../../images/uploads/index.png';
import img5 from '../../images/uploads/images.png';
// import $ from 'jquery';
import { Card } from 'reactstrap';
import Footer from '../Footer';
import HomeCarousel from './HomeCarousel';
function Home() {
  useEffect(()=>{
    document.title='Exceptional Panacea Solutions|Home';
  })
    return (
        <>
           <hr/>
           <Card
            // className="my-2"
            color="primary"
            outline
            style={{
              width: '100%',height:'40px', marginTop:'10px'
            }}
             >
           <HomeCarousel />
           </Card>
           
            <section className="about" id="about" >
                <div className="container-fluid" style={{margin:'auto', marginTop: '85px'}}>
                    <div className="row">


                        <div className="col-md-6">
                            <Card >
                            <div className="head_title ">
                            {/* <h1 style={{ textAlign: "center", marginTop: 100 }}>
                            <font size="60" color="white">ABOUT US</font> </h1> */}
                                <h1 style={{textAlign: 'center'}}>WHAT WE DO ..?</h1></div>
                                
                            <blockquote className="text-justify" 
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
                            </blockquote></Card>
                        </div>
                        

                        <div className="col-md-6"><Card>
                        {/* marginBottom: '2em' */}
                            <img src={img2} alt='' style={{marginTop: '5px',height:'400px',  width:'100%'}} />
                            </Card>  </div>

                    </div>
                </div>
            </section>

            {/* client section reviwe */}

            <div id="testimonials" className="testimonials">
                <div className="container">
                    <div className="agileits_w3layouts_heding test-heading">
                        <h3>What <span>Our Clients</span> Say</h3>
                    </div>
                    <div className="w3_agile_team_grids">
                        <section className="slider">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li>
                                        <div className="agile_testimonials_grid">
                                            <div className="agileits_w3layouts_testimonials_grid">
                                                <img src={img1} alt=" " className="img-responsive" />
                                            </div>
                                            <h3> <span>Gulshan Kumar<br /><h5>Executive chef</h5></span></h3>
                                            <p>Commendable job of photography by Ravi at our hotel The Orchid, Pune. Food gets extra shine through this artistic photography...</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="agile_testimonials_grid">
                                            <div className="agileits_w3layouts_testimonials_grid">
                                                <img src={img3} alt=" " className="img-responsive" />
                                            </div>
                                            <h3> <span>Chetan Gandhi<br /><h5>P.M.Shaha Foundation,Pune</h5></span></h3>
                                            <p>We are very pleased with the result and love the service that they provided.....</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="agile_testimonials_grid">
                                            <div className="agileits_w3layouts_testimonials_grid">
                                                <img src={img4} alt=" " className="img-responsive" />
                                            </div>
                                            <h3> <span>Bhushan Godbole<br /><h5>Founder & director Of Aryaamoney</h5></span></h3>
                                            <p>I have worked with Pride Creation on numerous projects, They are very co-operative,great job with photography,video shoot and editing needs..Thanks Once again...</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="agile_testimonials_grid">
                                            <div className="agileits_w3layouts_testimonials_grid">
                                                <img src={img5} alt=" " className="img-responsive" />
                                            </div>
                                            <h3> <span>Bhushan<br /><h5>Invent Production and Services Pvt. Ltd</h5></span></h3>
                                            <p>We have received good service from Pride Creation, whenever I gave a call at eleventh hrs to Raviji, he said no problem Bhushanji, We will do it, It's best part I guess, designing and creativity is amazing..and he is providing stuff within short time span.... </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>


            <Footer/>

        
    </>
  )
}

export default Home