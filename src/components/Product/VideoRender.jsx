import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { specificItem } from "../../store/reducers/productSlice";
import Pagination from "../common/Pagination";
import HoverVideoPlayer from "react-hover-video-player";
import { Bars } from "react-loader-spinner";

const FeaturedVideoComponent = ({ product }) => {
  const router = useRouter();
  const imageRef = useRef(null)
  const dispatch = useDispatch();
  const [height, setHeight] = useState(150)
  useEffect(() => {
    const element = imageRef?.current;

    if (!element) return;

    const observer = new ResizeObserver((elem) => {
      setHeight(elem[0].target.clientHeight)
    });

    observer.observe(element);
    return () => {
      // Cleanup the observer by unobserving all elements
      observer.disconnect();
    };
  }, [])
  function selectAndRoute(product) {
    dispatch(specificItem(product));
    router.push(`/product-details/video/${product.id}`);
  }
  return (
    <div onClick={() => selectAndRoute(product)} className="video__item">
        <HoverVideoPlayer
          style={{display: 'block', height: height}}
          videoSrc={product.public}
          pausedOverlay={<RefPausedOverlay ref={imageRef} url={product.public.replace('public_assets', 'thumbnail_assets').replace('mp4', 'jpeg')} />}
          loadingOverlay={<Spinner />}
          loadingOverlayWrapperClassName="video__overlay"
          hoverOverlay={
            <>
              <p className="render_title" style={{color: 'white'}}>{product.title}</p>
              <p className="render_title" style={{ position: "absolute", bottom: "0", top: "unset", color: 'white'}}>
                {product.resolution}
              </p>
              
            </>
          }
          preload="none"
          unloadVideoOnPaused
        />
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
      <div className="video__wrapper">
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


const PausedOverlay = ({url}, ref) => (
    <img
      src={url}
      alt=""
      ref={ref}
      style={{
          display: 'block',
          position: "absolute",
          width: "100%",
          height: "auto",
          top: 0,
          left: 0,
      }}
      />
);

const RefPausedOverlay = React.forwardRef(PausedOverlay)

function Spinner() {
  return (
    <Bars
      height="40"
      width="40"
      color="5f3afc"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  )
}