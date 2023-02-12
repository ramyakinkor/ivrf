import React from 'react'
import BgShape from '../../components/common/BgShape'
import Footer from '../../components/Home/FooterLogin'
import Header from '../../components/Home/Header'
import PolicyMain from '../../components/Policy/PolicyMain'
import SEO from '../../components/seo'

export default function Privacy () {
  return (
    <>
     <SEO pageTitle={'Privacy and Policy'}  />
     <Header />  
     <BgShape />
     <PolicyMain /> 
     <Footer />
    </>
  )
}
