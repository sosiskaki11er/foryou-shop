import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Arrow from '../assets/icons/Arrow.svg'

const sizes = ['Все размеры', 'XS', 'M', 'L', 'XL', '2XL'];

function Color() {
        const navigate = useNavigate()
        let chosenSizes = []
        const [show, setShow] = useState(false)
    
        function handleClick(){
            setShow(!show)
        }
    
        function handleChange(e){
            if(chosenSizes.indexOf(e.target.value) === -1){
                chosenSizes.push(e.target.value)
            }
            else{
                chosenSizes = chosenSizes.filter(size => size != e.target.value)
            }
            console.log(chosenSizes)
        }
    
      return (
        <div className='container' id='size'>
            <div className='filter-header'>
                <h4>
                Цвет
                </h4>
    
                <img src={Arrow} alt='arrow' onClick={handleClick} className={show ? '' : 'open'}/>
            </div>
    
            {show &&
                <ul>
                    {sizes.map(size => <li key={size}><input type='checkbox' value={size} onChange={e => handleChange(e)}/><h4>{size}</h4></li>)}
                    
                </ul>
            }
        </div>
      )
    
}

export default Color