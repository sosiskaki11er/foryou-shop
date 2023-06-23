import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Arrow from '../assets/icons/arrow-path.svg'
import axios from 'axios';

function BreadCrumbs() {
  const navigate = useNavigate()
  const [searchParams,setSearchParams] = useSearchParams()
  const [categoryId, setCategoryId] = useState(searchParams.get('category'))
  const [category, setCategory] = useState()
  const location = useLocation()

  useEffect(() => {
    if(categoryId !== null) {
      axios.get(`https://api.foryou.uz/api/getSingleCategory/${categoryId}`)
    .then(response => setCategory(response.data.data.name))
    }
    setCategoryId(searchParams.get('category'))
  },[])

  useEffect(() => {
    setCategoryId(searchParams.get('category'))
  },[location,categoryId])

  useEffect(() => {
    if(categoryId !== null) {
      axios.get(`https://api.foryou.uz/api/getSingleCategory/${categoryId}`)
    .then(response => setCategory(response.data.data.name))
    }
  },[categoryId])

  return (
    <div className='wrapper' id='breadcrumbs'>
        <div className='path'>
            <h5 id='main'>Главная</h5>
            <div className='line'></div>
            <h5>Каталог</h5>
        </div>

        <div className='path-mobile' onClick={() => navigate('/')}>
            <img src={Arrow} alt='arrow-path'/>
            <h5><a >Главная</a></h5>
        </div>

        <h2>{category}</h2>
    </div>
  )
}

export default BreadCrumbs