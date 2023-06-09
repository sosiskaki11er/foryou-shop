import React from 'react'
import Logo from './Logo'
import Inst from '../assets/icons/Inst.svg'
import Tg from '../assets/icons/Tg.svg'
import Fb from '../assets/icons/fb.svg' 
import InWeb from '../assets/icons/inweb 1.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className='wrapper'>
            <div className='container'>
                <div className='container footer'>
                    <Logo/>

                    <p>
                    ForYou - это печать максимально широкого спектра продукции — 24 часа, 7 дней в неделю, удобно, быстро, компетентно и качественно!
                    </p>

                    <div className='container net'>
                        <a>
                            <img src={Inst} alt='instagram'/>
                        </a>

                        <a>
                            <img src={Tg} alt='instagram'/>
                        </a>

                        <a>
                            <img src={Fb} alt='instagram'/>
                        </a>
                    </div>
                </div>

                <div className='container help'>
                    <div className='container footer'>
                        <h5>Основные разделы</h5>

                        <ul className='footer-nav'>
                            <li><a href='/futbolki'>Футболки</a></li>
                            <li><a href='/longsliv'>Лонгслив</a></li>
                            <li><a href='/svitshot'>Свитшоты</a></li>
                            <li><a href='/hudi'>Худи</a></li>
                            <li><a href='/kepki'>Кепки</a></li>
                        </ul>
                    </div>

                    <div className='container footer'>
                        <h5>Помощь покупателю</h5>

                        <ul className='footer-nav'>
                            <li><a href='/how'>Как сделать заказ?</a></li>
                            <li><a href='/delivery'>Доставка</a></li>
                            <li><a href='/about'>О компании</a></li>
                            <li><a href='/feedbacks'>Отзывы</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container credits' id='credits'>
                <div className='container'>
                    <div>2023 © foryou.uz</div>
                    <div>Карта сайта</div>
                </div>

                <div>
                    Разработка -
                    <img src={InWeb} alt='Inweb logo'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer