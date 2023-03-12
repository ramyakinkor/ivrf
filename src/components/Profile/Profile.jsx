import Link from "next/link";
import React from "react";

export default function Profile() {
  return (
    <div className="profile container">
      <div className="profile__container">
        <h6>Personal Info</h6>
        <div className="profile__form">
          <div className="profile__form__two">
            <div className="profile__form__two__in">
              <label>First Name</label>
              <input />
            </div>
            <div className="profile__form__two__in">
              <label>Last Name</label>
              <input />
            </div>
          </div>

          <div className="profile__form__one">
            <label>Email Address</label>
            <input />
          </div>

          <div className="profile__form__one">
            <label>Phone No</label>
            <input />
          </div>

          <div className="profile__form__two">
            <div className="profile__form__two__in">
              <label>Street 1</label>
              <input />
            </div>
            <div className="profile__form__two__in">
              <label>Street 2</label>
              <input />
            </div>
          </div>

          <div className="profile__form__two">
            <div className="profile__form__two__in">
              <label>City</label>
              <input />
            </div>
            <div className="profile__form__two__in">
              <label>Zip/Postal Code</label>
              <input />
            </div>
          </div>

          <div className="profile__form__two">
            <div className="profile__form__two__in">
              <label>State</label>
              <input />
            </div>
            <div className="profile__form__two__in">
              <label>Country</label>
              <select>
                <option>India</option>
                <option>UK</option>
                <option>USA</option>
              </select>
            </div>
          </div>

          <div>
            <button>Update </button>
          </div>
        </div>

        <div>
          <Link href="/forgot-password">
            <span className="fgpass">Forgot Password</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
