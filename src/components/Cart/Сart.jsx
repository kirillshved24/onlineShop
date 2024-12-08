import React, { useEffect, useState } from 'react';
import { CART_KEY } from '../Shop/components/ShowCase/constants/constants';
import { CartProductList } from './components/CartProductList/CartProductList';
import { PromoCodeInput } from './components/PromoCodeInput/PromoCodeInput';
import { OrderSummary } from './components/OrderSummary/OrderSummary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PROMO_CODE = 'ilovereact';
const DISCOUNT_PERCENTAGE = 0.1; // 10% скидка

export const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [promoCode, setPromoCode] = useState('');
    const [isPromoApplied, setIsPromoApplied] = useState(false);


    const updateCartItems = (items) => {
        setCartItems(items);
        localStorage.setItem(CART_KEY, JSON.stringify(items));
    };

    const handleQuantityChange = (productId, delta) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === productId) {
                const newCount = item.count + delta;
                return { ...item, count: newCount > 0 ? newCount : 1 };
            }
            return item;
        });
        updateCartItems(updatedCartItems);
    };

    const handleRemoveItem = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        updateCartItems(updatedCartItems);
    };

    const handlePromoCodeChange = (e) => {
        setPromoCode(e.target.value);
    };

    const handleApplyPromoCode = () => {
        if (promoCode === PROMO_CODE) {
            setIsPromoApplied(true);
        } else {
            setIsPromoApplied(false);
        }
    };
    // Извлекаем данные из localStorage при первом рендере
    useEffect(() => {
        const storedCartItems = localStorage.getItem(CART_KEY);
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);


    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.count, 0);
    const discount = isPromoApplied ? totalPrice * DISCOUNT_PERCENTAGE : 0;
    const finalPrice = totalPrice - discount;

    return (
        <>
            <div className='cartBlog'>
                <CartProductList
                    cartItems={cartItems}
                    handleQuantityChange={handleQuantityChange}
                    handleRemoveItem={handleRemoveItem} />
                <OrderSummary
                    totalPrice={totalPrice}
                    isPromoApplied={isPromoApplied}
                    discount={discount}
                    finalPrice={finalPrice} />
            </div>
            <PromoCodeInput
                promoCode={promoCode}
                handlePromoCodeChange={handlePromoCodeChange}
                handleApplyPromoCode={handleApplyPromoCode} />
            <ToastContainer />
        </>
    );
};