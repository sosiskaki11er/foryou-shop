import React from 'react'
import Star from '../assets/icons/star.svg'
import EmptyStar from '../assets/icons/empty star.svg'
import Carousel from 'better-react-carousel'
import SliderPrevIcon from '../assets/icons/slider-prev.svg'
import SliderNextIcon from '../assets/icons/slider-next.svg'

function getStars(starNum){
    let result=[]
    for(let i=0;i<starNum;i++){
        result.push(Star)
    }
    let emptyNum = 5 - result.length
    if(emptyNum > 0){
        for(let i=0; i < emptyNum;i++ ){
            result.push(EmptyStar)
        }
    }
    return result
}

function SliderPrev() {
    return (
        <img src={SliderPrevIcon} className={'slider-but discounts'}/>
    )
}

function SliderNext() {
    return (
        <img src={SliderNextIcon} className={'slider-but discounts'} id={'slider-next'}/>
    )
}

function Feedback({feedback}) {
    const stars = getStars(feedback.star)
  return (
    <div className='container' id='feedback'>
        <div className='container'>
            <div>
                <h4 className='feedback-author'>{feedback.name}</h4>
                <h5 className='feedback-date'>{feedback.phone}</h5>
            </div>

            <div className='stars'>
                {stars.map( star => 
                    <img src={star} alt='star'/>    
                )}
            </div>
        </div>

        <p>{feedback.message}</p>

        <Carousel cols={4} arrowLeft={<SliderPrev/>} arrowRight={<SliderNext/>}>
            <Carousel.Item>
                <img src={feedback.file} className='review-img'/>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Feedback