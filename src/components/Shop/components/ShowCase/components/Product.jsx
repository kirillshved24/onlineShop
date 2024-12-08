import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import like from '../../../../../icons/like.svg';
import like_active from '../../../../../icons/like_active.svg';

export const Product = ({ product, toggleFavorite, inFavorites, buyProduct }) => {
    const notifyCart = () => toast('Товар добавлен в корзину');

    const handleBuyProduct = (product) => {
        buyProduct(product);
        notifyCart();
    };

    return (
        <div className='productCatalog'>
            <div className='wrapper'>
                {product.isSale && <p className='label'>SALE</p>}
                {product.isNew && <p className='newLabel'>NEW</p>}
                <img className='productPhoto' src={product.image} alt={product.name} />
                <img className='like' src={inFavorites ? like_active : like} alt='like' onClick={() => toggleFavorite(product.id)} />
            </div>
            <p className='productName'>{product.name}</p>
            <div className='productPrice'>
                <p className='currentPrice'>${product.price}</p>
                {product.oldPrice && <p className='oldPrice'>${product.oldPrice}</p>}
            </div>
            <button className='buy' onClick={() => handleBuyProduct(product)}>Купить</button>
        </div>
    );
};