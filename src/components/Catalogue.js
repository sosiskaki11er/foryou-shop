import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate, useParams, useSearchParams} from 'react-router-dom'
import Hit from '../assets/icons/hit.svg'
import Tag from '../assets/icons/tag.svg'
import New from '../assets/icons/new.svg'
import List from '../assets/icons/products-list.svg'
import Grid from '../assets/icons/products-grid.svg'
import Filter from '../assets/icons/filter.svg'
import Price from './Price'
import Size from './Size'
import Color from './Color'
import Products from './Products'
import MainImage from '../assets/images/product/image 19.png'
import Image1 from '../assets/images/product/image 19-1.png'
import Image2 from '../assets/images/product/image 19-2.png'
import Image3 from '../assets/images/product/image 19-3.png'
import Image4 from '../assets/images/product/image 19-4.png'
import BigDiscounts from './BigDiscounts'
import Carousel from 'better-react-carousel'
import axios from 'axios'

function Catalogue() {
    let location = useLocation()
    const isHome = location.pathname.split('/')[1] !== 'catalogue'
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [filterBy, setFilterBy] = useState(searchParams.get('new') || searchParams.get('bestseller') || searchParams.get('big_discount'))
    const [view, setView] = useState(Grid)
    const [categories, setCategories] = useState([])
    const [mainCategory, setMainCategory] = useState(searchParams.get('category'))
    console.log(mainCategory)
    const [types, setTypes] = useState([])
    const [end_amount, setEnd_amount] = useState(searchParams.get('end_amount') || 190000)
    const [start_amount, setStart_amount] = useState(searchParams.get('start_amount') || 39000)
    const [size, setSize] = useState(searchParams.get('size')=== null ? [] : searchParams.get('size').split(','))
    const [color, setColor] = useState(searchParams.get('color')=== null ? [] : searchParams.get('color').split(','))
    const [products, setProducts] = useState([])
    const [Type, setType] = useState(searchParams.get('type_of_clothes'))

    useEffect(() => {
        axios.get('https://api.foryou.uz/api/getCategories')
        .then(response => setCategories(response.data.data))

        axios.get('https://api.foryou.uz/api/getTypeClothes')
        .then(response => setTypes(response.data.data))
    },[])

    useEffect(() => {
        axios.get(`https://api.foryou.uz/api/getProducts?${mainCategory!=null ? `&category=${mainCategory}`: ''}${size[0] != null ? `&size=${size}` : ''}${color[0] != null ? `&color=${color}` : ''}${Type != null ? `&type_of_clothes=${Type}` : ''}${filterBy != null ? `&${filterBy}=1` : ''}${start_amount != null ? `&start_amount=${start_amount}` : ''}${end_amount != null ? `&end_amount=${end_amount}` : ''}`)
        .then(response => setProducts(response.data.data))
        if(isHome){
            navigate(`${isHome ? '/?' : '/catalogue?'}${mainCategory!=null ? `&category=${mainCategory}`: ''}${size[0] != null ? `&size=${size}` : ''}${color[0] != null ? `&color=${color}` : ''}${Type != null ? `&type_of_clothes=${Type}` : ''}${filterBy != null ? `&${filterBy}=1` : ''}`)
        }
        else{
                    navigate(`${isHome ? '/?' : '/catalogue?'}${mainCategory!=null ? `&category=${mainCategory}`: ''}${size[0] != null ? `&size=${size}` : ''}${color[0] != null ? `&color=${color}` : ''}${Type != null ? `&type_of_clothes=${Type}` : ''}${filterBy != null ? `&${filterBy}=1` : ''}${start_amount != null ? `&start_amount=${start_amount}` : ''}${end_amount != null ? `&end_amount=${end_amount}` : ''}`)
        }


    },[mainCategory,size,color,Type,filterBy, end_amount, start_amount])

    function HandleFilter(filter){
        if(filter === filterBy){
            setFilterBy('')
        }
        else{
            setFilterBy(filter)
        }
    }

    function HandleView(view){
        if(view === List){
            setView(Grid)
        }
        else{
            setView(List)
        }
    }

  return (
    <>
        <div className='wrapper' id='catalogue'>
            <div className='container'>
                <div className='catalogue'>
                    <h2
                     onClick={() => {
                        navigate('/catalogue')
                        setMainCategory(null)
                    }}
                    >Каталог</h2>

                    <ul className='catalogue-list'>
                        {categories.map(category => 
                        <li key={category.name}>
                            <div>
                                <h4 
                                    style={{
                                        color: (category.id === mainCategory ||
                                        (category.sub_categories.filter(sub_category => sub_category.id === mainCategory).length > 0))
                                        && '#5900E6'}}
                                    onClick={() => 
                                    {
                                    if(isHome){
                                        navigate(`/catalogue?&category=${category.id}`)
                                        setMainCategory(category.id)
                                    }
                                    setMainCategory(category.id)
                                    }}>{category.name}
                                </h4><span>23</span>   
                            </div> 

                            <ul className='post-category'>
                                {
                                (mainCategory === category.id ||
                                (category.sub_categories.filter(sub_category => sub_category.id === mainCategory).length > 0)    
                                ) && 
                                category?.sub_categories?.map(print => 
                                <li
                                    key={print.name}
                                    style={{color: print.id === mainCategory && '#5900E6'}}
                                    onClick={() => setMainCategory(print.id)}
                                >{print.name}</li>)
                                }
                            </ul>
                        </li>)}
                    </ul>
                </div>

                {!isHome &&             
                <div className='filters'>
                    <h3>Фильтры</h3>
                    
                    <ul className='catalogue-list'>
                        {types.map(type => 
                            <li 
                            key={type.id} 
                            onClick={() => {setType(type.id)}}
                            style={{color: Type === type.id && '#5900E6'}}
                            ><div><h4>{type.name}</h4></div></li>
                        )}
                    </ul>

                    <Price end_amount={end_amount} setEnd_amount={setEnd_amount} start_amount={start_amount} setStart_amount={setStart_amount}/>

                    <Size Size={size} setSize={setSize}/>

                    <Color color={color} setColor={setColor}/>
                </div>}

            </div>

            <div className='container-products'>
                {!isHome &&
                    <div className='view-mobile'>
                        <div 
                        className='view'
                        onClick={() => HandleView(view)}
                        >
                            <img 
                            src={view === List ? Grid : List}
                            alt='view'
                            />
                            <h4>{view === List ? 'Таблица' : 'Список'}</h4>
                        </div>

                        <div className='view'>
                            <img src={Filter} alt='filter'/>
                            <h4>Фильтры</h4>
                        </div>
                    </div>
                }

                <div className='container filters'>
                    <div 
                        className= {filterBy === 'bestseller' ? 'filter-by active' : 'filter-by'}
                        onClick={() => HandleFilter('bestseller')}
                    >
                        <img src={Hit} alt='hit icon'/>
                        <h4>Хиты продаж</h4>
                    </div>

                    <div 
                        className= {filterBy === 'big_discount' ? 'filter-by active' : 'filter-by'}
                        onClick={() => HandleFilter('big_discount')}    
                    >
                        <img src={Tag} alt='hit icon'/>
                        <h4>Большие скидки</h4>
                    </div>

                    <div 
                        className= {filterBy === 'new' ? 'filter-by active' : 'filter-by'}
                        onClick={() => HandleFilter('new')}    
                    >
                        <img src={New} alt='hit icon'/>
                        <h4>Самые новые</h4>
                    </div>
                </div>

                <div className='container filters-mobile'>
                    <Carousel cols={3} gap={8}>
                        <Carousel.Item>
                            <div 
                                className= {filterBy === 'bestseller' ? 'filter-by active' : 'filter-by'}
                                onClick={() => HandleFilter('bestseller')}
                            >
                                <img src={Hit} alt='hit icon'/>
                                <h4>Хиты продаж</h4>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div 
                                className= {filterBy === 'big_discount' ? 'filter-by active' : 'filter-by'}
                                onClick={() => HandleFilter('big_discount')}    
                            >
                                <img src={Tag} alt='hit icon'/>
                                <h4>Большие скидки</h4>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div 
                                className= {filterBy === 'new' ? 'filter-by active' : 'filter-by'}
                                onClick={() => HandleFilter('new')}    
                            >
                                <img src={New} alt='hit icon'/>
                                <h4>Самые новые</h4>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                {
                    products &&
                <Products products={products} view={view}/>
                }
            </div>
        </div>
        
        <BigDiscounts/>
    </>
  )
}

export default Catalogue