import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { specificItem } from "../../store/reducers/productSlice";
import Pagination from "../common/Pagination";
import HoverVideoPlayer from "react-hover-video-player";

const FeaturedVideoComponent = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  function selectAndRoute(product) {
    dispatch(specificItem(product));
    router.push(`/product-details/video/${product.id}`);
  }
  return (
    <div onClick={() => selectAndRoute(product)}>
      <div
        
      >
        <HoverVideoPlayer
          videoSrc={product.public}
          pausedOverlay={<PausedOverlay url={product.public.replace('public_assets', 'thumbnail').replace('mp4', 'jpeg')} />}
          loadingOverlay={<Spinner />}
          hoverOverlay={
            <>
              <p className="render_title" style={{color: 'white'}}>{product.title}</p>
              <p className="render_title" style={{ position: "absolute", bottom: "0", top: "unset", color: 'white'}}>
                {product.resolution}
              </p>
              
            </>
          }
          preload="metadata"
        />
      </div>
    </div>
  );
};
export default function VideoRender({ videos }) {
  const productsPerPage = 8;
  const [selectedPage, setSelectedPage] = useState(1);
  const [videosOnCurrentPage, setVideosOnCurrentPage] = useState([]);

  useEffect(() => {
    const { startIndex, endIndex } = getStartAndEndIndexByPageNumber(
      selectedPage,
      productsPerPage
    );
    const selectedVideos = videos.slice(startIndex, endIndex);
    setVideosOnCurrentPage(selectedVideos);
  }, [videos]);

  function onPaginate(number) {
    setSelectedPage(number);
    const { startIndex, endIndex } = getStartAndEndIndexByPageNumber(
      number,
      productsPerPage
    );
    const selectedVideos = videos.slice(startIndex, endIndex);
    console.log(selectedVideos);
    setVideosOnCurrentPage(selectedVideos);
  }

  function getStartAndEndIndexByPageNumber(pageNumber, itemsPerPage) {
    const startIndex = pageNumber * itemsPerPage - itemsPerPage;
    const endIndex = pageNumber * itemsPerPage;
    return { startIndex, endIndex };
  }
  return (
    <>
      <div className="video_wrapper">
        {videosOnCurrentPage?.map((vid) => (
          <FeaturedVideoComponent key={vid.id} product={vid} />
        ))}
      </div>
      {videos.length > productsPerPage && (
        <Pagination
          style={{ display: "flex", flexDirection: "row-reverse" }}
          totalPages={Math.ceil(videos.length / productsPerPage)}
          paginate={onPaginate}
          currentPage={selectedPage}
        />
      )}
    </>
  );
}


const PausedOverlay = ({url}) => (
  <div>
    <img
      src={url}
      alt=""
      style={{
        position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          objectFit: "cover"
      }}
      />
  </div>
);

function Spinner() {
  return (
    <>Loading...</>
  )
}