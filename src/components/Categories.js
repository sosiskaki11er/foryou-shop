import React from 'react'
import Thirt from '../assets/images/tshirt.png'
import Longsliv from '../assets/images/longsliv.png'
import Kepka from '../assets/images/kepka.png'
import Sweatshirt from '../assets/images/sweatshirt.png'
import {useNavigate} from 'react-router-dom'



function Categories() {
    const navigate = useNavigate()
  return (
    <div className='wrapper' id='categorys'>
        <div className='category big'>
            <div className='category-desc'>
                <h3>Популярные футболки</h3>
                <a 
                className='button'
                onClick={() => navigate('/catalogue/Футболки')}
                >Смотреть все</a>
            </div>
            <img src={Thirt} alt='t shirt' className='category-img'/>
        </div>

        <div className='small-categorys'>
          <div className='category small'>
              <div className='category-desc longsliv'>
                  <h3>Лучшие лонгсливы</h3>
                  <a 
                  className='button'
                  onClick={() => navigate('/catalogue/Лонгсливы')}
                  >Смотреть все</a>
              </div>
              <img src={Longsliv} alt='t shirt' className='category-img'/>
          </div>

          <div className='category small'>
              <div className='category-desc'>
                  <h3>Кепки и бейсболки</h3>
                  <a 
                  className='button'
                  onClick={() => navigate('/catalogue/Кепки')}
                  >Смотреть все</a>
              </div>
              <img src={Kepka} alt='t shirt' className='category-img'/>
          </div>
        </div>

        <div className='category big'>
            <div className='category-desc'>
                <h3>Теплые свитшоты</h3>
                <a 
                className='button'
                onClick={() => navigate('/catalogue/Свитшоты')}
                >Смотреть все</a>
            </div>
            <img src={Sweatshirt} alt='t shirt' className='category-img'/>
        </div>
    </div>
  )
}

export default Categories