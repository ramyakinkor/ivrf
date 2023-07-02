
import { useRouter } from "next/router";
import Gallery from "react-photo-gallery-next";
import { useDispatch } from "react-redux";
import { specificItem } from "../../store/reducers/productSlice";
import { useEffect, useState } from "react";
import Pagination from "../common/Pagination";

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
  const productsPerPage = 8;
  const [calculatedPhotos, setCalculatedPhotos] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [imagesOnCurrentPage, setImagesOnCurrentPage] = useState([])

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
            description: photo.description,
            tags: photo.tags
          };
        })
      );
      setCalculatedPhotos(updatedPhotos);
      const {startIndex, endIndex} = getStartAndEndIndexByPageNumber(selectedPage, productsPerPage);
      const selectedPhotos = updatedPhotos.slice(startIndex, endIndex);
      setImagesOnCurrentPage(selectedPhotos);
      console.log(Math.ceil(updatedPhotos.length/productsPerPage))
    };

    calculatePhotoDimensions();
  }, [images]);

  function onPaginate(number) {
    setSelectedPage(number);
    const {startIndex, endIndex} = getStartAndEndIndexByPageNumber(number, productsPerPage);
    const selectedPhotos = calculatedPhotos.slice(startIndex, endIndex);
    setImagesOnCurrentPage(selectedPhotos);
  }

  function getStartAndEndIndexByPageNumber(pageNumber, itemsPerPage) {
    const startIndex = (pageNumber * itemsPerPage) - itemsPerPage;
    const endIndex = (pageNumber * itemsPerPage);
    return {startIndex, endIndex}
  }

  return (
    <>
      {imagesOnCurrentPage.length > 0 &&
       <Gallery photos={imagesOnCurrentPage} renderImage={CustomeRender} targetRowHeight={300}/>
      }
      { calculatedPhotos.length > productsPerPage &&
        <Pagination style={{display: 'flex', flexDirection: 'row-reverse'}}
          totalPages={ Math.ceil(calculatedPhotos.length/productsPerPage)}
          paginate={onPaginate} 
          currentPage={selectedPage} />
      }
    </>
  );
}
