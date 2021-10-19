import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Service.css';
const Services = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`./data.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="container py-5">
                <h2 className="mt-3 mb-5 text-center fs-1 text-head" style={{ color: "#1BBDE4" }}>Our Services</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;