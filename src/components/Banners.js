import React, { useEffect, useState } from 'react'
import BannerBg from '../assets/images/banner.png'
import ProductCard from './ProductCard'
import Image from '../assets/images/image 10.png'
import Carousel from 'better-react-carousel'
import SliderPrevIcon from '../assets/icons/slider-prev.svg'
import SliderNextIcon from '../assets/icons/slider-next.svg'
import SliderPrevIconActive from '../assets/icons/slider-prev-active.svg'
import SliderNextIconActive from '../assets/icons/slider-next-active.svg'
import Valentine from '../assets/images/14feb.png'
import Mens from '../assets/images/23feb.png'
import AI from '../assets/images/ai.png'
import Wednesday from '../assets/images/wednesday.png'
import Popular from '../assets/images/popular.png'
import axios from 'axios'

const categories =  [Valentine, Mens, AI,Wednesday,Popular]

function SliderPrev({banner}) {
    return (
        <img 
        src={SliderPrevIcon} 
        className={banner ? 'slider-but-banner' : 'slider-but'}
        onMouseOver={e => e.currentTarget.src=SliderPrevIconActive}
        onMouseOut={e => e.currentTarget.src=SliderPrevIcon}
        />
    )
}

function SliderNext({banner}) {
    return (
        <img 
        src={SliderNextIcon} 
        className={banner ? 'slider-but-banner' : 'slider-but'} id={banner ? 'slider-next-banner' : 'slider-next'}
        onMouseOver={e => e.currentTarget.src=SliderNextIconActive}
        onMouseOut={e => e.currentTarget.src=SliderNextIcon}
        />
    )
}

function Banners() {
  const [bestsellers, setBestsellers] = useState([])

  useEffect(() => {
    axios.get('https://api.foryou.uz/api/getProducts?bestseller=1')
    .then(response => setBestsellers(response.data.data))
  },[])

  return (
    <>
      <div className='wrapper' id='banners'>
          <div className='banners'>
          <div>
            <div className='banner'>
              <img src={BannerBg} alt='t-shirt img'/>

              <div>
                <h3>@printy_na_futbolki</h3>

                <h2>Подпишитесь на телеграм канал нашего магазина!</h2>
                
                <a href="https://google.com" className="button">Подписаться</a>
              </div>

            </div>
            <div className='best-product'>
              <div className='slider'>
                  <Carousel cols={1} loop arrowLeft={<SliderPrev banner/>} arrowRight={<SliderNext banner/>}>
                      {bestsellers.map(bestseller => 
                      <Carousel.Item>
                          <ProductCard product={bestseller} banner/>
                      </Carousel.Item>
                        )}
                  </Carousel>
              </div>
            </div>
          </div>

          <Carousel cols={6} gap={16} rows={1} arrowLeft={<SliderPrev/>} arrowRight={<SliderNext/>}>
                {categories.map(category => 
                    <Carousel.Item key={category} style={{width: '150px'}}>
                        <img src={category} alt='category'/>
                    </Carousel.Item>)}
                {categories.map(category => 
                    <Carousel.Item key={category}>
                        <img src={category} alt='category'/>
                    </Carousel.Item>)}
          </Carousel>
        </div>
      </div>

      <div className='wrapper' id='banners-mobile'>
            <div className='banner'>
                <img src={BannerBg} alt='t-shirt img'/>

                <div>
                  <h3>@printy_na_futbolki</h3>

                  <h2>Подпишитесь на телеграм канал нашего магазина!</h2>
                  
                  <a href="https://google.com" className="button">Подписаться</a>
                </div>
            </div>

            <Carousel cols={1} gap={8}>
                {categories.map(category => 
                    <Carousel.Item key={category}>
                        <img src={category} alt='category' className='banner-img'/>
                    </Carousel.Item>)}
           </Carousel>
            <div className='best-product'>
              <h2>Хиты продаж</h2>
                  <Carousel cols={1} gap={50} loop arrowLeft={<SliderPrev banner/>} arrowRight={<SliderNext banner/>}>
                  {bestsellers.map(bestseller => 
                      <Carousel.Item>
                          <ProductCard product={bestseller} banner/>
                      </Carousel.Item>
                        )}
                  </Carousel>
            </div>

            <h2>Футболки с принтами, одежда и другие 
товары на заказ</h2>
          </div>
    </>
    
  )
}

export default Banners