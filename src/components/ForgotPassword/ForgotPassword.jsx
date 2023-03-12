import React from "react";

export default function ForgotPassword() {
  return (
    <div className="forgot-password">
      <p className="forgot-password__title">Forgot Password</p>
      <div className="forgot-password__hero">
        <div className="forgot-password__hero__content">
          <p className="forgot-password__hero__content__subhead">
            Enter your e-mail address below and we’ll send you a link to reset
            your password.
          </p>

          <div className="forgot-password__hero__item">
            <lable>USERNAME/EMAIL</lable>
            <input placeholder="example@gmail.com / Hitman " />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
