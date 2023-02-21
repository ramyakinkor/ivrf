import Link from "next/link";
import Gallery from "react-photo-gallery-next";

const CustomeRender = ({ photo, margin }) => {
  return (
    <Link key={photo.title}  href={{ pathname: `/product-details/id`, query: {src:photo.src }}}>
      <div
        className="image_wraper"
        style={{ height: photo.height, width: photo.width, margin }}
      >
        <img
          src={photo.src}
          loading="lazy"
          key={photo.src}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "0.3rem",
            display: "block",
          }}
        />
        <p className="render_title">{photo.title}</p>
      </div>
    </Link>
  );
};

export default function ImageRender({ images }) {
  return (
    <>
      <Gallery photos={images} renderImage={CustomeRender} />
    </>
  );
}
