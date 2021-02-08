import React from 'react';


import Banner from '../image/banner_contact.jpg';


class Banners extends React.Component{

    render(){
        return (
        
            <div class="row banner-image">
                <div class="container-fluid ">
                    <div class="col-md-12 col-lg-12">
                        <img class="img-fluid size" src={Banner} alt="banner_contact"></img>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Banners