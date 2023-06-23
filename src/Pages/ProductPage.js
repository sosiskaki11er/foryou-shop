import React, { useEffect, useState } from 'react'
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
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom'



function ProductPage() {
    const [product, setProduct] = useState({})
    const productId = useParams().id
    const location = useLocation()

    useEffect(() => {
        axios.get(`https://api.foryou.uz/api/getProductCard/${productId}`)
        .then(response => setProduct(response.data.data))
    }, [])

    useEffect(() => {
        axios.get(`https://api.foryou.uz/api/getProductCard/${productId}`)
        .then(response => setProduct(response.data.data))
    }, [location])
  return (
    <>  
        <div className='wrapper'>
            <div className='path'>
                <h5>Главная</h5>
                <div className='line'/>
                <h5>Вся одежда</h5>
                <div className='line'/>
                <h5>{product.type_of_clothes}</h5>
                <div className='line'/>
                <h5>{product.category}</h5>
            </div>

            <div className='path-mobile'>
                <img src={Arrow} alt='arrow-path'/>
                <h5>Интересные футболки</h5>
            </div>
        </div>
        <Product product={product}/>
        <Feedbacks feedbacks={product.reviews}/>
        <BigDiscounts/>
    </>
  )
}

export default ProductPage