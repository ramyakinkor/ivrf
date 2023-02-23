import Link from "next/link";
import React from "react";
import { useState } from "react";
import ImagePricingArea from "./ImagePricingArea";
import SinglePrice from "./SinglePrice";
import VideoPricingArea from "./VideoPricingArea";

const PricingArea = () => {
  const [Image, setImage] = useState(true);
  return (
    <>
      <section className="pricing__area pt-100 pb-110">
        <div className="container__pricing">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
              <div className="page__title-wrapper text-center mb-50">
                <h2 className="page__title-2">
                  Unlock Incredible Images & Videos
                </h2>
                <p>Choose the perfect plan that suits your needs and budget.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="pricing__tab mb-40">
                <ul
                  className="nav nav-tabs justify-content-center"
                  id="priceTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="images-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#images"
                      type="button"
                      role="tab"
                      aria-controls="images"
                      aria-selected="true"
                      onClick={() => {
                        setImage(true);
                      }}
                    >
                      Images
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="videos-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#videos"
                      type="button"
                      role="tab"
                      aria-controls="videos"
                      aria-selected="false"
                      onClick={() => {
                        setImage(false);
                      }}
                    >
                      Videos
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="tab-content wow fadeInUp"
            id="priceTabContent"
            data-wow-delay=".5s"
          >
            {Image ? <ImagePricingArea /> : <VideoPricingArea />}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingArea;
