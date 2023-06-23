import React, { useState } from 'react'
import Arrow from '../assets/icons/Arrow.svg'
import { useNavigate } from 'react-router-dom'

function Price({end_amount, setEnd_amount, start_amount, setStart_amount}) {
    function handleStartAmount(amount){
        setStart_amount(amount)
    }

    function handleEndAmount(amount) {
        setEnd_amount(amount)
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
                max={500000}
                value={end_amount}
                onChange={(e) => handleEndAmount(e.target.value)}
            />

            <div className='container'>
                <div>
                <span className='price-desc'>От</span>
                
                <input 
                className='price-input'
                value={start_amount}
                onChange={(e) => handleStartAmount(e.target.value) }
                /> 

                <span className='som'>сум</span>  
                </div>



                <div>
                <span className='price-desc'>До</span>   

                <input
                className='price-input'
                value={end_amount}
                onChange={(e) => handleEndAmount(e.target.value)}
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