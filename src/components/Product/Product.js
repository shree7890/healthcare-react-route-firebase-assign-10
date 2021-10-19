import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
const Product = (props) => {
    const { imgthumb, name, short_desc, id } = props.product;
    return (
        <div>
            <div className="col">
                <div className="card h-100 pb-4">
                    <div className="portfolio-image">
                        <img src={imgthumb} className="card-img-top image-card " alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title name-head my-4">{name}</h5>
                        <p className="card-text short">{short_desc}</p>
                        <Link to={`/services/${id}`}><button className="btn-slice">More</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Product;