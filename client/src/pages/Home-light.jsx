import React from 'react';
import Navbar from '../components/Navbar-light'
import nike1 from '../img/sneakers/nike1.png'
import rightArrow from '../img/right-arrow.png'
import sneakers1 from '../img/sneakers/sneakers1.png'
// import Bag from "../img/Bag.png";
// import backgroundSVG from '../img/svg/backgroundSVG.svg'

import '../scss/home.scss'
const Home = () => {
 
    return (
        
        <div className="homepage">
            {/* <div className="gradient1"></div>
            <div className="gradient2"></div>
            <div className="gradient3"></div> */}
            <Navbar></Navbar>
               
            <div className="gradient"></div>
            <div className="gradient"></div>
              <div className="numbers">
                                <ul>
                                    <li className='one'>01</li>
                                    <li className='two'>02</li>
                                    <li className='three'>03</li>
                                </ul>
                            </div>
            
            <header>
                <div className="header">
                  
                    <div className="header-wrapper ">
                        
                        <div className="description-box">
                            <div className="wrapper">
                                <h1 className='title plus-jakarta-font'>Nike Pegasus Trail 4 GORE-TEXT</h1>
                                <p className='description font-m'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="button-price">
                                    <div className="button">
                                        <p>Add to Bag <img src={rightArrow} alt="" /></p>
                                    </div>
                                    <div className="price plus-jakarta-font">
                                        <p>$160</p>
                                        
                                    </div>
                                </div>

                            </div>
                          
                           
                        </div>
                        <div className="image-box">
                            <img src={nike1} alt="" />
                            <h1 >NIKE</h1>
                        </div>
                </div>
                <div className="header-wrapper ">
                        <div className="bar"></div>
                        <div className="description-box">
                            <div className="wrapper">
                                <h1 className='title plus-jakarta-font'>Nike Pegasus Trail 4 GORE-TEXT</h1>
                                <p className='description font-m'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="button-price">
                                    <div className="button">
                                        <p>Add to Bag <img src={rightArrow} alt="" /></p>
                                    </div>
                                    <div className="price plus-jakarta-font">
                                        <p>$160</p>
                                        
                                    </div>
                                </div>

                            </div>
                          
                           
                        </div>
                        <div className="image-box">
                            <img src={nike1} alt="" />
                            <h1 >NIKE</h1>
                        </div>
                </div>
                <div className="header-wrapper ">
                        <div className="bar"></div>
                        <div className="description-box">
                            <div className="wrapper">
                                <h1 className='title plus-jakarta-font'>Nike Pegasus Trail 4 GORE-TEXT</h1>
                                <p className='description font-m'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="button-price">
                                    <div className="button">
                                        <p>Add to Bag <img src={rightArrow} alt="" /></p>
                                    </div>
                                    <div className="price plus-jakarta-font">
                                        <p>$160</p>
                                        
                                    </div>
                                </div>

                            </div>
                          
                           
                        </div>
                        <div className="image-box">
                            <img src={nike1} alt="" />
                            <h1 >NIKE</h1>
                        </div>
                </div>
                    
                </div>
                
              
            </header>
            <section id='popular-picks'>
                <h1 className="plus-jakarta-font semiBold">Popular <span className='purple'>Picks</span></h1>
                <div className="product-container">
                <div className="product-grid">
                    <div className="product-outer">
                        <div className="product-inner">
                            <div className="upper-section">
                                <div className="color"></div>
                                <div className="bag"></div>

                            </div>
                            <div className="product">
                                <img src={nike1} alt="" />
                                <p>Pegasus Trail 4 GORE-TEX</p>
                            </div>

                        </div>
                        <div className="bottom-text">
                            <p className="price">$130</p>
                            <p className="detail">See Detail </p>
                        </div>
                    </div>
                    <div className="product-outer">
                        <div className="product-inner">
                            <div className="upper-section">
                                <div className="color"></div>
                                <div className="bag"></div>

                            </div>
                            <div className="product">
                                <img src={nike1} alt="" />
                                <p>Pegasus Trail 4 GORE-TEX</p>
                            </div>

                        </div>
                        <div className="bottom-text">
                            <p className="price">$130</p>
                            <p className="detail">See Detail </p>
                        </div>
                    
                    </div>
                    <div className="product-outer">
                        <div className="product-inner">
                            <div className="upper-section">
                                <div className="color"></div>
                                <div className="bag"></div>

                            </div>
                            <div className="product">
                                <img src={nike1} alt="" />
                                <p>Pegasus Trail 4 GORE-TEX</p>
                            </div>

                        </div>
                        <div className="bottom-text">
                            <p className="price">$130</p>
                            <p className="detail">See Detail </p>
                        </div>
                    
                    </div>
                    <div className="product-outer">
                        <div className="product-inner">
                            <div className="upper-section">
                                <div className="color"></div>
                                <div className="bag"></div>

                            </div>
                            <div className="product">
                                <img src={nike1} alt="" />
                                <p>Pegasus Trail 4 GORE-TEX</p>
                            </div>

                        </div>
                        <div className="bottom-text">
                            <p className="price">$130</p>
                            <p className="detail">See Detail </p>
                        </div>
                    
                    </div>
                </div>
                    
                </div>
                
            </section>
            <section id="content">
                <div className="content-1">
                    <div className="product">
                        
                        <div className="product-content">
                            <h3 className="plus-jakarta-font font-m">Get up to 30% off</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="image">
                            <img src={sneakers1} alt="" />
                        </div>
                    </div>
                   
                    <div className="text">
                        <h1>We Provide Authentic Shoes.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magnam consequuntur quaerat sunt qui nulla, quo nobis eius amet harum molestias officia modi sed excepturi.</p>
                    </div>
                   
                </div>
               
            </section>
           
     </div>

        
    );
}

export default Home;
