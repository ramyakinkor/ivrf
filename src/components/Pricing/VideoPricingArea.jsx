import Link from "next/link";
import React from "react";
import SinglePrice from "./SinglePrice";

const VideoPricingArea = () => {
  return (
    <>
      <section className="pricing__area pt-100 pb-110">
        <div className="row"></div>
        <div
          className="tab-content wow fadeInUp"
          id="priceTabContent"
          data-wow-delay=".5s"
        >
          <div
            className="tab-pane fade show active"
            id="monthly"
            role="tabpanel"
            aria-labelledby="monthly-tab"
          >
            <div className="row__pricing">
              <SinglePrice
                title="Single Download"
                licence="Standard License"
                downloads="1 Downloads/Month"
                price="15"
              />
              <SinglePrice
                title="Mini"
                licence="Standard License"
                downloads="5 Downloads/Month"
                price="45"
              />
              <SinglePrice
                title="Value"
                price="60"
                licence="Standard License"
                downloads="20 Downloads/Month"
                activeClass="active"
              />
              <SinglePrice
                title="Enterprise"
                licence="Standard License"
                downloads="100 Downloads/Month"
                startsAt={true}S
                price="100+"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPricingArea;
