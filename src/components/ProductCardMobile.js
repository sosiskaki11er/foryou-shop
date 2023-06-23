import React from 'react'
import Crown from '../assets/icons/crown.svg'
import { useNavigate } from 'react-router-dom'


function ProductCardMobile({product, list}) {
    const navigate = useNavigate()
  return (
    <div className={list ? 'card-wrapper-mobile list' : 'card-wrapper-mobile'}
        onClick={() => navigate(`/product/${product.id}`)}>
        <div className='crown'>
            <img src={Crown} alt='crown icon'/>
        </div>

        <img 
        src={product.image} 
        alt='T shirt anime'
        onMouseOver={e => e.currentTarget.src = product.foto_gallary[0] || product.image}
        onMouseOut={e => e.currentTarget.src = product.image}
        />
        <div className='container'>
            <div>
            <h4 className='product-card-price'>{product.price}</h4>
            <h5 className='product-card-prevprice'>{product.old_price}</h5>
            </div>
            {product.discount > 0 &&
            <div className='discount'>
                {product.discount+ '%'}
            </div>
            }
        </div>
        <p>{product.short_description}</p>
    </div>
  )
}

export default ProductCardMobile