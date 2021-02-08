import React from 'react';
import ReactDOM from 'react-dom';

import Banner from '../image/banner_contact.jpg';
import Banner1 from '../image/about_us2 (1).jpg';
import Banner2 from '../image/about_us3.jpg';
import Banners from './banner';

class Aboutus extends React.Component{

    render(){
        return (
            <React.Fragment>                

                <div class="container space">
                    <div class="row justify-content-md-center">

                        <div class=" col-md-7  text-wrap">
                            <span class="font-weight-bold ">Our Story</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste possimus voluptates non ab. Repellendus labore obcaecati nesciunt id aliquam. Excepturi, nesciunt magnam a placeat omnis incidunt enim doloremque perspiciatis quos.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur, quas nemo nam sapiente temporibus, eos numquam labore laborum maxime obcaecati dolore adipisci mollitia quidem molestiae quisquam sequi nesciunt consequuntur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nostrum iste maxime inventore, ullam culpa illum corrupti deserunt. Maxime placeat officia voluptates iste quis animi dolor nemo quibusdam debitis ullam.</p>

                        </div>

                        <div class=" col-md-5 ">
                            <div class="image-box">
                                <img src={Banner1} alt="Responsive image" width="100%"></img>
                            </div>
                            
                        </div>

                        <div class="w-100"> </div>

                        <div class="col-md-7 ">
                            <div class="image-box">
                                <img src={Banner2} alt="Responsive image " width="100%"></img>
                            </div>
                        </div>
                    
                        <div class="col-md-5 text-wrap">
                            <span class="font-weight-bold ">Our Story</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste possimus voluptates non ab. Repellendus labore obcaecati nesciunt id aliquam. Excepturi, nesciunt magnam a placeat omnis incidunt enim doloremque perspiciatis quos.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur, quas nemo nam sapiente temporibus, eos numquam labore laborum maxime obcaecati dolore adipisci mollitia quidem molestiae quisquam sequi nesciunt consequuntur.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nostrum iste maxime inventore, ullam culpa illum corrupti deserunt. Maxime placeat officia voluptates iste quis animi dolor nemo quibusdam debitis ullam.</p>    

                        </div>
                        
                    </div>
                </div>
                    
                
                
            </React.Fragment>
            
            
        );
    }
}

export default Aboutus