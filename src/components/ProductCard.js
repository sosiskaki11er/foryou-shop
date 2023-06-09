import React from 'react'
import Crown from '../assets/icons/crown.svg'
import { useNavigate } from 'react-router-dom'

function ProductCard({product, banner}) {
  const navigate = useNavigate()

  return (
    <div className={banner ? 'card-wrapper best' : 'card-wrapper'}>
        {!banner &&
        <div className='crown'>
            <img src={Crown} alt='crown icon'/>
        </div>
        
        }
        <img 
        src={product.img[0]} 
        alt='T shirt anime'
        onClick={() => navigate(`/product/${product.title}`)}
        onMouseOver={e => e.currentTarget.src = product.img[2] || product.img[0]}
        onMouseOut={e => e.currentTarget.src = product.img[0]}
        />
        <div className='container'>
            <div>
            <h4 className='product-card-price'>{product.price}</h4>
            <h5 className='product-card-prevprice'>{product.prevPrice}</h5>
            </div>
            {product.discount &&
            <div className='discount'>
                {product.discount}
            </div>
            }
        </div>
        <p>{product.desc}</p>
    </div>
  )
}

export default ProductCard