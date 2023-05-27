import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { specificItem } from "../../store/reducers/productSlice";

const FeaturedVideoComponent = ({product}) => {
  const router = useRouter()
  const dispatch = useDispatch();
  function selectAndRoute(product) {
    dispatch(specificItem(product));
    router.push(`/product-details/video/${product.id}`);
  }
  const ref = useRef();
  return (
    <div onClick={() => selectAndRoute(product)}>
      <div
        onMouseEnter={() => ref.current.play()}
        onMouseOut={() => ref.current.pause()}
        className="inner_wrapper"
      >
        <video ref={ref}   muted>
          <source src={product.public} />
        </video>
        <p className="render_title">{product.title}</p>
      </div>
    </div>
  );
};
export default function VideoRender({videos}) {
  return (
    <div className="video_wrapper">
      {videos?.map((vid, index) => (
        <FeaturedVideoComponent key={index} product={vid} />
      ))}
    </div>
  );
}
