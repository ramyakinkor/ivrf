import React from 'react';
// import Subscribe from '../components/Home/Subscribe';
import FeaturedItem from '../components/Home/FeaturedItem';
import Featured from '../components/Home/Featured';
import HomeHero from '../components/Home/HomeHero';
import HomeCategory from '../components/Home/HomeCategory';
import Footer from '../components/Home/Footer';
import SEO from '../components/seo';
import Header from '../components/Home/Header';
import PlansPricing from '../components/Home/PlansPricing';

const index = () => {
   return (
      <>
         <SEO pageTitle={'Home Three'} />
         <Header />
         <HomeHero />
         <Featured />
         <HomeCategory /> 
         <PlansPricing />
         <Footer />
      </>
   );
};

export default index;