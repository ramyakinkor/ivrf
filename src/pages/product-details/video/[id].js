import React from 'react';
import BgShape from '../../../components/common/BgShape';
import Footer from '../../../components/Home/Footer';
import Header from '../../../components/Home/Header';
import VideoDetails from '../../../components/ProductDetails/Video';
import ProductTitle from '../../../components/ProductDetails/ProductTitle';
import SEO from '../../../components/seo';
import SearchBar from '../../../components/common/SearchBar'
const ProductDetails = () => {
   return (
      <>
         <SEO pageTitle={'Product Details'} />
         <Header />
         <BgShape />
         <SearchBar />
         <VideoDetails />
         <Footer />
      </>
   );
};

export default ProductDetails;