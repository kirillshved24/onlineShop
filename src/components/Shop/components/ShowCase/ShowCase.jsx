import React, { useEffect, useState } from "react";
import { Product } from "./components/Product";
import { favoriteKey, CART_KEY } from './constants/constants';
import { Pagination } from "./Pagination/Pagination";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ShowCase = ({ products, updateFavoritesCount, updateCartCount, changeSortType, countOfProducts, changePage, totalPages, currentPage, sortType }) => {
    const [productsInLS, setProductsInLS] = useState([]);

    const toggleFavorite = (productId) => {
        const productsFromLS = localStorage.getItem(favoriteKey);

        if (!productsFromLS) {
            const newFavorites = [productId];
            setProductsInLS(newFavorites);
            localStorage.setItem(favoriteKey, JSON.stringify(newFavorites));
            updateFavoritesCount(newFavorites.length);
            toast('Товар добавлен в избранное');
            return;
        }

        const products = JSON.parse(productsFromLS);
        const inLS = products.includes(productId);

        let newFavorites;
        if (inLS) {
            newFavorites = products.filter((id) => id !== productId);
            toast('Товар убран из избранного');
        } else {
            newFavorites = [...products, productId];
            toast('Товар добавлен в избранное');
        }

        setProductsInLS(newFavorites);
        localStorage.setItem(favoriteKey, JSON.stringify(newFavorites));
        updateFavoritesCount(newFavorites.length);
    };

    const buyProduct = (product) => {
        const productsFromLS = localStorage.getItem(CART_KEY);

        let newCart;
        if (!productsFromLS) {
            newCart = [{ ...product, count: 1 }];
        } else {
            const products = JSON.parse(productsFromLS);
            const inLS = products.some((productInLs) => productInLs.id === product.id);

            if (inLS) {
                newCart = products.map((productInLs) => {
                    if (productInLs.id === product.id) {
                        return { ...productInLs, count: productInLs.count + 1 };
                    }
                    return productInLs;
                });
            } else {
                newCart = [...products, { ...product, count: 1 }];
            }
        }

        localStorage.setItem(CART_KEY, JSON.stringify(newCart));
        const cartCount = newCart.reduce((count, item) => count + item.count, 0);
        updateCartCount(cartCount);
    };

    useEffect(() => {
        const productsFromLS = localStorage.getItem(favoriteKey);
        if (productsFromLS) {
            const products = JSON.parse(productsFromLS);
            setProductsInLS(products);
        }
    }, []);

    return (
        <div className='blogActions'>
            <div className='actions'>
                <div>There are {countOfProducts} products in this category</div>
                <select name='sort' onChange={(e) => changeSortType(e.target.value)} value={sortType}>
                    <option value='NAME_ASC'>По имени A-Z</option>
                    <option value='NAME_DESC'>По имени Z-A</option>
                    <option value='PRICE_ASC'>Сначала дешевые</option>
                    <option value='PRICE_DESC'>Сначала дороже</option>
                </select>
            </div>
            <div className='catalog'>
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        toggleFavorite={toggleFavorite}
                        inFavorites={productsInLS.includes(product.id)}
                        buyProduct={buyProduct}
                    />
                ))}
            </div>

            <Pagination
                setPage={changePage}
                totalPages={totalPages}
                currentPage={currentPage + 1}
            />
            <ToastContainer />
        </div>
    );
};