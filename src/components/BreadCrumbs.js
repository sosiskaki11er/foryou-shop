import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Arrow from '../assets/icons/arrow-path.svg'

function BreadCrumbs() {
  const navigate = useNavigate()
  const params = useParams()['*']?.split('/');

  return (
    <div className='wrapper' id='breadcrumbs'>
        <div className='path'>
            <h5 id='main'>Главная</h5>
            <div className='line'></div>
            <h5>Каталог</h5>
        </div>

        <div className='path-mobile' onClick={() => navigate('/')}>
            <img src={Arrow} alt='arrow-path'/>
            <h5><a >Главная</a></h5>
        </div>

        <h2>{params[0]}</h2>
    </div>
  )
}

export default BreadCrumbs