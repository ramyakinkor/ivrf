import React from "react";
import BgShape from "../../components/common/BgShape";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import Refund_Policy from "../../components/Payment_Policy/Payment_Policy";
import SEO from "../../components/seo";
export default function Privacy() {
  return (
    <>
      <SEO pageTitle={"Privacy and Policy"} />
      <Header />
      <BgShape />
      <Refund_Policy />
      <Footer />
    </>
  );
}
