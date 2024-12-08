import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Shop } from './components/Shop/Shop';
import { Cart } from './components/Cart/Сart';
import { ContentBlock } from './components/ContentBlock/ContentBlock';

function App() {
  const [currentPage, setCurrentPage] = useState('shop');
  const [favoritesCount, setFavoritesCount] = useState(0);//состояния для колличство лайков
  const [cartCount, setCartCount] = useState(0);//состояния для колличество добавлленых в корзину

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];//добавил эффект для считывания данных из ls
    setCartCount(cartItems.reduce((count, item) => count + item.count, 0));

    const favoritesItems = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoritesCount(favoritesItems.length);
  }, []);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const updateFavoritesCount = (count) => {
    setFavoritesCount(count);
  };

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <>
      <Header
        changePage={changePage}
        favoritesCount={favoritesCount}
        cartCount={cartCount}
      />
      <ContentBlock currentPage={currentPage} />
      {currentPage === 'shop' && <Shop updateFavoritesCount={updateFavoritesCount} updateCartCount={updateCartCount} />}
      {currentPage === 'cart' && <Cart />}
    </>
  );
}

export default App;