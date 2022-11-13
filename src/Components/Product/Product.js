import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Product.css'
const Product = ({ handleToAddCart, product }) => {
    // const { handleToAddCart, product } = props;
    const { name, price, ratings, seller, img } = product;
    // const { handleToAddCart } = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price : $ {price}</p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings} star</small></p>
            </div>
            <button  onClick={() => handleToAddCart(product)} className='btn-cart'>
                <p className='btn-text'>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;