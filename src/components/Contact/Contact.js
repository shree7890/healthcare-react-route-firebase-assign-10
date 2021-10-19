import React from 'react';

const Contact = () => {
    return (
        <div style={{ backgroundColor: "#EBEEF3" }} className="py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="text-center ">
                        <h5 style={{ color: "#11b7e6c0", fontWeight: "500" }}>Get in touch</h5>
                        <h2 className="my-4" style={{ color: "#000", fontWeight: "bold" }}>Get in touch Call now or write a message</h2>
                        <p className="mb-5" style={{ color: "#666", fontWeight: "500", fontSize: "17px", width: "450px", margin: "0px auto" }}>Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas
                            accumsan lacus vel facilisis.</p>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <h3><span><i className="fas fa-map-marker-alt " style={{ color: "#11b7e6c0" }}></i></span> Our Location​​</h3>
                            <h5 className="my-3">456, Lorem Street,New York,</h5>
                            <h4>33454, NY. </h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <h3><span><i className="fas fa-phone-volume" style={{ color: "#11b7e6c0" }}></i></span> Phone Number​​</h3>
                            <h5 className="my-3">Emergency Cases</h5>
                            <h4>+1(088) 456 888 (24/7)</h4>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <h3><span><i className="fas fa-envelope-square" style={{ color: "#11b7e6c0" }}></i></span> Email Address​​</h3>
                            <h5 className="my-3">contact@example.com,</h5>
                            <h4>admin@example.com </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div>
                        <h2 className="text-center fw-bold fs-2 my-4" style={{ color: "#081839" }}>Get in touch with us</h2>
                    </div>
                    <div className="text-center">
                        <form action="">
                            <input className="w-50 py-2" type="text" placeholder="Type your name" required />
                            <br /><br />
                            <input className="w-50 py-2" type="email" placeholder="Type your E-mail" required />
                            <br /><br />
                            <textarea className="w-50" placeholder="type your message" name="" id="" cols="30" rows="10"></textarea>
                            <br /><br />
                            <input className="btn-common" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    );
};

export default Contact;