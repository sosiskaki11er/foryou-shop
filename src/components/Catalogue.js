import React, { useState } from 'react'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
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

const types = ["Футболки", "Лонгсливы", "Свитшоты", "Худи", "Кепки"]

const Categories = [
    {
        title: 'Авторское'
    }, 
    {
        title: 'Айти',
        categories:[
            'Программисту',
            'Дизайнеру',
            'Тестировщику',
            'Админу',
            'Меркетологу SMM/SEO',
            'Project Manager',
            'Back-Office'
          ]
    }, 
    {
        title: 'Арт'
    }, 
    {
        title: 'Знаменитости'
    }, 
    {
        title: 'Игры'
    }, 
    {
        title: 'Кино Сериалы'
    }, 
    {
        title: 'Комиксы'
    }, 
    {
        title: 'Музыка'
    }, 
    {
        title: 'Мультфильмы'
    }, 
    {
        title: 'Надписи'
    }, 
    {
        title: 'Разное'
    }, 
    {
        title: 'Символика'
    }, 
    {
        title: 'Спорт'
    }, 
    {
        title: 'Футбол'
    }
]

const products = [{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},
{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},
{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},
{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},
{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},
{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},
{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},
{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},
{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},
{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},
{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},
{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},
{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},
{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},{
    img: [MainImage,Image1,Image2,Image3,Image4],
    price: '79.000 сум',
    prevPrice: '119.000 сум',
    discount:'',
    desc: 'Мужская футболка хлопок Cyberpunk Samurai',
    title: 'Cyberpunk Samurai',
    article: 'Артикул: Cyber 03',
    feedbacks: '512',
    material: '92% хлопок, 8% эластан',
    detailedDesc: 'Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”',
    details: 'приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав',
    careRules: 'перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту',
    feedback: {
        author:'Макар К.',
        dete:'23 января 2023',
        stars:5,
    }
},]




function Catalogue() {
    let location = useLocation()
    const isHome = location.pathname.split('/')[1] !== 'catalogue'
    const navigate = useNavigate();
    const params = useParams()['*']?.split('/');
    const [filterBy, setFilterBy] = useState('')
    const [view, setView] = useState(Grid)

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
                    <h2>Каталог</h2>

                    <ul className='catalogue-list'>
                        {Categories.map(category => 
                        <li key={category.title}>
                            <div>
                                <h4 
                                    style={{color: params?.indexOf(category.title) >= 0 && '#5900E6'}}
                                    onClick={() => navigate(`/catalogue/${category.title}/`)}>{category.title}
                                </h4><span>23</span>   
                            </div> 

                            <ul className='post-category'>
                                {
                                params?.indexOf(`${category.title}`) >= 0 && 
                                category?.categories?.map(print => 
                                <li
                                    key={print}
                                    style={{color: params?.indexOf(print) >= 0 && '#5900E6'}}
                                    onClick={() => navigate(`${category.title}/${print}`)}
                                >{print}</li>)
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
                            key={type} 
                            onClick={() => navigate(`${type}`)}
                            style={{color: params?.indexOf(type) >= 0 && '#5900E6'}}
                            ><div><h4>{type}</h4></div></li>
                        )}
                    </ul>

                    <Price/>

                    <Size/>

                    <Color/>
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
                        className= {filterBy === 'Хиты продаж' ? 'filter-by active' : 'filter-by'}
                        onClick={() => HandleFilter('Хиты продаж')}
                    >
                        <img src={Hit} alt='hit icon'/>
                        <h4>Хиты продаж</h4>
                    </div>

                    <div 
                        className= {filterBy === 'Большие скидки' ? 'filter-by active' : 'filter-by'}
                        onClick={() => HandleFilter('Большие скидки')}    
                    >
                        <img src={Tag} alt='hit icon'/>
                        <h4>Большие скидки</h4>
                    </div>

                    <div 
                        className= {filterBy === 'Самые новые' ? 'filter-by active' : 'filter-by'}
                        onClick={() => HandleFilter('Самые новые')}    
                    >
                        <img src={New} alt='hit icon'/>
                        <h4>Самые новые</h4>
                    </div>
                </div>

                <div className='container filters-mobile'>
                    <Carousel cols={3} gap={8}>
                        <Carousel.Item>
                            <div 
                                className= {filterBy === 'Хиты продаж' ? 'filter-by active' : 'filter-by'}
                                onClick={() => HandleFilter('Хиты продаж')}
                            >
                                <img src={Hit} alt='hit icon'/>
                                <h4>Хиты продаж</h4>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div 
                                className= {filterBy === 'Большие скидки' ? 'filter-by active' : 'filter-by'}
                                onClick={() => HandleFilter('Большие скидки')}    
                            >
                                <img src={Tag} alt='hit icon'/>
                                <h4>Большие скидки</h4>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div 
                                className= {filterBy === 'Самые новые' ? 'filter-by active' : 'filter-by'}
                                onClick={() => HandleFilter('Самые новые')}    
                            >
                                <img src={New} alt='hit icon'/>
                                <h4>Самые новые</h4>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <Products products={products} view={view}/>
            </div>
        </div>
        
        <BigDiscounts/>
    </>
  )
}

export default Catalogue