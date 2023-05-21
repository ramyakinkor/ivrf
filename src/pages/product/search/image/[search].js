import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BgShape from "../../../../components/common/BgShape";
import Pagination from "../../../../components/common/Pagination";
import SearchBar from "../../../../components/common/SearchBar";
// import BannerArea from '../../components/Home/BannerArea';
import Footer from "../../../../components/Home/Footer";
import Header from "../../../../components/Home/Header";
// import Subscribe from '../../components/Home/Subscribe';
// import ProductTrending from "../../components/Product/ProductTrending";
import SEO from "../../../../components/seo";
import ImageResorces from "../../../../data/featuredImageData";
import ImageRender from "../../../../components/Product/ImageRender";
import VideoRender from "../../../../components/Product/VideoRender";
import { useRouter } from "next/router";
import { useProduct } from "../../../../hooks/product";
import { addToProduct, specificItem } from "../../../../store/reducers/productSlice";

const Product = () => {
  // all products
  // let products = useSelector(state => state.products.products);
  const [imageClicked, setImageClicked] = useState(true);
  const {images} = useProduct();
  const router = useRouter();
  const { search } = router.query;
  const [products, setProducts] = useState(
    useSelector((state) => state.products.products)
  );
  const [filterProducts, setFilterProducts] = useState(
    useSelector((state) => state.products.products)
  );
  const [uniqueTag, setUniqueTag] = useState(
    useSelector((state) => state.products.allUniqueTag)
  );
  const [checkbox, setCheckBox] = useState("");
  const [categoryTag, setCategoryTag] = useState("");
  // unique category
  const productsCategory = useSelector(
    (state) => state.products.allUniqueCategory
  );
  // dispaych
  const dispatch = useDispatch();
  // currentpage
  const [currentPage, setCurrentPage] = useState(1);
  // product per page
  const [productPerPage, setProductPerPage] = useState(4);
  // index of last product
  const indexOfLastProduct = currentPage * productPerPage;
  // index of first product
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  // current products
  let currentProducts = filterProducts.slice(
    checkbox ? 0 : indexOfFirstProduct,
    checkbox ? filterProducts.length : indexOfLastProduct
  );
  // paginate
  const paginate = (number) => {
    setCurrentPage(number);
  };
  // handleClick
  const handleClick = (product) => {
    dispatch(addToProduct(product));
  };
  // handleProducDetails
  const handleProducDetails = (id) => {
    dispatch(specificItem(id));
  };
  // handleCategory
  const handleCategory = (category) => {
    setCheckBox(category);
    const newProduct = products.filter(
      (product) => product.category === category
    );
    setFilterProducts(newProduct);
  };
  // handleTag
  const handleTag = (tag) => {
    setCheckBox(tag);
    const newProduct = products.filter((product) => product.tag === tag);
    setFilterProducts(newProduct);
  };

  return (
    <>
      <SEO pageTitle={"Product"} />
      {/*  Header start  */}
      <Header />
      {/* Header end */}
      <SearchBar />
      {/*  bg shape area start  */}
      <BgShape />
      {/* bg shape area end */}

      <section className="product__area po-rel-z1 pt-100 pb-115 grey-bg">
        <div className="i_v_container">
          <div className="row">
            <div className="style_result">
              <p>
                Showing results for <span>{search}</span>
              </p>
            </div>

            <div style={{ marginTop: "0.8em" }}>
              <ImageRender images={images} />
            </div>
          </div>

          {!checkbox && (
            <div className="row">
              <Pagination
                productPerPage={productPerPage}
                totalProduct={filterProducts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          )}
        </div>
      </section>

      {/* product trending start */}
      {/* <ProductTrending /> */}
      {/* product trending end */}

      {/* banner area start */}
      {/* <BannerArea /> */}
      {/* banner area end */}

      {/* cta area start */}
      {/* <Subscribe /> */}
      {/* cta area end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </>
  );
};

export default Product;
