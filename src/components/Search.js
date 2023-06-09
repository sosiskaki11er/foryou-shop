import React from 'react'
import SearchIcon from '../assets/icons/search.svg'
import SearchIconActive from '../assets/icons/search-active.svg'
function Search({active,onClick}) {
  return (
    <div 
    className={active ? 'container search active' : 'container search'}>
        <input 
        type='text' 
        placeholder='Например, человек паук'
        className={active ? 'search-input active' : 'search-input'}
        />
        <img src={active ? SearchIconActive : SearchIcon} alt='search icon' onClick={onClick}/>
    </div>
  )
}

export default Search