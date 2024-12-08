import React from 'react';
import search from '../../icons/search.svg';
import arrow_info from '../../icons/arrow_info.svg';
import user from '../../icons/user.svg';
import like from '../../icons/like.svg';
import basket from '../../icons/basket.svg';
import logo from '../../icons/logo.svg';
import burger_menu from '../../icons/burger_menu.svg';

export const Header = ({ changePage, favoritesCount, cartCount }) => {
    return (
        <div className='container'>
            <header className='header'>
                <div className='logoAndMenu'>
                    <div className='logo'>
                        <img src={burger_menu} alt='burger menu' />
                        <img src={logo} alt='logo' />
                    </div>
                    <div className='menu'>
                        <a href='##' className='menuItem'>Home</a>
                        <a href='##' className='menuItem menuFlex' onClick={() => changePage('cart')}>
                            Cart
                            <img className='arrow' src={arrow_info} alt='arrow down' />
                        </a>
                        <a href='##' className='menuItem menuFlex' onClick={() => changePage('shop')}>
                            Shop
                            <img className='replacement' src={arrow_info} alt='arrow down' />
                        </a>
                        <a href='##' className='menuItem'>Blog</a>
                        <a href='##' className='menuItem'>Contact</a>
                    </div>
                </div>
                <div className='icons'>
                    <img src={search} alt='search' />
                    <img src={user} alt='user' />
                    <div className='counterBlock'>
                        <img src={like} alt='like' />
                        <p className='zero'>{favoritesCount}</p>
                    </div>
                    <div className="counterBlock">
                        <img src={basket} onClick={() => changePage('cart')} alt='bag' />
                        <p className="zero">{cartCount}</p>
                    </div>
                </div>
            </header>
        </div>
    );
}