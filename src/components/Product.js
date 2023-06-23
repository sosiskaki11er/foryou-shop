import React, { useEffect, useState } from 'react'
import Heart from '../assets/icons/Heart.svg'
import Carousel from 'better-react-carousel'
import { useNavigate, useSearchParams } from 'react-router-dom'



function Product({product}) {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [img, setImg] = useState(product.image)
    const [Size, setSize] = useState(searchParams.get('size')=== null ? [] : searchParams.get('size').split(','))
    console.log(Size)
    const [color, setColor] = useState(searchParams.get('color') || null)
    const [add, setAdd] = useState(false)
    const [fav, setFav] = useState(false)

    useEffect(() => {
        setImg(product.image)
    },[product.image])

    useEffect(() => {
        navigate(`?${color!=null ? `color=${color}` : ''}${Size[0] != null ? `size=${Size}` : ''}`)
        console.log(color)
        console.log(Size)
    },[color, Size])

    function handleSize(size) {
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
                    {product?.foto_gallary?.map( img => 
                        <img src={img}
                        onMouseOver={() => setImg(img)}
                        onMouseOut={() => setImg(product.image)}
                        
                        />
                        )}
                </div>

                <img src={img} alt='product image'className='show-img'/>
                
                <div className='product-slider'>
                    <Carousel cols={1} showDots={true}>
                    {product?.foto_gallary?.map( img => 
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
                    <h2 className='product-title'>{product.name}</h2>

                    <div className='container'>
                        <h5>{product.vendor_code}</h5>
                        <h5 className='feedback-num'>Отзывов: {product.reviews?.length}</h5>
                    </div>  
                </div>

                <div className='product-prices'>
                    <h2 className='product-price'>{product.price}</h2>
                    <h3 className='product-prev-price'>{product.old_price}</h3>
                </div>

                <div className='product-selection'>   
                    <div className='container'>
                        <h5>Размер:</h5>
                        <h5><a>Как узнать размер?</a></h5>
                    </div>
            
                    <div className='container sizes'>
                        {product.sizes?.map(size =>
                            <div 
                            className={Size.indexOf(String(size.id)) >= 0 ? 'product-size active': 'product-size'}
                            onClick={() => handleSize(String(size.id))}
                            >
                                {size.name}
                            </div>    
                        )}
                    </div>

                    <h5>Цвет:</h5>
                    <div className='container color'>
                            {product.colors?.map(Color => 
                                <img 
                                src={product.image} 
                                className={Color.id === color ? 'selected': ''}
                                onClick={() => setColor(Color.id)}
                                />    
                            )}
                    </div>

                    <div className='container material'>Состав:<h5>{product.compound}</h5></div>
                </div>

                <div className='product-prices mobile'>
                    <h2 className='product-price'>{product.price}</h2>
                    <h3 className='product-prev-price'>{product.old_price}</h3>
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
            <p>{product.description}</p>
            <ul>
                <li>Детали: {product.description}</li>
                <li>Состав: {product.compound}</li>
                <li>Правила ухода: {product.description}</li>
            </ul>
        </div>
    </div>
  )
}

export default Product