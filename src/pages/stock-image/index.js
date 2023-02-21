import React from 'react'
import Header from '../../components/Home/Header'
import SearchBar from '../../components/common/SearchBar'
import BgShape from '../../components/common/BgShape'
import StockImage from '../../components/Stock-image/StockImage'
import Footer from '../../components/Home/Footer'
import PlansPricing from '../../components/Home/PlansPricing'
export default function index() {
  return (
    <>
      <Header /> 
      <BgShape />
      <SearchBar />
      <StockImage />
      <PlansPricing />
      <Footer/>
    </>
  )
}
