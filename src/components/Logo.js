import React from 'react'
import BlackLogo from '../assets/icons/logo black.svg'
import WhiteLogo from '../assets/icons/logo white.svg'


function Logo({color,mobile}) {
  return (
    <a href='/'>
        <img 
        src={color === 'black' ? BlackLogo : WhiteLogo} 
        alt='brand logo'
        width={mobile ? 105 : 165}
        />
    </a>
  )
}

export default Logo