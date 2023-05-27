import Link from "next/link";
import React, { useEffect } from "react";

const SingleItem = ({category}) => {
  return (
    <>{ category && 
      <Link href={`/product/category/image/${category.title}?id=${category.id}`}>
      <div className="product_new_item" style={{background:`url(${category.img})`,backgroundSize:'cover',backgroundPosition:'center'}}>
        {/* <div className="site-preview" data-preview-url="assets/img/icon/thumb/preview/preview-1.png"
                  data-item-cost="39.00" data-item-category="WordPress" data-item-author="Theme_Pure" 
                  ata-alt="Markite - Digital Marketplace WordPress Theme"></div> */}
        <p>{category.title}</p>
      </div>
    </Link>
    }</>
    
  );
};

export default SingleItem;
