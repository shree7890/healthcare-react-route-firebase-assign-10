import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/error.png'
const Notfound = () => {
    return (
        <div className="bg-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="text-center notfound text-white">
                        <img src={notfound} alt="" />
                        <h3 className="my-4 fs-1">Error 404 : Page Not Found</h3>
                        <p className="my-4 fs-3 w-75 mx-auto">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <Link to="/"><button className="me-3 btn-common"><i className="fas fa-undo-alt"></i> Go Back</button></Link>
                        <Link to="/home"><button className="ms-3 btn-common"><i className="fas fa-home"></i> Homepage</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notfound;