import React, { useState, useRef } from "react";
import { GalleryIcon, VideoIcon } from "./Icons";

export default function SearchBar() {
  const [visible, setVisible] = useState(false);

  const [search, setSearch] = useState("");
  const [SearchType, setSearchType] = useState({
    type: "image",
    title: "Image",
  });
  const dropRef = useRef(null);

  const handleBlur = (e) => {

    if (
      e.nativeEvent.explicitOriginalTarget &&
      e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget
    ) {
      return;
    } 
    if (document.hasFocus()) {
   
      setVisible(false);
    } 
  };
  const handleClick = (event) => {
    if (visible) dropRef.current.blur();
    else dropRef.current.focus();
    setVisible(!visible);
  };
  const handleSelect = (update) => {
    setSearchType(update);
    dropRef.current.blur();
    setVisible(false);
  };
  return (
    <form
      method="GET"
      action={`/product/search/${SearchType.type}/${search}`}
      className="search_bar"
    >
      <div ref={dropRef} onBlur={handleBlur} tabIndex={-1} className="select">
        <div onClick={handleClick} className="selected">
          {SearchType.type == "image" ? (
            <span>
              {" "}
              <GalleryIcon />
            </span>
          ) : (
            <span>
              <VideoIcon />
            </span>
          )}
          <p>{SearchType.title}</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </div>
        <div className={`sub-menu ${visible ? "active" : ""}`}>
          <ul className={`${visible?'active':''}`}>
            <li onClick={() => handleSelect({ title: "Image", type: "image" })}>
              <GalleryIcon />
              <p>Image</p>
            </li>
            <li onClick={() => handleSelect({ title: "Video", type: "video" })}>
              <VideoIcon />
              <p>Video</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="search">
        <input
          type="text"
          required
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button className="search_btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="white"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </form>
  );
}
