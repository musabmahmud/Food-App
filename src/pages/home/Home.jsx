import React from 'react'
import Banner from '../../components/Banner'
import '../../App.css';
import Categories from './Categories';
import SpecialDishes from './SpecialDishes';
import Testimonial from './Testimonial';
import Services from './Services';
const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <SpecialDishes />
      <Testimonial />
      <Services/>
    </>
  )
}

export default Home