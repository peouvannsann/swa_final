import React from 'react'; 
import Form from './form';
import Message from './message';

import {Row, Col, Container} from 'react-bootstrap';


function Home (){ 
    return (
    
    <div>        
        <Container className='wrap-color'>

            <Row className="justify-content-sm-center">  
                    <Col md='auto'>
                    <div className='content-about'><button>GET IN TOUCH</button></div>
                    </Col>                
            </Row>
            <Row>
                <Col>
                    <Form title="GET IN TOUCH   "/> 
                </Col>
                <Col>
                    <Message/>
                </Col>
            </Row>
        </Container>
        
        
        
    </div> 
    );
} 
  
export default Home; 