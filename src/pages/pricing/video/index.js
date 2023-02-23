import React from 'react';
import BgShape from '../../../components/common/BgShape';
import Footer from '../../../components/Home/Footer';
import Header from '../../../components/Home/Header';
import VideoPricingArea from '../../../components/Pricing/VideoPricingArea';
import SEO from '../../../components/seo';
import FaqArea from '../../../components/support/FaqArea';

const Pricing = () => {
    return (
        <>
            <SEO pageTitle={'Pricing'} />
            <Header />
            <BgShape />
            <VideoPricingArea />
            <FaqArea />
            <Footer />
        </>
    );
};

export default Pricing;