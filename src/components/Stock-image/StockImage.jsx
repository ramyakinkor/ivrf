import React from "react";
import categories from "../../data/mockCategoryData";
import categoryImage from "../../data/categoryImageData";
import Link from "next/link";
import { useSelector } from "react-redux";
export default function StockImage() {
  const categories = useSelector(state => state.products.categories)
  return (
    <div className="stock-container">
      <div className="stock-bg">
        <h1>
          Find your perfect image today with our vast collection of high-quality
          stock photos!
        </h1>
        <p>
          Discover millions of images to enhance your creativity at an
          affordable price.
        </p>
      </div>

      <div className="category-container">
        <h3>Frequently picked categories</h3>
        <div className="frequent-category">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={`/product/category/image/${category.title}?id=${category.id}`}
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

        {/* <h3>All Categories</h3>
        <div className="category-row">
          {categories.map((category) => (
            <div key={category} className="category__container">
              {category.map((cat) => (
                <Link key={cat} href={`/product/category/${cat.id}?type="image"`}>
                  <p style={{ cursor: "pointer" }}>{cat.title}</p>
                </Link>
              ))}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
