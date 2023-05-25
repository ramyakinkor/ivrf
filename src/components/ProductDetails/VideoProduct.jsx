import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductDownload from "./ProductDownload";
import data from "../../data/featuredImageData";
import Link from "next/link";
import { useRouter } from "next/router";
import { addToProduct } from "../../store/reducers/productSlice";

const VideoProduct = () => {
  // all products
  const product = useSelector((state) => state.products.specificProduct);

  // dispatch
  const dispatch = useDispatch();
  // handleCartProduct
  const handleCartProduct = () => {
    dispatch(addToProduct(product));
  };
  return (
    <section className=" pb-115">
      <div className="container">
        <div className="product-item-container">
          <div className="product-item-img-container">
            { product && (
              <video controls>
                <source src={product.public} />
              </video>
            )}
          </div>
          <ProductDownload product={product} />
        </div>
      </div>
      <div className="product-details">
        <div>
          <p className="product-details__heading">
            {product.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoProduct;
