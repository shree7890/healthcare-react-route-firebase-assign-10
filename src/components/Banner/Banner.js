import React from 'react';
import slider1 from '../../images/slider-01-b.jpg';
import slider2 from '../../images/slider-01-c.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="row">
                                <div className="col-lg-6 d-flex justify-content-center align-items-center ">
                                    <div className="banner-slide">
                                        <h1 className="heading">A Doctery</h1>
                                        <h3 className="my-3">The hospital you trust to care for those you love.</h3>
                                        <h6>100% Expert Doctors</h6>
                                        <h6>From Scientific Jornal</h6>
                                        <button className="btn-common mt-3">Discover More</button>
                                    </div>
                                </div>
                                <div className="col-lg-6"></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="banner-slide">
                                        <h1 className="heading">A Doctery</h1>
                                        <h3 className="my-3">The hospital you trust to care for those you love.</h3>
                                        <h6>100% Expert Doctors</h6>
                                        <h6>From Scientific Jornal</h6>
                                        <button className="btn-common mt-3">Discover More</button>
                                    </div>
                                </div>
                                <div className="col-lg-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;