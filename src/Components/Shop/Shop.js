import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const handleToAddCart = () => {
        console.log('clicked');
    }
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleToAddCart={handleToAddCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;