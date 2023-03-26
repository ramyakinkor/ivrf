import Link from "next/link";
import Gallery from "react-photo-gallery-next";

const CustomeRender = ({ photo, margin }) => {
  return (
    <Link key={photo?.title}  href={{ pathname: `/product-details/id`, query: {src: photo.public, description: photo.description}}}>
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
