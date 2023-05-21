import Link from "next/link";
import React, { useRef } from "react";
import videos from "../../data/featuredVideoData";

const FeaturedVideoComponent = ({ src, title }) => {
  const ref = useRef();
  console.log(ref);
  return (
    <Link
      href={{
        pathname: "/product-details/video/id",
        query: {
          src: src,
        },
      }}
    >
      <div
        onMouseEnter={() => ref.current.play()}
        onMouseOut={() => ref.current.pause()}
        className="inner_wrapper"
      >
        <video ref={ref} width={300} height="auto" muted>
          <source src={src} />
        </video>
        <p className="render_title">{title}</p>
      </div>
    </Link>
  );
};
export default function FeaturedVideos( {videos}) { 
  console.log(videos)
  return (
    <div className="video_wrapper">
      {videos?.map((vid) => (
        <FeaturedVideoComponent key={vid.id} src={vid.public} title={vid.title} />
      ))}
    </div>
  );
}
