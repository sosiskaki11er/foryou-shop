import React from 'react'
import Vector0 from '../assets/icons/Vector0.svg'
import Vector1 from '../assets/icons/Vector1.svg'
import Vector2 from '../assets/icons/Vector2.svg'
import Vector3 from '../assets/icons/Vector3.svg'

function Faq() {
  return (
    <div className='wrapper' id='faq'>
        <div className='container'>
            <h2>Частые вопросы</h2>
            <p>Все , что вам нужно знать о продукте и товарах. Не можете найти ответ на интересующий вас вопрос? Пожалуйста <a href='contactus'>свяжитесь с нашей командой</a></p>
        </div>

        <div className='questions'>
            <div className='question'>
                <div className='question-header'>
                    <img src={Vector0} alt='vector icon'/><h3>Что такое «принт» ?</h3>
                </div>
                <p>«Принт» — это рисунок, узор или надпись, напечатанные на изделиях из ткани или керамики</p>
            </div>

            <div className='question'>
                <div className='question-header'>
                    <img src={Vector1} alt='vector icon'/><h3>Что такое 3D печать?</h3>
                </div>
                <p>Нанесение рисунка на ткань с использованием термопресса, что позволяет получить яркое объемное изображение, стойкое к различным воздействиям (стирка, глажка, повседневная носка).</p>
            </div>
        </div>

        <div className='questions'>
            <div className='question'>
                <div className='question-header'>
                    <img src={Vector2} alt='vector icon'/><h3>Как выбрать размер?</h3>
                </div>
                <p>Для этого достаточно измерить обхват груди и разделить полученное число на 2. Если значение при этом получилось нечетным, то его следует увеличить на единицу. Затем свериться с таблицей размеров. Можете <a href='/example'>взглянуть на пример!</a></p>
            </div>

            <div className='question'>
                <div className='question-header'>
                    <img src={Vector3} alt='vector icon'/><h3>Как стирать футболку с принтом?</h3>
                </div>
                <p>Стирать либо вручную, либо на деликатном режиме (макс. 600 оборотов при отжиме), вывернув футболку наизнанку.</p>
            </div>
        </div>
    </div>
  )
}

export default Faq