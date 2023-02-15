import React from 'react'
import BgShape from '../../components/common/BgShape'
import Footer from '../../components/Home/Footer'
import Header from '../../components/Home/Header'
import Liscensing from '../../components/Liscensing/Liscensing'
import SEO from '../../components/seo'

export default function Privacy () {
  return (
    <>
     <SEO pageTitle={'Privacy and Policy'}  />
     <Header />  
     <BgShape />
     <Liscensing /> 
     <Footer />
    </>
  )
}
