import React from 'react'
import Carousel from 'better-react-carousel'
import SliderPrevIcon from '../assets/icons/slider-prev.svg'
import SliderNextIcon from '../assets/icons/slider-next.svg'
import SliderPrevIconActive from '../assets/icons/slider-prev-active.svg'
import SliderNextIconActive from '../assets/icons/slider-next-active.svg'
import Feedback from './Feedback'

function SliderPrev() {
    return (
        <img 
        src={SliderPrevIcon} 
        className={'slider-but feedbacks'}
        onMouseOver={e => e.currentTarget.src=SliderPrevIconActive}
        onMouseOut={e => e.currentTarget.src=SliderPrevIcon}
        />
    )
}

function SliderNext() {
    return (
        <img 
        src={SliderNextIcon} 
        className={'slider-but feedbacks'} id={'slider-next'}
        onMouseOver={e => e.currentTarget.src=SliderNextIconActive}
        onMouseOut={e => e.currentTarget.src=SliderNextIcon}
        />
    )
}

function Feedbacks({feedbacks}) {
  return (
    <div className='wrapper' id='feedbacks'>
        <h2>Отзывы клиентов</h2>

        <div className='feedbacks-slider'>
            <Carousel cols={3} arrowLeft={<SliderPrev/>} arrowRight={<SliderNext/>}>
                {feedbacks.map(feedback =>
                    <Carousel.Item>
                        <Feedback feedback={feedback} key={feedback.author}/>
                    </Carousel.Item>
                )}
            </Carousel>
        </div>

        <div className='container feedbacks'>
            {feedbacks.map(feedback => <Feedback feedback={feedback} key={feedback.author}/>)}
        </div>

        <div className='feedbacks-buttons'>
            <button>Оставить отзыв</button>
            <button className='show-all'>Смотреть все отзывы</button>
        </div>
    </div>
  )
}

export default Feedbacks