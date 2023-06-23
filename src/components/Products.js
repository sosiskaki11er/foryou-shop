import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import ArrowLeft from '../assets/icons/arrow left.svg'
import ArrowRight from '../assets/icons/arrow right.svg'
import DoubleLeft from '../assets/icons/double left.svg'
import DoubleRight from '../assets/icons/double right.svg'
import ProductCardMobile from './ProductCardMobile'
import List from '../assets/icons/products-list.svg'

function Products({products,view}) {
    const [page,setPage] = useState(1)
    const [showProduct, setShowProduct] = useState([...products.slice((page-1)*12,(page*12))])

    const [showAll, setShowAll] = useState(false)
    const HandleShowAll = () => {
        setShowProduct(products)
        setShowAll(true)
    }

    useEffect(() => {
        setShowProduct([...products.slice((page-1)*12,(page*12))])
    }, [products])

    function HandlePage(page) {
        if(page < 1) {
            return 0
        }
        else if(page > numOfPages.length) {
            return 0
        }
        else{
            setPage(page)
        }
        setShowProduct(products.slice((page-1)*12,(page*12)))
    }

    const numOfPages = getPages(products)

    function getPages(array){
        let numOfPages = Math.ceil(array.length/12)
        let result = []
        for(let i=0; i<numOfPages; i++){
            result.push(i+1)
        }
        return result
    }

  return (
    <>
    <div className='products-list'>
        {showProduct.map(product => 
            <ProductCard product={product}/>  
        )}
    </div>

    <div className='products-list-mobile'>
        {showProduct.map(product => 
            <ProductCardMobile product={product} list={view === List ? true : false}/>  
        )}
    </div>

    {
        !showAll && <button className='show-all' onClick={HandleShowAll}>Смотреть все</button> 
    } 

    {
        !showAll && 
        <div className='container pagination'>
            <img 
            src={DoubleLeft} 
            alt='pre-prev'
            className={page <= 2 ? 'arrow-page inactive' : 'arrow-page'}
            onClick={() => HandlePage(page-2)}
            />

            <img 
            src={ArrowLeft} 
            alt='prev'
            className={page <= 1 ? 'arrow-page inactive' : 'arrow-page'}
            onClick={() => HandlePage(page-1)}
            />

            <div className='container'>
                {
                    numOfPages.map( num => 
                        <div 
                        className={num === page ? 'page-num active' : 'page-num'}
                        onClick={() => HandlePage(num)}
                        >
                            {num}</div>
                        )
                }
            </div>

            <img 
            src={ArrowRight} 
            alt='next'
            onClick={() => HandlePage(page+1)}
            className={page === numOfPages.length ? 'arrow-page inactive' : 'arrow-page'}
            />

            <img 
            src={DoubleRight} 
            alt='next-next'
            onClick={() => HandlePage(page+2)}
            className={page === (numOfPages.length-1) ? 'arrow-page inactive' : 'arrow-page'}
            />
        </div>
    }   
    </>
  )
}

export default Products