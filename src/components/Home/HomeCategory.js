import Link from "next/link";
import React from "react";
import categoryImage from "../../data/categoryImageData";
import SingleItem from "./SingleItem";

const HomeCategory = () => {
  return (
    <>
      <section className="category__area pt-105 pb-135">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper text-center mb-60">
                <h2 className="section__title">Check Out Categories</h2>
                <p>Find over 7000 Images & Videos</p>
              </div>
            </div>
          </div>
          <div className="new-product-tab">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-all"
                role="tabpanel"
                aria-labelledby="nav-all-tab"
              >
                <div className="d-flex flex-wrap justify-content-center ">
                  {categoryImage.map((image) => (
                    <SingleItem
                      key={image.src}
                      src={image.src}
                      title={image.title}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div style={{cursor:'pointer'}} className="product__more text-center mt-30">
                <Link href="/stock-image">
                  <span className="m-btn m-btn-2">Find More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCategory;
