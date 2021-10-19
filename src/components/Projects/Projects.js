import React from 'react';
import './Projects.css';
import project1 from '../../images/project-01-770x770.jpg'
import project2 from '../../images/project-02-770x770.jpg'
import project3 from '../../images/project-03-770x770.jpg'
import project4 from '../../images/project-04-770x770.jpg'
import project5 from '../../images/project-05-770x770.jpg'
import project6 from '../../images/project-06-770x770.jpg'
import project7 from '../../images/project-07-770x770.jpg'
import project8 from '../../images/project-08-770x770.jpg'
import project9 from '../../images/project-09-770x770.jpg'
const Projects = () => {
    return (
        <div>
            <div className="container py-5">
                <h2 className="mt-3 mb-5 text-center fs-1 text-head" style={{ color: "#1BBDE4" }}>Our Projects</h2>
                <div className="row">
                    <div className="col-lg-4 ">
                        <div className="portfolio-image">
                            <img className="img-fluid " src={project1} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-image">
                            <img className="img-fluid " src={project2} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-image">
                            <img className="img-fluid " src={project3} alt="" />
                        </div>
                    </div>

                </div>
                <div className="row mt-4">
                    <div className="col-lg-4">
                        <div className="portfolio-image">
                            <img className="img-fluid " src={project4} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-image">
                            <img className="img-fluid " src={project5} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-image">
                            <img className="img-fluid " src={project6} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4">
                        <div className="portfolio-image">
                            <img className="img-fluid " src={project7} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-image">
                            <img className="img-fluid " src={project8} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="portfolio-image">
                            <img className="img-fluid " src={project9} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#081839", borderBottom: "1px solid rgba(233, 232, 232, 0.2)" }}>
                <div className="container py-5 text-center" >
                    <div className="row">
                        <div className="col-lg-4">
                            <div>
                                <div className="to-let">
                                    <h6>Office Address</h6>
                                    <h4>201 Stokes New York</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="to-let">
                                <h6>24 X 7 online support</h6>
                                <h4>info@plumbing.com</h4>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="to-let">
                                <h6>Contact Us Free</h6>
                                <h4>+1 (088) 456 888</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;