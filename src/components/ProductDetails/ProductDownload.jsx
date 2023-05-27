import React, { useRef } from "react";
import { useProduct } from "../../hooks/product";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function ProductDownload({product}) {
  const profile = useSelector(state => state.user.profile);
  const router = useRouter();
  const dropRef = useRef(null);
  const {download} = useProduct()

  function verifyAndDownload(id, type) {
    if (profile) {
      download(id, type);
    } else {
      router.push('/login');
    }
  }

  function changeRefVisibility(ref) {
    if (ref == null) return;
    // console.log(ref);
    ref.current.style.display =
      ref.current.style.display == "block" ? "none" : "block";
  }
  return (
    <>
      <div className="product-item-download-container">
        <div>
          <button onClick={() => verifyAndDownload(product.id, product.type)}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
            </span>
            Download
          </button>
        </div>

        <div className="product-item-select">
          <div
            tabIndex={0}
            onClick={() => {
              changeRefVisibility(dropRef);
            }}
            onBlur={() => {
              changeRefVisibility(dropRef);
            }}
            className="product-item-selected-option"
          >
            <div>
              <p>Standard size</p>
              <p>{product?.resolution}</p>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#222"
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
          <div ref={dropRef} className="product-item-select-rest">
            <div tabIndex={0} className="product-item-selected-option">
              <div>
                <p>Standard size</p>
                <p>{product?.resolution}</p>
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="green"
                  className="bi bi-check2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
