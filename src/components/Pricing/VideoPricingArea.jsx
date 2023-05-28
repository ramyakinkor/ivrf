import Link from "next/link";
import React from "react";
import SinglePrice from "./SinglePrice";
import { useUser } from "../../hooks/user";

const VideoPricingArea = () => {
  const {videoSubscriptionModel} = useUser();
  const description = 'HD / FULL HD / 4k / 8k+';
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
            {videoSubscriptionModel.length > 0 && videoSubscriptionModel.map((item, index) => <SinglePrice key={index} subscription={item} desc={description}/>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPricingArea;
