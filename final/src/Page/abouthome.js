import { React } from "react";
import {Container,Row, Col} from 'react-bootstrap';

import Kmeow from '../image/kmeow.jpg'; 

function About() {
    return (
        <Container className='abouthomepage'>
            <Row className="justify-content-sm-center">  
                <Col md='auto'>
                <div className='content-about'><button>ABOUT US</button></div>
                </Col>
                
            </Row>
            <Row>
            <Col md={6} className='img-kmeow'>
                <img src={Kmeow}></img>
            </Col>
            <Col md={6}>
            <div><h3>For the next season</h3></div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat.</div>
            </Col>

            </Row>
        </Container>

    );
}
export default About;