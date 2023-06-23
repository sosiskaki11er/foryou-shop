import React, { useEffect, useState } from 'react'
import TgIcon from '../assets/icons/ic_baseline-telegram.svg'
import Search from './Search'
import UserIcon from '../assets/icons/user.svg'
import FavIcon from '../assets/icons/heart.svg'
import Cart from './Cart'
import Logo from './Logo'
import Menu from '../assets/icons/menu.svg'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Header() {
    const [search, setSearch] = useState(false)
    const navigate = useNavigate()
    const [types, setTypes] = useState([])

    useEffect(() => {
        axios.get('https://api.foryou.uz/api/getTypeClothes')
        .then(response => setTypes(response.data.data))
    },[])

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
                            {types?.map(type => 
                            <li><a onClick={() => navigate(`/catalogue?&type_of_clothes=${type.id}`)}>{type.name}</a></li>
                                )}
                        </ul>
                    </nav>
                </div>
                
                {!search &&
                <div className='container tg'>
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