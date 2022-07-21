import React from 'react';
import logo from './img/icons/logo.svg';
import heart from './img/icons/heart.svg';
import cart from './img/icons/cart.svg';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={logo} alt='logo' />
      </div>
      <nav className='header__links'>
        <ul>
          <li>
            <a href='#' className='header__link'>
              About us
            </a>
          </li>
          <li>
            <a href='#' className='header__link'>
              Catalog
            </a>
          </li>
          <li>
            <a href='#' className='header__link'>
              Meteorites
            </a>
          </li>
          <li>
            <a href='#' className='header__link'>
              Information
            </a>
          </li>
        </ul>
      </nav>
      <div className='header__icons'>
        <div className='header__favourites'>
          <img src={heart} alt='favourites' className='heart-icon' />
        </div>
        <div className='header__cart'>
          <img src={cart} alt='cart' className='cart-icon' />
        </div>
      </div>
    </div>
  );
};

export default Header;
