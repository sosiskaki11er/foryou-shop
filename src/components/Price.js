import React, { useState } from 'react'
import Arrow from '../assets/icons/Arrow.svg'

function Price() {
    const [price, setPrice] = useState(39000)
    function handleChange(e){
        setPrice(e.target.value)
    }

    function handleClick(){
        setShow(!show)
    }
    const [show, setShow] = useState(true)
  return (
    <div className='container' id='price'>
        <div className='filter-header'>
            <h4>Цена</h4>

            <img src={Arrow} alt='arrow' onClick={handleClick} className={show ? '' : 'open'}/>
        </div>

        {show &&
        <>
            <input 
                type='range' 
                min={39000} 
                max={9999777}
                value={price}
                onChange={e => handleChange(e)}
            />

            <div className='container'>
                <div>
                <span className='price-desc'>От</span>
                
                <input 
                value={39000}
                className='price-input'
                /> 

                <span className='som'>сум</span>  
                </div>



                <div>
                <span className='price-desc'>До</span>   

                <input
                value={price}
                onChange={e => handleChange(e)}
                className='price-input'
                />

                <span className='som'>сум</span>
                </div>
            </div>
        </>
        }
        
    </div>
  )
}

export default Price