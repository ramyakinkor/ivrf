import React, { useRef } from "react";
import videos from "../../data/featuredVideoData";

const FeaturedVideoComponent = ({ src, title }) => {
  const ref = useRef();
  console.log(ref);
  return (
    <div
      onMouseEnter={() => ref.current.play()}
      onMouseOut={() => ref.current.pause()}
      className="inner_wrapper"
    >
      <video ref={ref} width={300} height={200} muted>
        <source src={src} />
      </video>
      <p className="render_title">{title}</p>
    </div>
  );
};
export default function VideoRander() {
  return (
    <div className="video_wrapper">
      {videos.map((vid) => (
        <FeaturedVideoComponent key={vid.src} src={vid.src} title={vid.title} />
      ))}
    </div>
  );
}
