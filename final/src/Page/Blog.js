import React, { Fragment } from 'react';

import Blog_04 from '../image/blog-04.jpg';
import Blog_05 from '../image/blog-05.jpg'; 
import Blog_06 from '../image/blog-06.jpg';
import Blog_01 from '../image/blog_1.jpg';
import Blog_02 from '../image/blog_2.jpg';
import Blog_03 from '../image/blog_1.jpg';



class Blog extends React.Component{

    render()
    {
        return(
            <React.Fragment>                
                
                <div class="container blog-contain">
        
                    <div class="row ">

                        <div class="col-md-8">
                            <ul class="list-unstyled style">

                                <li>
                                    <div class="image-box">
                                        <img src={Blog_04} alt="" width="100%"></img>
                                    </div>
                                    
                                    <p class="text-capitalize font-weight-bold text-dark content">8 Inspiring Ways to Wear Dresses in the Winter</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ab unde sit, similique reiciendis at quis quod adipisci rem amet animi, eius, fugiat quaerat aperiam eligendi assumenda aut laboriosam accusantium?</p>
                                    <p>By Admin |StreetStyle, Fashion, Couple |8 Comments</p>
                                </li>
                                <li>
                                    <div class="image-box">
                                        <img src={Blog_05} alt="" width="100%"></img>
                                    </div>
                                    <p class="text-capitalize font-weight-bold text-dark content">The Great Big List of Men’s Gifts for the Holidays</p>

                                    <p>By Admin |StreetStyle, Fashion, Couple |8 Comments</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ab unde sit, similique reiciendis at quis quod adipisci rem amet animi, eius, fugiat quaerat aperiam eligendi assumenda aut laboriosam accusantium?</p>                    
                                </li>
                                <li>
                                    <div class="image-box">
                                        <img src={Blog_06} alt="" width="100%"></img>
                                    </div>
                                    <p class="text-capitalize font-weight-bold text-dark content">5 Winter-to-Spring Fashion Trends to Try Now</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ab unde sit, similique reiciendis at quis quod adipisci rem amet animi, eius, fugiat quaerat aperiam eligendi assumenda aut laboriosam accusantium?</p>                    
                                    <p>By Admin |StreetStyle, Fashion, Couple |8 Comments</p>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="col-md-4">
                            <div class="ml-5">

                                <div class="input-group input-group-lg ">
                                    <input class="form-control rounded-pill pl-5" type="search" placeholder="Search...."></input>                        
                                </div>

                                <div class="labor mt-5">
                                    <h3 >Categories</h3>
                                    <ul class="list-unstyled list-group ">
                                        <li class="line"><a href="#" class="text-decoration-none">Fashion</a></li>
                                        <li class="line"><a href="#" class="text-decoration-none">Beauty</a></li>
                                        <li class="line"><a href="#" class="text-decoration-none">Street Style</a></li>
                                        <li class="line"><a href="#" class="text-decoration-none">Life Style</a></li>
                                        <li class="line"><a href="#" class="text-decoration-none">DIY & Crafts</a></li>
                                    </ul>
                                </div>
                                
                                <div class="feature">

                                    <ul class="list-unstyled ">

                                        <h3 class="feat">Featured Products </h3>
                                        <li class="d-flex flex-row pt-3">
                                            <img src={Blog_01} alt="" width="50%"></img>                                                         
                                            <div class="d-flex flex-column pl-3">
                                                <a href="#" class="font-size text-decoration-none text-wrap text-dark" >Blue shirt and black sheos</a>
                                                <span class="pt-5 font-size">$200.00</span>
                                            </div>
                                        </li>

                                        <li class="d-flex flex-row pt-5">
                                            <img src={Blog_02} alt="" width="50%"></img>                                                         
                                            <div class="d-flex flex-column pl-3">
                                                <a href="#" class="font-size text-decoration-none text-wrap text-dark" >Blue shirt and black sheos</a>
                                                <span class="pt-5 font-size">$200.00</span>
                                            </div>
                                        </li>

                                        <li class="d-flex flex-row pt-5 mb-5">
                                            <img src={Blog_03} alt="" width="50%"></img>                                                         
                                            <div class="d-flex flex-column pl-3">
                                                <a href="#" class="font-size text-decoration-none text-wrap text-dark" >Blue shirt and black sheos</a>
                                                <span class="pt-5 font-size">$200.00</span>
                                            </div>
                                        </li>                            
                                    </ul>

                                    
                                </div>
                                <div class="tages">
                                    <ul class="list-unstyled mt-3">
                                        <h3>Tages</h3>
                                        <li class="d-flex flex-row pt-3">                                                              
                                            <button class=" btn-outline-dark badge-pill px-4 py-2 mr-2" >Feature</button>
                                            <button class=" btn-outline-dark badge-pill px-4 py-2  mr-2" >Lifestyle</button>
                                            <button class=" btn-outline-dark badge-pill px-4 py-2 mr-2" >Denim</button>                                
                                        </li>
                                        <li class="d-flex flex-row pt-3">                                                              
                                            <button class=" btn-outline-dark badge-pill px-4 py-2 mr-2" >StreetStyle</button>
                                            <button class=" btn-outline-dark badge-pill px-4 py-2 mr-2" >Crafts</button>
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        

                    </div>
                    
                </div>
            </React.Fragment>        
        );
    }
}

export default Blog