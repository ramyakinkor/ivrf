import React from 'react';
import BgShape from '../../components/common/BgShape';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword'
import SEO from '../../components/seo';

const index = () => {
    return (
        <>
            <SEO pageTitle={'Login'} />
            <Header />
            <BgShape />
            <ForgotPassword />
            <Footer />
        </>
    );
};

export default index;