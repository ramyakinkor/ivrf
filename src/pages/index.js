import React from 'react';
// import Subscribe from '../components/Home/Subscribe';
import FeaturedItem from '../components/Home/FeaturedItem';
import FeaturedThemesProducts from '../components/Home/FeaturedThemesProducts';
import HomeThreeBlog from '../components/Home/HomeThreeBlog';
import HomeThreeHeader from '../components/Home/HomeThreeHeader';
import HomeThreeHeroArea from '../components/Home/HomeThreeHeroArea';
import NewestItems from '../components/Home/NewestItems';
import TamplatesNeed from '../components/Home/TamplatesNeed';
import Footer from '../components/home/Footer';
import PricingArea from '../components/Pricing/PricingArea';
import SEO from '../components/seo';

const index = () => {
   return (
      <>
         <SEO pageTitle={'Home Three'} />
         <HomeThreeHeader />
         <HomeThreeHeroArea />
         {/* <FeaturedItem /> */}
         <NewestItems /> {/* Modification will be done below for category section */}
         <FeaturedThemesProducts />{/* Modification will be done below for category featured image/video */}
         {/* <TamplatesNeed /> */}
         {/* <PricingArea /> */}
         {/* <Testimonial /> */}
         {/* <Subscribe /> */}
         {/* <HomeThreeBlog /> */}
         <Footer />
      </>
   );
};

export default index;