import React from 'react'
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer';
import Buku from './Buku';
import Hero from '../component/Hero/Hero';

const Home = () => {
  return (
    <div class="">
      <Navbar/>
      <Hero/>
      <Buku/>
      <Footer/>
    </div>
    
  )
}

export default Home;