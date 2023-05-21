import Link from "next/link";
import Gallery from "react-photo-gallery-next";

const cont = {
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
};
const CustomeRender = ({ photo, margin }) => {
  return (
    <Link
      key={photo?.id}
      href={{
        pathname: `/product-details/id`,
        query: { src: photo.public, description: photo.description },
      }}
    >
      <div
        className="image_wraper"
        style={{ height: photo.height, width: photo.width, margin }}
      >
        <img
          src={photo?.public}
          loading="lazy"
          style={{
            width: photo.width,
            height: photo.height,
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
  console.log(images);
  return (
    <>
      <Gallery photos={images} renderImage={CustomeRender} />
    </>
  );
}
