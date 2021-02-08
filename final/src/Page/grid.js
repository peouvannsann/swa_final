import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Alert } from 'react-st-modal';
import Fadeslide from './fadeslide';

import image1 from '../image/items/img01 (1).jpg';
import image2 from '../image/items/img01 (10).jpg';

class Grid extends React.Component{

    state = {
        img: image1
    };

    render(){
        return (
            <Container className='wrape'>
                <Row className="justify-content-sm-center">  
                    <Col md='auto'>
                    <div className='content-about'><button>Shop Here</button></div>
                    </Col>                
                </Row>
                <Row >
                    <Col className="col-border" md={4} >
                    <img src={this.state.img}
                        onMouseEnter={() => {
                            this.setState({
                            img:
                                image2
                            });
                        }}
                        onMouseOut={() => {
                            this.setState({
                            img: image1
                            });
                        }}
                        onClick={async () => {
                        await Alert(<Fadeslide/>);
                        }}
                        />

                        <div class='price'><a href='#'>PRICE: 100$</a></div>
                        <div class='price'><a href='#'>SIZE:  40 - 45</a></div>
                    </Col>
                    <Col className="col-border" md={4}>
                        <img src={image1}></img>
                        <div class='price'><a href='#'>PRICE: 100$</a></div>
                        <div class='price'><a href='#'>SIZE:  40 - 45</a></div>
                    </Col>
                    <Col className="col-border" md={4}>
                        <img src={image1}></img>
                        <div class='price'><a href='#'>PRICE: 100$</a></div>
                        <div class='price'><a href='#'>SIZE:  40 - 45</a></div>
                    </Col>
                </Row>

                <Row >
                <Col className="col-border" md={4} >
                        <img src={image1}></img>
                        <div class='price'><a href='#'>PRICE: 100$</a></div>
                        <div class='price'><a href='#'>SIZE:  40 - 45</a></div>
                    </Col>
                    <Col className="col-border" md={4}>
                        <img src={image1}></img>
                        <div class='price'><a href='#'>PRICE: 100$</a></div>
                        <div class='price'><a href='#'>SIZE:  40 - 45</a></div>
                    </Col>
                    <Col className="col-border" md={4}>
                        <img src={image1}></img>
                        <div class='price'><a href='#'>PRICE: 100$</a></div>
                        <div class='price'><a href='#'>SIZE:  40 - 45</a></div>
                    </Col>
                </Row>

                <Row >
                    <Col className="col-border" md={4} >
                        <img src={image1}></img>
                        <div class='price'><a href='#'>PRICE: 100$</a></div>
                        <div class='price'><a href='#'>SIZE:  40 - 45</a></div>
                    </Col>
                    <Col className="col-border" md={4}>
                        <img src={image1}></img>
                        <div class='price'><a href='#'>PRICE: 100$</a></div>
                        <div class='price'><a href='#'>SIZE:  40 - 45</a></div>
                    </Col>
                    <Col className="col-border" md={4}>
                        <img src={image1}></img>
                        <div class='price'><a href='#'>PRICE: 100$</a></div>
                        <div class='price'><a href='#'>SIZE:  40 - 45</a></div>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Grid;