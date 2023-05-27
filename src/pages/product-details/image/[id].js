import React from 'react';
import BgShape from '../../../components/common/BgShape';
import Footer from '../../../components/Home/Footer';
import Header from '../../../components/Home/Header';
import ImageDetails from '../../../components/ProductDetails/Image';
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
         <ImageDetails />
         <Footer />
      </>
   );
};

export default ProductDetails;