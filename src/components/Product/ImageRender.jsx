import Link from "next/link";
import { useRouter } from "next/router";
import Gallery from "react-photo-gallery-next";
import { useDispatch } from "react-redux";
import { specificItem } from "../../store/reducers/productSlice";

const CustomeRender = ({ photo, margin }) => {
  const router = useRouter()
  const dispatch = useDispatch();
  
  function selectAndRoute(product) {
    dispatch(specificItem(product));
    router.push(`/product-details/image/${product.id}`);
  }
  
  return (
    <div key={photo?.title} onClick={() => selectAndRoute(photo)}>
      <div
        className="image_wraper"
        style={{ height: '250px', width: '320px', margin }}
      >
        <img
          src={photo?.public}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "0.3rem",
            display: "block",
          }}
        />
        <p className="render_title">{photo?.title}</p>
        <p className="render_description">{photo?.description}</p>
      </div>
    </div>
  );
};

export default function ImageRender({ images }) {
  return (
    <>
      <Gallery photos={images} renderImage={CustomeRender} />
    </>
  );
}
