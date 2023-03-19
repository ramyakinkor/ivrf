import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

export default function Profile() {
  const {userDetails, updateUser} = useAuth()
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    setTimeout(() => {
      reset(userDetails)
    })
  }, [userDetails])
  
  function submit(data) {
    updateUser(data.name, data.phone, data.email, reset)
  }
  return (
    <div className="profile container">
      <div className="profile__container">
        <h6>Personal Info</h6>
        <form className="profile__form" onSubmit={handleSubmit(submit)}>
          <div className="profile__form__two">
            <div className="profile__form__two__in">
              <label>Name</label>
              <input  {...register('name')} />
            </div>
            {/* <div className="profile__form__two__in">
              <label>Last Name</label>
              <input />
            </div> */}
          </div>

          <div className="profile__form__one">
            <label>Email Address</label>
            <input {...register('email')} />
          </div>

          <div className="profile__form__one">
            <label>Phone No</label>
            <input {...register('phone')} />
          </div>

          {/* <div className="profile__form__two">
            <div className="profile__form__two__in">
              <label>Street 1</label>
              <input />
            </div>
            <div className="profile__form__two__in">
              <label>Street 2</label>
              <input />
            </div>
          </div> */}

          {/* <div className="profile__form__two">
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
          </div> */}

          <div>
            <button>Update </button>
          </div>
        </form>

        <div>
          <Link href="/forgot-password">
            <span className="fgpass">Forgot Password</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
