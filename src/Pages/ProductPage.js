import React from 'react'
import MainImage from '../assets/images/product/image 19.png'
import Image1 from '../assets/images/product/image 19-1.png'
import Image2 from '../assets/images/product/image 19-2.png'
import Image3 from '../assets/images/product/image 19-3.png'
import Image4 from '../assets/images/product/image 19-4.png'
import ImageColor0 from '../assets/images/product/image 19.png'
import ImageColor1 from '../assets/images/product/image 20.png'
import FeedbackImage from '../assets/images/product/image 26.png'
import Product from '../components/Product'
import BigDiscounts from '../components/BigDiscounts'
import Feedbacks from '../components/Feedbacks'
import Arrow from '../assets/icons/arrow-path.svg'

const product={
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    colors: [ImageColor0,ImageColor1],
    feedback: [{
        author:'Макар К.',
        date:'23 января 2023',
        desc:'Из четырёх футболок открыл пока эту. Качеством и внешним видом доволен. Остальные на подарок, так что открывать пока нельзя.',
        stars:5,
        img:[FeedbackImage,FeedbackImage,FeedbackImage,FeedbackImage]
    },
    {
        author:'Макар К.',
        date:'23 января 2023',
        desc:'Из четырёх футболок открыл пока эту. Качеством и внешним видом доволен. Остальные на подарок, так что открывать пока нельзя.',
        stars:4,
        img:[FeedbackImage,FeedbackImage,FeedbackImage,FeedbackImage]
    },
    {
        author:'Макар К.',
        date:'23 января 2023',
        desc:'Из четырёх футболок открыл пока эту. Качеством и внешним видом доволен. Остальные на подарок, так что открывать пока нельзя.',
        stars:2,
        img:[FeedbackImage,FeedbackImage,FeedbackImage,FeedbackImage]
    },
    {
        author:'Макар К.',
        date:'23 января 2023',
        desc:'Из четырёх футболок открыл пока эту. Качеством и внешним видом доволен. Остальные на подарок, так что открывать пока нельзя.',
        stars:3,
        img:[FeedbackImage,FeedbackImage,FeedbackImage,FeedbackImage]
    },
    {
        author:'Макар К.',
        date:'23 января 2023',
        desc:'Из четырёх футболок открыл пока эту. Качеством и внешним видом доволен. Остальные на подарок, так что открывать пока нельзя.',
        stars:1,
        img:[FeedbackImage,FeedbackImage,FeedbackImage,FeedbackImage]
    },
]
}

function ProductPage() {
  return (
    <>  
        <div className='wrapper'>
            <div className='path'>
                <h5>Главная</h5>
                <div className='line'/>
                <h5>Вся одежда</h5>
                <div className='line'/>
                <h5>Футболки</h5>
                <div className='line'/>
                <h5>Интересные футболки</h5>
                <div className='line'/>
                <h5>Футболка Арт-бокс</h5>
            </div>

            <div className='path-mobile'>
                <img src={Arrow} alt='arrow-path'/>
                <h5>Интересные футболки</h5>
            </div>
        </div>
        <Product product={product}/>
        <Feedbacks feedbacks={product.feedback}/>
        <BigDiscounts/>
    </>
  )
}

export default ProductPage