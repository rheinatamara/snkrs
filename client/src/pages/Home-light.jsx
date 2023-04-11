import React from 'react';
import Navbar from '../components/Navbar-light'
import nike1 from '../img/sneakers/nike1.png'
import rightArrow from '../img/right-arrow.png'
import '../scss/home.scss'
const Home = () => {
    return (
        <div className="homepage">
            <div className="gradient1"></div>
            <div className="gradient2"></div>
            {/* <div className="gradient3"></div> */}
            <Navbar></Navbar>
            
            {/* <div className="gradient"></div>
            <div className="gradient"></div> */}
              <div className="numbers">
                                <ul>
                                    <li className='one'>01</li>
                                    <li className='two'>02</li>
                                    <li className='three'>03</li>
                                </ul>
                            </div>
            
            <header>
                <div className="header">
                  
                    <div className="header-wrapper">
                        
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
                <div className="header-wrapper">
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
                <div className="header-wrapper">
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
            {/* <div className="header-wrapper">
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
                </div> */}
        </div>
        
    );
}

export default Home;
