import React, { useState } from 'react';
import './Product.css'
const Product = (props) => {
    const { handleToAddCart } = props;
    const { name, price, ratings, seller, img } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price : $ {price}</p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings} star</small></p>
            </div>
            <button onClick={handleToAddCart} className='btn-cart'>
                <p>add to cart</p>
            </button>
        </div>
    );
};

export default Product;