import React, { useState } from 'react'

function Ads() {
    const [text, setText] = useState(false)

    const clickHandler =()=>{
        setText(!text)
    }
  return (
    <div className='wrapper' id='ads'>
        <div className='container'>
            <h2>Топовые принты на футболках в магазине <a href='/'>ForYou</a></h2>

            <p className='ads-desc-header'>Самый широкий выбор оригинальных футболок с принтом на любой вкус и возраст</p>
        </div>
        <div className='container'>
            <h3>Богатый ассортимент</h3>

            <p className='ads-desc'>
            {text ? 'Как бы ни были неповторимы люди и разнообразны жизненные ситуации, в нашем интернет-магазине найдется футболка подходящая для каждого. Любой вариант принта может быть выполнен на мужской футболке, женской или детской. Мы предлагаем полный размерный ряд разнообразных моделей - от маек до лонгсливов.Для удобства выбора каталог систематизирован по основным категориям - тематическим группам, каждая из которых полна приятных сюрпризов и неожиданных дизайнерских решений.У нас нашли отображение фильмы, мультфильмы, аниме, сериалы и комиксы.Мы не забыли о самых разных животных и поместили их в непредсказуемые ситуации.Яркие деятели искусства, их узнаваемые во всём мире шедевры и стиль.Компьютерные игры, покорившие мир, и фавориты отечественных геймеров, символика профессиональных команд.Выдающиеся личности, проявившие себя в разных областях.Футбол в личностных и событийных проявлениях.Стилизации под татуировки.Оригинальные фантазии на космическую тему и многое, многое другое.Каждый раздел каталога содержит широкий выбор футболок с надписями и/или рисунками. Они могут быть цветными и монохромными, двусторонними или иметь только лицевой принт – все их объединяет исключительное качество печати картинки и натуральных тканей основы.'
            :'Как бы ни были неповторимы люди и разнообразны жизненные ситуации, в нашем интернет-магазине найдется футболка подходящая для каждого. Любой вариант принта может быть выполнен на мужской футболке, женской или детской. Мы предлагаем полный размерный ряд разнообразных моделей - от маек до лонгсливов.'}
            </p>

            <p className='ads-desc-mobile'>
            {text ? 'Как бы ни были неповторимы люди и разнообразны жизненные ситуации, в нашем интернет-магазине найдется футболка подходящая для каждого. Любой вариант принта может быть выполнен на мужской футболке, женской или детской. Мы предлагаем полный размерный ряд разнообразных моделей - от маек до лонгсливов.Для удобства выбора каталог систематизирован по основным категориям - тематическим группам, каждая из которых полна приятных сюрпризов и неожиданных дизайнерских решений.У нас нашли отображение фильмы, мультфильмы, аниме, сериалы и комиксы.Мы не забыли о самых разных животных и поместили их в непредсказуемые ситуации.Яркие деятели искусства, их узнаваемые во всём мире шедевры и стиль.Компьютерные игры, покорившие мир, и фавориты отечественных геймеров, символика профессиональных команд.Выдающиеся личности, проявившие себя в разных областях.Футбол в личностных и событийных проявлениях.Стилизации под татуировки.Оригинальные фантазии на космическую тему и многое, многое другое.Каждый раздел каталога содержит широкий выбор футболок с надписями и/или рисунками. Они могут быть цветными и монохромными, двусторонними или иметь только лицевой принт – все их объединяет исключительное качество печати картинки и натуральных тканей основы.'
            :'Как бы ни были неповторимы люди и разнообразны жизненные ситуации, в нашем интернет-магазине найдется футболка подходящая для каждого. Любо...'}
            </p>

            {text ? '' : <p className='dots' style={{marginTop:'0px'}}>...</p>}

            <button onClick={clickHandler}>{text ? 'Свернуть' : 'Развернуть ...'}</button>
        </div>
    </div>
  )
}

export default Ads