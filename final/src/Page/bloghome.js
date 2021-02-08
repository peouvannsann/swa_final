import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import blog1 from '../image/blog-04.jpg';
import blog2 from '../image/blog-05.jpg';
import blog3 from '../image/blog-06.jpg';


class Grid extends React.Component{
    render(){
        return (
            <Container>

                <Row className="justify-content-sm-center">  
                    <Col md='auto'>
                    <div className='content-about'><button>BLOG ON MEDIA</button></div>
                    </Col>                
                </Row>

                <Row >
                    <Col className="col-blog" md={4} >
                        <img src={blog1}></img>
                        <div class='blog-text'><a href='#'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ab unde sit, similique reiciendis at quis quod adipisci rem amet animi, eius, fugiat quaerat aperiam eligendi assumenda aut laboriosam accusantium?</a></div>
                    </Col>
                    <Col className="col-blog" md={4}>
                        <img src={blog2}></img>
                        <div class='blog-text'><a href='#'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ab unde sit, similique reiciendis at quis quod adipisci rem amet animi, eius, fugiat quaerat aperiam eligendi assumenda aut laboriosam accusantium?</a></div>
                    </Col>
                    <Col className="col-blog" md={4}>
                        <img src={blog3}></img>
                        <div class='blog-text'><a href='#'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ab unde sit, similique reiciendis at quis quod adipisci rem amet animi, eius, fugiat quaerat aperiam eligendi assumenda aut laboriosam accusantium?</a></div>
                    </Col>
                </Row>

                

            </Container>
        );
    }
}

export default Grid;