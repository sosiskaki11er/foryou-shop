import React, { useState } from 'react'
import Heart from '../assets/icons/Heart.svg'
import Carousel from 'better-react-carousel'

const sizes = ['XS (44-46)', 'S (44-46)', 'M (44-46)', 'L (44-46)', 'XL (44-46)', 'XXL (44-46)'];

function Product({product}) {
    const [img, setImg] = useState(product?.img[0])
    const [Size, setSize] = useState([])
    const [color, setColor] = useState(product.colors[0])
    const [add, setAdd] = useState(false)
    const [fav, setFav] = useState(false)

    function handleSize(size) {
        console.log(Size)
        if(Size.indexOf(size) >= 0) {
            setSize(Size.filter( item => item!=size))
        }
        else{
            setSize([...Size,size])
        }
    }

  return (
    <div className='wrapper' id='product'>
        <div className='container'>
            <div className='container'>
                <div className='gallery'>
                    {product?.img.map( img => 
                        <img src={img}
                        onMouseOver={() => setImg(img)}
                        onMouseOut={() => setImg(product?.img[0])}
                        
                        />
                        )}
                </div>

                <img src={img} alt='product image'className='show-img'/>
                
                <div className='product-slider'>
                    <Carousel cols={1} showDots={true}>
                    {product?.img.map( img => 
                            <Carousel.Item>
                                <img src={img}
                                onMouseOver={() => setImg(img)}
                                onMouseOut={() => setImg(product?.img[0])}
                                className='slider-img'
                                />
                            </Carousel.Item>
                            )}
                    </Carousel>
                </div>
            </div>
            
            <div className='product-info'>
                <div className='product-info-header'>
                    <h2 className='product-title'>{product.title}</h2>

                    <div className='container'>
                        <h5>{product.article}</h5>
                        <h5 className='feedback-num'>Отзывов: {product.feedbacks}</h5>
                    </div>  
                </div>

                <div className='product-prices'>
                    <h2 className='product-price'>{product.price}</h2>
                    <h3 className='product-prev-price'>{product.prevPrice}</h3>
                </div>

                <div className='product-selection'>   
                    <div className='container'>
                        <h5>Размер:</h5>
                        <h5><a>Как узнать размер?</a></h5>
                    </div>
            
                    <div className='container sizes'>
                        {sizes.map(size =>
                            <div 
                            className={Size.indexOf(size) >= 0 ? 'product-size active': 'product-size'}
                            onClick={() => handleSize(size)}
                            >
                                {size}
                            </div>    
                        )}
                    </div>

                    <h5>Цвет:</h5>
                    <div className='container color'>
                            {product.colors.map(colorImage => 
                                <img 
                                src={colorImage} 
                                className={colorImage === color ? 'selected': ''}
                                onClick={() => setColor(colorImage)}
                                />    
                            )}
                    </div>

                    <div className='container material'>Состав:<h5>{product.material}</h5></div>
                </div>

                <div className='product-prices mobile'>
                    <h2 className='product-price'>{product.price}</h2>
                    <h3 className='product-prev-price'>{product.prevPrice}</h3>
                </div>

                <div className='container buttons'>
                    <button 
                    className={add ? 'add-to-cart active' : 'add-to-cart'}
                    onClick={() => setAdd(!add)}
                    >
                        {add ? 'Убрать из корзины' : 'Добавить в корзину'}
                    </button>

                    <button 
                    className={fav ? 'fav-but active' : 'fav-but'}
                    onClick={() => setFav(!fav)}
                    >
                        <img src={Heart} alt='fav icon' className='fav'/>
                    </button>
                </div>
            </div>
        </div>

        <div className='about-product'>
            <h3>О товаре</h3>
            <p>{product.detailedDesc}</p>
            <ul>
                <li>Детали: {product.details}</li>
                <li>Состав: {product.material}</li>
                <li>Правила ухода: {product.careRules}</li>
            </ul>
        </div>
    </div>
  )
}

export default Product