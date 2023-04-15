import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProduct } from "../../redux/features/productSlice";
import ProductDownload from "./ProductDownload";
import data from "../../data/featuredImageData";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductDetailsArea = () => {
  // all products
  const product = useSelector((state) => state.products.specificProduct);
  // dispatch
  const dispatch = useDispatch();
  // handleCartProduct
  const handleCartProduct = () => {
    dispatch(addToProduct(product));
  };
  const router = useRouter();
  const { src, description } = router.query;
  return (
    <section className=" pb-115">
      <div>
        <div className="container">
          <div className="product-item-container">
            <div className="product-item-img-container">
              <img src={src} />
            </div>
            <ProductDownload product={product} />
          </div>
        </div>
      </div>
      <div className="product-details">
        <div>
          <p className="product-details__heading">
            {description}
          </p>
          <div className="product-info">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.57164 3.04552C3.00588 3.04552 2.54527 3.50612 2.54527 4.07188V12.9282C2.54527 13.494 3.00588 13.9546 3.57164 13.9546H12.4283C12.9941 13.9546 13.4544 13.494 13.4544 12.9282V4.07188C13.4544 3.50612 12.9941 3.04552 12.4283 3.04552H3.57164ZM12.4284 15.1668H3.57174C2.33749 15.1668 1.33325 14.1626 1.33325 12.9283V4.07198C1.33325 2.83774 2.33749 1.8335 3.57174 1.8335H12.4284C13.6626 1.8335 14.6666 2.83774 14.6666 4.07198V12.9283C14.6666 14.1626 13.6626 15.1668 12.4284 15.1668Z"
                fill="#212121"
              ></path>
              <path
                d="M5.17995 11.5002C4.83771 11.5002 4.66659 11.3171 4.66659 10.9509V6.0494C4.66659 5.68324 4.83771 5.50016 5.17995 5.50016C5.52219 5.50016 5.69332 5.68324 5.69332 6.0494V10.9509C5.69332 11.3171 5.52219 11.5002 5.17995 11.5002ZM7.47587 11.4336C7.11224 11.4336 6.93042 11.245 6.93042 10.8677V6.13262C6.93042 5.75536 7.11224 5.56674 7.47587 5.56674H9.03202C9.97854 5.56674 10.7085 5.81917 11.2218 6.32402C11.7406 6.82887 11.9999 7.55286 11.9999 8.496C11.9999 9.43359 11.7406 10.1576 11.2218 10.668C10.7085 11.1784 9.97854 11.4336 9.03202 11.4336H7.47587ZM7.95716 10.5515H8.96785C10.2727 10.5515 10.9251 9.86632 10.9251 8.496C10.9251 7.13123 10.2727 6.44885 8.96785 6.44885H7.95716V10.5515Z"
                fill="#212121"
              ></path>
            </svg>
            <p>726178392</p>
          </div>
        </div>
      </div>
      <div className="similar-photo-container">
        <h4>Similar Photos</h4>
        <div className="related-img">
          <div className="related-img-container">
            {data.map((image) => {
              return (
                <Link
                  key={image.title}
                  href={{
                    pathname: `/product-details/id`,
                    query: { src: image.src },
                  }}
                >
                  <div className="img_wrap">
                    <img src={image.src} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsArea;
