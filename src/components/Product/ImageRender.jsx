import Link from "next/link";
import { useRouter } from "next/router";
import Gallery from "react-photo-gallery-next";
import { useDispatch } from "react-redux";
import { specificItem } from "../../store/reducers/productSlice";
import { PhotoGallery } from "../PhotoGallery/photoGallery";
import { useEffect, useState } from "react";

const CustomeRender = ({ photo, margin }) => {
  const router = useRouter()
  const dispatch = useDispatch();
  
  function selectAndRoute(product) {
    dispatch(specificItem(product));
    router.push(`/product-details/image/${product.id}`);
  }
  
  return (
    <div key={photo?.id} onClick={() => selectAndRoute(photo)}>
      <div
        className="image_wraper"
        style={{width: photo.width, margin }}
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
  const [calculatedPhotos, setCalculatedPhotos] = useState([]);

  useEffect(() => {
    const calculatePhotoDimensions = async () => {
      const updatedPhotos = await Promise.all(
        images.map(async (photo) => {
          const image = new Image();
          image.src = photo.public;

          await new Promise((resolve) => {
            image.onload = resolve;
          });

          return {
            id: photo.id,
            public: image.src,
            width: image.width,
            height: image.height,
            title: photo.title,
            description: photo.description
          };
        })
      );
      setCalculatedPhotos(updatedPhotos);
    };

    calculatePhotoDimensions();
  }, [images]);

  return (
    <>
      {calculatedPhotos.length > 0 &&
      <Gallery photos={calculatedPhotos} renderImage={CustomeRender} />

      }
      
    </>
  );
}
