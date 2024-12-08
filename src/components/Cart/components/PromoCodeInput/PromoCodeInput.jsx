import React from 'react';
import arrow_right from '../../../../icons/arrow_right.svg';

export const PromoCodeInput = ({ promoCode, handlePromoCodeChange, handleApplyPromoCode }) => {
    return (
        <div className='promoBlog'>
            <p className='promoCode'>You have a promo code?</p>
            <p className='subTitlePromo'>To receive up-to-date promotional codes, subscribe to us on social networks.</p>
            <div className='promoInput'>
                <input
                    className='inputPromo'
                    placeholder='Enter promo code'
                    type='text'
                    value={promoCode}
                    onChange={handlePromoCodeChange}
                />
                <button className='enterPromo' onClick={handleApplyPromoCode}>
                    <img className='arrow' src={arrow_right} alt='arrow' />
                </button>
            </div>
        </div>
    );
};