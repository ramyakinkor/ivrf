import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCartInfo from "../../hooks/use-cart-info";
import useSticky from "../../hooks/useSticky";
import NavProfile from "../common/NavProfile";
import SidebarMenu from "../Sidebar/SidebarMenu";
import { getCategories, getFeaturedImages, getFeaturedVideos } from "../../store/reducers/productSlice";
import { getProfile, logout } from "../../store/reducers/userSlice";
import { useRouter } from "next/router";

const Header = () => {
  const dispatch = useDispatch();

  const router = useRouter()
  const onSuccess = () => router.push('/')
  
  // handle cartQuantity
  const { quantity } = useCartInfo();
  // handle sidebar show
  const [show, setShow] = useState(false);
  // handle close
  const handleClose = () => setShow(false);
  // handle sidebar show
  const handleShow = () => setShow(true);
  // sticky nav
  const { sticky } = useSticky();
  // user
  
  const profile = useSelector(state => state.user.profile)

  useEffect(() => {
    dispatch(getFeaturedImages());
    dispatch(getFeaturedVideos());
    dispatch(getProfile());
    dispatch(getCategories());
  }, [dispatch])
  return (
    <>
      <header>
        <div
          className={
            sticky ? "sticky header__area white-bg" : "header__area white-bg"
          }
          id="header-sticky"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="logo" style={{
                  paddingBottom:'0.7em'
                }}>
                  <Link href="/">
                    <a>
                      <img src="/assets/img/logo/ivrf-logo-tm.png" alt="logo" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8 d-none d-lg-block">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <Link href={"/"}>Home</Link>
                      </li>
                      <li>
                        <Link href={"/stock-image"}>Stock Images</Link>
                      </li>
                      <li>
                        <Link href={"/stock-video"}>Stock Videos</Link>
                      </li>
                      <li>
                        <Link href={"/pricing"}>Pricing</Link>
                      </li>
                      <li>
                        <Link href={"/contact"}>Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-8 col-6">
                <div className="header__action d-flex align-items-center justify-content-evenly">
                  <div style={{marginRight:'0.7em'}}>
                    {profile?.email ? (
                      <a
                        onClick={() => dispatch(logout({cb: onSuccess}))}
                        style={{ cursor: "pointer" }}
                        className="d-flex align-items-center"
                      >
                        {" "}
                        <i className="fal fa-sign-out-alt"></i> Log Out
                      </a>
                    ) : (
                      <Link href="/login">
                        <a style={{display:"flex" ,gap:'0.4em',alignItems:'center',fontWeight:'500',color:'#55545b'}}>
                          {" "}
                          <i className="far fa-unlock"></i> Log In
                        </a>
                      </Link>
                    )}
                  </div> 

                  <div className="header__login d-none d-sm-block">
                     {profile && <NavProfile />}
                  </div>

                  <div style={{paddingBottom:'0.7em'}} className="sidebar__menu d-lg-none" onClick={handleShow}>
                    <div className="sidebar-toggle-btn" id="sidebar-toggle">
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SidebarMenu show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
