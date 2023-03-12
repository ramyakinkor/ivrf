import Link from "next/link";
import { useState, useRef } from "react";

export default function NavProfile() {
  const dropRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleBlur = (e) => {
    console.log("are you");
    if (
      e.nativeEvent.explicitOriginalTarget &&
      e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget
    ) {
      return;
    }
    if (document.hasFocus()) {
      setOpen(false);
    }
  };
  const handleClick = (e) => {
    if (open) dropRef.current.blur();
    else dropRef.current.focus();
    console.log(open);
    setOpen(!open);
  };
  return (
    <div
      tabIndex={-1}
      ref={dropRef}
      onBlur={handleBlur}
      className="nav-profile-container"
    >
      <div onClick={handleClick} className="nav-profile-container__title">
        <p>Profile</p>
        <span>
          <svg
            width="16"
            height="16"
            fill="currentColor"
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
      <div className={` ${open ? "active" : ""} nav-profile-container__main`}>
        <div
          className={`nav-profile-container__main__inner ${
            open ? "active" : ""
          }`}
        >
          <div className="nav-profile-container__main__inner__items">
            <p>User Profile</p>
            <Link href={"/myaccount"}>
              <p>Account</p>
            </Link>
          </div>
          <div className="nav-profile-container__main__inner__items">
            <Link href={"/myaccount/downloads"}>
              <div className="nav-profile-container__main__inner__item">
                <span>
                  <svg
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
                <p> My Downloads</p>
              </div>
            </Link>
            <Link href={"/myaccount/plans-payments"}>
              <div className="nav-profile-container__main__inner__item">
                <span>
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-wallet2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                  </svg>
                </span>
                <p>Plans & Payments</p>
              </div>
            </Link>
            <div className="nav-profile-container__main__inner__item">
              <span>
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                  />
                </svg>
              </span>
              <p>Log out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
