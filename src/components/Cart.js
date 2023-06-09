import React from 'react'
import CartIcon from '../assets/icons/shopping-cart.svg'
function Cart({products}) {
  return (
    <div className='cart-wrapper'>
        <img src={CartIcon} alt='cart-icon'/>
        <div className='products-in-cart'><span>1</span></div>
    </div>
  )
}

export default Cart