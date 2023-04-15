import Link from "next/link";
import React from "react";
import SinglePrice from "./SinglePrice";

const VideoPricingArea = () => {
  const {videoSubscriptionModel} = useUser();
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
            {videoSubscriptionModel.length > 0 && videoSubscriptionModel.map((item, index) => <SinglePrice key={index} subscription={item}/>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPricingArea;
