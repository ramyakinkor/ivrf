import Link from "next/link";
import React from "react";
import useAuth from "../../hooks/useAuth";

export default function Overview() {
  const {userDetails} = useAuth();
  return (
    <div className="container overview-wrapper">
      <div className=" profile-overview">
        <div className="profile-overview__item">
          <h5>Profile</h5>
        </div>

        <div className="profile-overview__item">
          <p>Name: {userDetails?.name}</p>
          <p>Email: {userDetails?.email}</p>
          <p>Phone: {userDetails?.phone}</p>
          {/* <p>Country: India</p> */}
        </div>
        <div className="profile-overview__item">
          <Link href="/myaccount/profile">
            <div>
              <button>Edit</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="plans-overview">
        <div className="plans-overview__item">
          <h5>Plans</h5>
        </div>
        <div className="plans-overview__item">
          <div className="plans-overview__item__in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-c-circle"
              viewBox="0 0 16 16"
            >
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
            </svg> 
            <p>Remainig Credits</p>
          </div>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}
