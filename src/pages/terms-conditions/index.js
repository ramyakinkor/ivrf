import React from 'react'
import BgShape from '../../components/common/BgShape'
import Footer from '../../components/Home/Footer'
import Header from '../../components/Home/Header'
import Terms_conditions from '../../components/Terms_conditions'
import SEO from '../../components/seo'

export default function Privacy () {
  return (
    <>
     <SEO pageTitle={'Privacy and Policy'}  />
     <Header />  
     <BgShape />
     <Terms_conditions /> 
     <Footer />
    </>
  )
}
