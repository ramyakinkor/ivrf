import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToProduct,
  addToWishList,
  specificItem,
} from "../../redux/features/productSlice";

import FeaturedVideos from "./FeaturedVideos";
import ImageRender from "../Product/ImageRender";
import { useProduct } from "../../hooks/product";

const Img_Vid_Btn = ({ imageClicked, setImageClicked }) => {
  return (
    <div className="featuredTopBtns">
      <button
        className={`${
          imageClicked ? "showBottomBorder" : "notShowBottomBorder"
        }`}
        onClick={() =>
          setImageClicked(imageClicked ? imageClicked : !imageClicked)
        }
      >
        Images
      </button>
      <button
        className={`${
          imageClicked ? "notShowBottomBorder" : "showBottomBorder"
        }`}
        onClick={() =>
          setImageClicked(!imageClicked ? imageClicked : !imageClicked)
        }
      >
        Videos
      </button>
    </div>
  );
};

const Featured = () => {
  const [imageClicked, setImageClicked] = useState(true);
  const {images} = useProduct();
  const featuredProducts = useSelector((state) => state.products.products);
  // dispatch
  const dispatch = useDispatch();
  // handleAddToCart
  const handleAddToCart = (product) => {
    dispatch(addToProduct(product));
  };
  // handleProductDetails
  const handleProductDetails = (id) => {
    dispatch(specificItem(id));
  };
  // handleClick
  const handleClick = (product) => {
    dispatch(addToWishList(product));
  };
  return (
    <>
      <section className="product__area pt-105 pb-110 grey-bg-2">
        <div className="i_v_container">
          <Img_Vid_Btn
            imageClicked={imageClicked}
            setImageClicked={setImageClicked}
          />
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper text-center mb-60">
                {imageClicked ? (
                  <h2 className="section__title">
                    Featured Images of The Month
                  </h2>
                ) : (
                  <h2 className="section__title">
                    Featured Videos of The Month
                  </h2>
                )}
                {/* <p>From multipurpose themes to niche templates</p> */}
              </div>
            </div>
          </div>
          <div className="row">
            {imageClicked ? (
              <ImageRender images={images} />
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <FeaturedVideos />
              </div>
            )}
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div style={{cursor:'pointer'}} className="product__more text-center mt-30">
                <Link href="/stock-image">
                  <span className="m-btn m-btn-2">Explore More!</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
