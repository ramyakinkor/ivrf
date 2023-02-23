import Link from "next/link";
import React from "react";

const SinglePrice = ({
  title,
  price,
  activeClass = "",
  licence,
  downloads,
  startsAt,
}) => {
  return (
    <>
      
        <div
          className={`pricing__item ${
            activeClass && activeClass
          } text-center transition-3 mb-30`}
        >
          <div className={`pricing__header ${startsAt ? "mb-5" : "mb-25"}`}>
            <h3>{title}</h3>
          </div>
          <div className="pricing__tag">
            {startsAt && (
              <p style={{ color: "#64748b", margin: "0" }}>Starts at</p>
            )}
            <div
              className={`d-flex justify-content-center ${
                startsAt ? "mb-17" : "mb-25"
              }`}
            >
              <span>$</span>
              <h4>{price}</h4>
            </div>
          </div>

          <div className="pricing__buy mb-20">
            <Link href="/pricing">
              <a className="m-btn m-btn-border m-btn-border-5 w-100">
                {" "}
                <span></span> Buy Now
              </a>
            </Link>
          </div>
          <div className="pricing__features text-start">
            <ul>
              <li>{licence}</li>
              <li style={{ width:'14em'}}>{downloads}</li>
            </ul>
          </div>
        </div>
    </>
  );
};

export default SinglePrice;
