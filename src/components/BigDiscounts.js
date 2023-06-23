import React, { useEffect, useState } from 'react'
import Carousel from 'better-react-carousel'
import SliderPrevIcon from '../assets/icons/slider-prev.svg'
import SliderNextIcon from '../assets/icons/slider-next.svg'
import SliderPrevIconActive from '../assets/icons/slider-prev-active.svg'
import SliderNextIconActive from '../assets/icons/slider-next-active.svg'
import ProductCard from './ProductCard'
import Image from '../assets/images/image 10.png'
import ProductCardMobile from './ProductCardMobile'
import axios from 'axios'

const product = {
    img: [Image],
    price: '120.000 сум',
    prevPrice: '160.000 сум',
    discount:'20%',
    desc: 'Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон'
  }

function SliderPrev({banner}) {
    return (
        <img 
        src={SliderPrevIcon} 
        className={banner ? 'slider-but-banner' : 'slider-but discounts'}
        onMouseOver={e => e.currentTarget.src=SliderPrevIconActive}
        onMouseOut={e => e.currentTarget.src=SliderPrevIcon}
        />
    )
}

function SliderNext({banner}) {

    return (
        <img 
        src={SliderNextIcon} 
        className={banner ? 'slider-but-banner' : 'slider-but discounts'} id={banner ? 'slider-next-banner' : 'slider-next'}
        onMouseOver={e => e.currentTarget.src=SliderNextIconActive}
        onMouseOut={e => e.currentTarget.src=SliderNextIcon}
        />
    )
}

function BigDiscounts({catalogue}) {
    const [bigDiscounts, setBigDiscounts] = useState([])

    useEffect(() => {
        axios.get('https://api.foryou.uz/api/getProducts?big_discount=1')
        .then(response => setBigDiscounts(response.data.data))
      },[])

  return (
    <div className='wrapper' id='big-discounts' style={{marginBottom:catalogue ? '168px' : '132px'}}>
        <h2>Большие скидки</h2>
        <div className='big-discounts-slider'>
            <Carousel cols={4} arrowLeft={<SliderPrev/>} arrowRight={<SliderNext/>}>
                {bigDiscounts.map(big_discount => 
                        <Carousel.Item>
                            <ProductCard product={big_discount} />
                        </Carousel.Item>
                    )}
            </Carousel>
        </div>

        <div className='big-discounts-slider-mobile'>
            <Carousel cols={2} gap={12} arrowLeft={<SliderPrev/>} arrowRight={<SliderNext/>}>
                {bigDiscounts.map(big_discount => 
                    <Carousel.Item key={big_discount.id}>
                        <ProductCardMobile product={big_discount} list={false}/> 
                    </Carousel.Item>
                    )}
            </Carousel>
        </div>
    </div>
  )
}

export default BigDiscounts