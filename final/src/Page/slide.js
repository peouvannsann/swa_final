import React, { Component } from "react";
import { Slide } from 'react-slideshow-image'

import img1 from '../image/slide_show/j1.jpg';
import img2 from '../image/slide_show/j2.jpg';
import img3 from '../image/slide_show/j3.jpg';
import img4 from '../image/slide_show/j4.jpg';
import img5 from '../image/slide_show/j5.jpg';
import img6 from '../image/slide_show/j6.jpg';


const proprietes = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
  return (
      <div className="container-fluid">
           <Slide {...proprietes}>
              <div className="each-slide">
                  <div>
                      <img src={img1} alt="img1" />
                  </div>
              </div>
              <div className="each-slide">
                  <div>
                      <img src={img2} alt="img2" />
                  </div>
              </div>
              <div className="each-slide">
                  <div>
                      <img src={img3} alt="img3" />
                  </div>
              </div>
              <div className="each-slide">
                  <div>
                      <img src={img4} alt="img3" />
                  </div>
              </div>
              <div className="each-slide">
                  <div>
                      <img src={img5} alt="img3" />
                  </div>
              </div>
              <div className="each-slide">
                  <div>
                      <img src={img6} alt="img3" />
                  </div>
              </div>
          </Slide>
      </div>
  )
}

export default Slideshow;