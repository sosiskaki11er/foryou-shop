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
    if(result.length < 5){
        for(let i=0; i < 6-result.length;i++ ){
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
    const stars = getStars(feedback.stars)
  return (
    <div className='container' id='feedback'>
        <div className='container'>
            <div>
                <h4 className='feedback-author'>{feedback.author}</h4>
                <h5 className='feedback-date'>{feedback.date}</h5>
            </div>

            <div className='stars'>
                {stars.map( star => 
                    <img src={star} alt='star'/>    
                )}
            </div>
        </div>

        <p>{feedback.desc}</p>

        <Carousel cols={4} arrowLeft={<SliderPrev/>} arrowRight={<SliderNext/>}>
            {feedback.img.map( feedbackimg => 
            <Carousel.Item>
                <img src={feedbackimg}/>
            </Carousel.Item>)}
        </Carousel>
    </div>
  )
}

export default Feedback