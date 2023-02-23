import Link from "next/link";
import React from "react";
import SinglePrice from "./SinglePrice";

const ImagePricingArea = () => {
  return (
    <>
      <section className="pricing__area pt-100 pb-110">
        <div className="row__pricing ">
          <SinglePrice
            title="Single Download"
            licence="Standard License"
            downloads="1 Downloads/Month"
            price="10"
          />
          <SinglePrice
            title="Mini"
            licence="Standard License"
            downloads="5 Downloads/Month"
            price="30"
          />
          <SinglePrice
            title="Value"
            price="40"
            licence="Standard License"
            downloads="20 Downloads/Month"
            activeClass="active"
          />
          <SinglePrice
            title="Enterprise"
            licence="Standard License"
            downloads="100 Downloads/Month"
            startsAt={true}
            price="50"
          />
        </div>
      </section>
    </>
  );
};

export default ImagePricingArea;
