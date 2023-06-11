import Link from "next/link";
import React from "react";
import { useUser } from "../../hooks/user";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const SinglePrice = ({subscription, desc}) => {
  const profile = useSelector(state => state.user.profile);
  const router = useRouter();
  const {purchaseSubscription} = useUser();
  //TODO:  should be enhanced in database.
  const priceMap = {
    '6': 20,
    '30': 50,
    '120': 200,
    '10': 40,
    '40': 150,
    '180': 500
  }
  const onPay = (id) => {
    if (!profile) {
      return router.push('/login');
    }
    purchaseSubscription(JSON.stringify({id: id}))
  }

  function percent(price) {
    return Math.trunc(100 - (price/priceMap[price] *100))
  }
  return (
    <>
      
        <div
          className={`pricing__item text-center transition-3 mb-30`}
        >
          <div className={`pricing__header mb-25`} style={{maxWidth: '250px'}}>
            <h3>{subscription.title}</h3>
            <div>Special Introductory Price {percent(subscription.price)}% discount on this Package</div>
          </div>
          <div className="pricing__tag">
            <div className={`d-flex justify-content-center mb-25`}>
              <span>$<strike>{priceMap[subscription.price]}</strike></span>
              <h4>${subscription.price}</h4>
            </div>
          </div>

          <div className="pricing__buy mb-20">
              <a className="m-btn m-btn-border m-btn-border-5 w-100" onClick={() => onPay(subscription.id)}>
                {" "}
                <span></span> Buy Now
              </a>
          </div>
          <div className="pricing__features text-start">
            <ul>
              <li>Standard license</li>
              <li style={{ width:'14em'}}>{subscription.credits} downloads</li>
              <li>{desc}</li>
              <li>1 year validity</li>
            </ul>
          </div>
        </div>
    </>
  );
};

export default SinglePrice;
