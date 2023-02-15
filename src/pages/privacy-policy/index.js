import React from "react";
import BgShape from "../../components/common/BgShape";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import SEO from "../../components/seo";
import PrivacyPolicy from "../../components/Privacy_policy";

export default function Privacy() {
  return (
    <>
      <SEO pageTitle={"Privacy and Policy"} />
      <Header />
      <BgShape />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
