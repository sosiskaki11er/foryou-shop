import React from 'react'
import Banners from '../components/Banners'
import Categories from '../components/Categories'
import Contact from '../components/Contact'
import Faq from '../components/Faq'
import Ads from '../components/Ads'
import CataloguePage from './CataloguePage'
import Catalogue from '../components/Catalogue'


function HomePage() {
  return (
    <>
      <Banners/>
      <Catalogue/>
      <Categories/>
      <Contact/>
      <Faq/>
      <Ads/>
    </>
  )
}

export default HomePage