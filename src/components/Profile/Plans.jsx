import Link from "next/link";
import React from "react";

export default function Plans() {
  return (
    <div className="plans container">
      <div className="plans__content">
        <div className="plans__content__item">
          <p className="plans__content__item__title">My Plans</p>
          <p>
            Remaining Downloads: <span style={{ fontWeight: "bold" }}>0</span>
          </p>
        </div>

        <div className="plans__content__item">
          <p className="plans__content__item__title">Purchase History</p>
          <p >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "0.7rem",
                backgroundColor: "#d4d4d8",
                padding: "0.4em",
                borderRadius: "0.3em",
              }}
            >
              11/12/22
            </span>{" "}
            Purchased plan{" "}
            <span
              style={{
                fontWeight: "bold",
                fontSize: "0.7rem",
                backgroundColor: "#d4d4d8",
                padding: "0.4em",
                borderRadius: "0.3em",
              }}
            >
              20 Downloads/Month
            </span>{" "}
            at <span style={{ fontStyle: "italic" }}>9:50:04 PM</span>
          </p>
          <p >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "0.7rem",
                backgroundColor: "#d4d4d8",
                padding: "0.4em",
                borderRadius: "0.3em",
              }}
            >
              11/12/22
            </span>{" "}
            Purchased plan{" "}
            <span
              style={{
                fontWeight: "bold",
                fontSize: "0.7rem",
                backgroundColor: "#d4d4d8",
                padding: "0.4em",
                borderRadius: "0.3em",
              }}
            >
              20 Downloads/Month
            </span>{" "}
            at <span style={{ fontStyle: "italic" }}>9:50:04 PM</span>
          </p>
          <p >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "0.7rem",
                backgroundColor: "#d4d4d8",
                padding: "0.4em",
                borderRadius: "0.3em",
              }}
            >
              11/12/22
            </span>{" "}
            Purchased plan{" "}
            <span
              style={{
                fontWeight: "bold",
                fontSize: "0.7rem",
                backgroundColor: "#d4d4d8",
                padding: "0.4em",
                borderRadius: "0.3em",
              }}
            >
              20 Downloads/Month
            </span>{" "}
            at <span style={{ fontStyle: "italic" }}>9:50:04 PM</span>
          </p>
        </div>
      </div>
      <Link href="/pricing">
        <button className="plans__buy">Purchase Plans</button>
      </Link>
    </div>
  );
}
