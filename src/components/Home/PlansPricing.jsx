import Link from "next/link";
import React from "react";

export default function PlansPricing() {
  return (
    <div className="home-pricing-wrap">
      <div className="home-pricing-content">
        <h1>Checkout our Affordable Plans</h1>
        <Link href={"/pricing"}>
          <button>Plans</button>
        </Link>
      </div>
    </div>
  );
}
