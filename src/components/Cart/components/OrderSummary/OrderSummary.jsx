import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const OrderSummary = ({ totalPrice, isPromoApplied, finalPrice }) => {

    const handleCheckout = () => {
        toast('Заказ принят')
    }

    return (
        <div className='cartOrder'>
            <p className='orderTitle'>Your Order</p>
            <div className='orderDescription'>
                <div className='orderTotal'>
                    <p>Order price</p>
                    <p>${totalPrice.toFixed(2)}</p>
                </div>
                <div className='orderTotal'>
                    <p>Discount for promo code</p>
                    <p>{isPromoApplied ? 'Yes' : 'No'}</p>
                </div>
                <div className='lineOrder'></div>
            </div>
            <div className='orderTotal'>
                <p>Total</p>
                <p>${finalPrice.toFixed(2)}</p>
            </div>
            <button className='checkout' onClick={handleCheckout}>Checkout</button>
        </div>
    );
};