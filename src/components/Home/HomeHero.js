import React from "react";
import SearchBar from "../common/SearchBar";

const HomeThreeHeroArea = () => {
  return (
    <>
      <section
        className="hero__area hero__height hero__height-3 grey-bg-3 d-flex flex-column justify-content-center stock-video-bg"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat:'no-repeat', 
          backgroundColor : 'rgba(0,0,0,.7)',
          backgroundBlendMode:'multiply'
        }}
      >
        <video  playsInline autoPlay loop muted>
          <source src="assets/img/bg/homeBg.mp4" width="100%" height="100%"/>
        </video>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-9 col-xl-10 col-lg-11 col-md-12 col-sm-12">
              <div className="hero__content hero__content-white text-center">
                <h2 className="hero__title">
                  The Best Digital Site For Variety of Images and Videos.
                </h2>
                <p>
                  Upto 70% Discounts on all packages
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <SearchBar />
        </div>
      </section>
    </>
  );
};

export default HomeThreeHeroArea;
