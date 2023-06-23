import React from 'react'
import BlackLogo from '../assets/icons/logo black.svg'
import WhiteLogo from '../assets/icons/logo white.svg'
import { useNavigate } from 'react-router-dom'


function Logo({color,mobile}) {
  const navigate = useNavigate()
  return (
    <a onClick={() => navigate('/')}>
        <img 
        src={color === 'black' ? BlackLogo : WhiteLogo} 
        alt='brand logo'
        width={mobile ? 105 : 165}
        />
    </a>
  )
}

export default Logo