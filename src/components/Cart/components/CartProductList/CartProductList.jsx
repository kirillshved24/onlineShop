import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartProductList = ({ cartItems, handleQuantityChange, handleRemoveItem }) => {
    const handleRemoveItemWithToast = (productId) => {
        handleRemoveItem(productId);
        toast('Товар удален из корзины');
    };

    return (
        <div className='cartProduct'>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id} className='cartItem'>
                        <img src={item.image} alt={item.name} className='cartItemImage' />
                        <div className='cartItemDetails'>
                            <div className='cartInfo'>
                                <p className='cartItemName'>{item.name}</p>
                                <button className='cross' onClick={() => handleRemoveItemWithToast(item.id)}>X</button>
                            </div>
                            <div className='priceAndQuantity'>
                                <p>${item.oldPrice}</p>
                                <p className='cartItemPrice'>${item.price}</p>
                                <div className='cartQuantity'>
                                    <button className='actionProducts' onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                    <span>{item.count}</span>
                                    <button className='actionProducts' onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                </div>
                            </div>
                        </div>
                        <p className='itemPrice'>${(item.price * item.count).toFixed(2)}</p>
                    </div>
                ))
            )}
            <div className='lineCard'></div>
        </div>
    );
};