import React from "react";
import categories from "../../data/mockCategoryData";
import categoryImage from "../../data/categoryImageData";
import Link from "next/link";
import VideoRander from "../Product/VideoRender";
import { useSelector } from "react-redux";
export default function StockVideo() {
  const categories = useSelector(state => state.products.categories)
  return (
    <div className="stock-container">
      <div className="stock-video-bg">
        <h1>
          Unlock Your Creative Vision with Our Extensive Stock Video Library!
        </h1>
        <p>
          Discover an Array of High-Quality Video Content for Your Media Needs!
        </p>
        <video width="100%" height="100%" muted autoPlay loop playsInline>
          <source src="/assets/img/bg/VideoBg1.mp4"></source>
        </video>
      </div>

      <div className="category-container">
        {/* <h3>Top picked footage</h3>
        <div className="d-flex flex-wrap ">
    
        </div> */}

        <h3>All Categories</h3>
        <div className="frequent-category" style={{ marginBottom: "3em" }}>
          {categories.map((category) => (
            <Link
              key={category.title}
              href={`/product/category/video/${category.title}?id=${category.id}`}
            >
              <div
                className="frequent-category__content"
                style={{
                  background: `url(${category.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p>{category.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
