import React from 'react';



class Footer extends React.Component{

    render(){
        return (
            <footer className="footer-block">
                
                <div className='container text-left text-md-left p-4'>
                    <div className="row">
                        <div className="col-md-3 block">
                            <h6 className="content">Information</h6>                    

                            <ul className="list-unstyled ">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Get In Touch</a></li>
                                <li><a href="#">Shipping & Return</a></li>
                                <li><a href="#">Price Match</a></li>
                                <li><a href="#">The Good Room, 12 Price Ave, Mt</a></li>
                                <li><a href="#">Phnom Penh</a></li>
                                <li><a href="#">University of Puthisatra, 123 ........</a></li>
                            </ul>
                            
                        </div>
                        <div className="col-md-3 block">

                            <h6 className="content">Good thing</h6>                    

                            <ul className="list-unstyled">
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">loyalty Program</a></li>
                            </ul>

                        </div>
                        <div class="col-md-2 block">

                            <h6 class="content">News</h6>
                            
                            <ul class="list-unstyled">
                                <li><a href="#">Blog</a></li>
                            </ul>

                        </div>

                        <div class="col-md-4 block">

                            <h6 class="content">Stay Connect</h6>
                            
                            <ul class="list-unstyled">
                                <li class="list-inline-item">
                                    <button class="btn facebook" >                                
                                        <i class="fab fa-facebook-f"></i>
                                    </button>
                                </li>
                                <li class="list-inline-item">
                                    <button class="btn facebook" >                                
                                        <i class="fab fa-facebook-f"></i>
                                    </button>
                                </li>
                                <li class="list-inline-item">
                                    <button class="btn facebook" >                                
                                        <i class="fab fa-facebook-f"></i>
                                    </button>
                                </li>
                                <li class="mt-md-3">
                                    <form class="input-group sign-up ">
                                        <input type="text" class="form-control form-control-sm" placeholder="Your email"
                                            aria-label="Your email" aria-describedby="basic-addon2"></input>
                                        <div><button class="btn-submit">submit</button></div>
                                    </form>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div class="footer-copyright text-center  py-3 "> @ 2020 Copyright:
                    <a href="file:///D:/UP_Folder/Year2/web_static_27.10.2020/midterm/home.html#"
                        class="text-light">SHOESSTORE.com</a>
                </div>
            </footer>
        );
    }
}

export default Footer