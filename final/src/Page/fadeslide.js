import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Container from 'react-bootstrap/Container';

import img1 from '../image/items/img01 (1).jpg';
import img2 from '../image/items/img01 (10).jpg';
import img3 from '../image/items/img01 (11).jpg';

const fadeImages = [
  img1,img2, img3
];

export default function App() {
  return (
    <div>
    <Container>
      <Fade>
          <div className="each-fade">
            <img src={fadeImages[0]} />
          </div>
          <div className="each-fade">
            <img src={fadeImages[1]} />
          </div>
          <div className="each-fade">
            <img src={fadeImages[2]} />
          </div>
      </Fade>
      <div>
      <p>Product Detial</p>
        <p>The 2020 edition of the Air Jordan 4 Retro OG ‘Fire Red’ brings back the classic colorway first released in 1989, 
        complete with the iconic Nike Air logo emblazoned on the heel. The rest of the build is recreated faithfully, 
        highlighted by a white leather upper with Fire Red detailing on the molded eyelets and outsole. 
        Other original details include a visible Air sole unit and tongue patch with a Jumpman logo and Flight script graphic.</p>
      </div>
    </Container>
      
    </div>
  );
}
