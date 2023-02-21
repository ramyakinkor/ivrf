import React from 'react'
import Header from '../../components/Home/Header'
import SearchBar from '../../components/common/SearchBar'
import BgShape from '../../components/common/BgShape'
import Footer from '../../components/Home/Footer'
import PlansPricing from '../../components/Home/PlansPricing'
import StockVideo from '../../components/stock-video/StockVideo'
export default function index() {
  return (
    <>
      <Header /> 
      <BgShape />
      <SearchBar />
      <StockVideo/>
      <PlansPricing />
      <Footer/>
    </>
  )
}
