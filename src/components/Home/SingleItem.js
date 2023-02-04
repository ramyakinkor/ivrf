import React from "react";

const SingleItem = ({ src, title }) => {
  return (
    <a href={`/product/category/${title}`}>
      <div className="product_new_item" style={{background:`url(${src})`,backgroundSize:'cover',backgroundPosition:'center'}}>
        {/* <div className="site-preview" data-preview-url="assets/img/icon/thumb/preview/preview-1.png"
                  data-item-cost="39.00" data-item-category="WordPress" data-item-author="Theme_Pure" 
                  ata-alt="Markite - Digital Marketplace WordPress Theme"></div> */}
        <p>{title}</p>
      </div>
    </a>
  );
};

export default SingleItem;
