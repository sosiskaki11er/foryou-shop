import React, { useState } from 'react'
import Arrow from '../assets/icons/Arrow.svg'

const sizes = [
    {
        id:1,
        name:'XS'
    },
    {
        id:2,
        name:'M'
    },
    {
        id:3,
        name:'L'
    },
    {
        id:4,
        name:'XL'
    },
    {
        id:5,
        name:'XXL'
    }
];

function Color({color, setColor}) {
    const [show, setShow] = useState(false)

    function handleClick(){
        setShow(!show)
    }

    function handleChange(e){
        if(color.indexOf(e.target.value) === -1){
            setColor([...color,e.target.value])
        }
        else{
            setColor(color.filter(size => size !== e.target.value))
        }
    }
    
  return (
    <div className='container' id='size'>
        <div className='filter-header'>
            <h4>
            Цвета
            </h4>

            <img src={Arrow} alt='arrow' onClick={handleClick} className={show ? '' : 'open'}/>
        </div>

        {show &&
            <ul>
                {sizes.map(size => 
                <li key={size.id}>
                    <input type='checkbox' value={size.id} onChange={e => handleChange(e)} checked={color.indexOf(String(size.id)) !== -1}/>
                    <h4>{size.name}</h4>
                </li>)}
                
            </ul>
        }
    </div>
  )
}

export default Color