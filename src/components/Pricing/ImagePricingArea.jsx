import Link from "next/link";
import React from "react";
import SinglePrice from "./SinglePrice";
import { useUser } from "../../hooks/user";

const ImagePricingArea = () => {
  const {imageSubscriptionModel} = useUser();
  const description= 'High Resolution';
  return (
    <>
      <section className="pricing__area pt-100 pb-110">
        <div className="row__pricing ">
          {imageSubscriptionModel.length > 0 && imageSubscriptionModel.map((item, index)=> <SinglePrice key={index} subscription={item} desc={description}/>)} 
        </div>
      </section>
    </>
  );
};

export default ImagePricingArea;
