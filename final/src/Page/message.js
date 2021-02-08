import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';



class Grid extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className='mess-content'>EMAIL</div>
                <div className='mess-text'>pvannsann@puthsiastra.edu.kh</div>
                <div className='mess-content'>PHONE</div>
                <div className='mess-text'>+88 967152222</div>
                <div className='mess-content'>ADDRESS</div>
                <div className='mess-text'>..............</div>
                <div className='mess-text'>..............</div>
                <div className='mess-text'>..............</div>

            </React.Fragment>
            

        );
    }
}

export default Grid;