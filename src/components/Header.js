import React, { useState } from 'react'
import TgIcon from '../assets/icons/ic_baseline-telegram.svg'
import Search from './Search'
import UserIcon from '../assets/icons/user.svg'
import FavIcon from '../assets/icons/heart.svg'
import Cart from './Cart'
import Logo from './Logo'
import Menu from '../assets/icons/menu.svg'


function Header() {
    const [search, setSearch] = useState(false)

    const clickHandler = () => {
        setSearch(!search)
    }

  return (
        <>
            <div className='wrapper' id='header'>
                <div className='container'>
                    <Logo color='black'/>

                    <nav>
                        <ul>
                            <li><a href='/futbolki'>Футболки</a></li>
                            <li><a href='/longsliv'>Лонгслив</a></li>
                            <li><a href='/svitshot'>Свитшоты</a></li>
                            <li><a href='/hudi'>Худи</a></li>
                            <li><a href='/kepki'>Кепки</a></li>
                        </ul>
                    </nav>
                </div>
                
                {!search &&
                <div className='container'>
                    <img src={TgIcon} alt='telegram icon' width={24}/>
                    <a href='https://inweb.uz/'>Написать в телеграм</a>
                </div>
                }

                <div className='container panel' >
                    <Search active={search} onClick={clickHandler}/>
                    <img src={UserIcon} alt='user icon'/>
                    <img src={FavIcon} alt='favourite products'/>
                    <Cart/>
                </div>

                <div className='container language'>
                    RU
                </div>
            </div>
            
            <div className='wrapper' id='header-mobile'>
                <div className='container'>
                    <img src={Menu} alt='burger menu'/>

                    <Logo color='black' mobile/>

                    <img src={UserIcon} alt='user icon'/>
                </div>
            </div> 
    </>
  )
}

export default Header