import React from 'react'

function Footer() {
  return (
    <>
    <div className="w3_agile_footer">
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
    </>
  )
}

export default Footer