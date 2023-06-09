import React from 'react'
import Search from '../assets/icons/search.svg'
import FavIcon from '../assets/icons/heart.svg'
import Home from '../assets/icons/home.svg'
import Cart from './Cart'

function Menu() {
  return (
    <div id='menu'>
        <div className='menu-item active'>
            <img src={Home} alt='home'/>
            <h6>Главная</h6>
        </div>

        <div className='menu-item'>
            <img src={Search} alt='search'/>
            <h6>Поиск</h6>
        </div>

        <div className='menu-item'>
            <img src={FavIcon} alt='fav'/>
            <h6>Главная</h6>
        </div>

        <div className='menu-item'>
            <Cart/>
            <h6>Главная</h6>
        </div>
    </div>
  )
}

export default Menu