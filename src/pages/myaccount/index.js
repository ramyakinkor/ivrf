import React from 'react'
import BgShape from '../../components/common/BgShape'
import Footer from '../../components/Home/Footer'
import Header from '../../components/Home/Header'
import Overview from '../../components/Profile/Overview'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfileNavigation from '../../components/Profile/ProfileNavigation'

export default function index() {
  return (
    <>
        <Header /> 
        <BgShape />  
        <ProfileHeader /> 
        <ProfileNavigation />
        <Overview />
        <Footer />
    </>
  )
}
