import Link from "next/link";
import React from "react";
import { Offcanvas } from "react-bootstrap";
import Collapsible from "react-collapsible";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";

const SidebarMenu = ({ show, handleClose }) => {
  const totalCartQuantity = useSelector(
    (state) => state.products.cartTotalQuantity
  );
  const { user, logout } = useAuth();
  return (
    <>
      <div>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          className="side__bar"
        >
          <Offcanvas.Header closeButton>
            <div className="logo">
              <Link href="/home">
                <a>
                  <img src="/assets/img/logo/ivrf-logo.png" alt="logo" />
                </a>
              </Link>
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div className="">
              <div className="">
                <div className="sidebar__content">
                  <div className="mobile-menu">
                    <nav id="mobile-menu">
                      <ul>
                        {/* <Collapsible trigger={<Link href="/home">Home</Link>} triggerTagName="div"
                                       triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                                       <ul className="sidebar_sub_menu submenu text-white">
                                          <li><Link href="/home"><a >Home Wordpress</a></Link></li>
                                          <li><Link href="/homeTwo"><a >Home Plugins</a></Link></li>
                                          <li><Link href="/home-three"><a >Home Market</a></Link></li>
                                       </ul>
                                    </Collapsible> */}
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/stock-image">Stock Photos</Link>
                        </li>
                        <li>
                          <Link href="/stock-video">Stock Videos</Link>
                        </li>
                        <li>
                          <Link href="/pricing">Pricing</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className="sidebar__action d-flex align-items-center">
                    <div className="sidebar__login mt-15">
                      {user?.email ? (
                        <a
                          onClick={logout}
                          style={{ cursor: "pointer" }}
                          className="d-flex align-items-center"
                        >
                          {" "}
                          <i className="fal fa-sign-out-alt"></i>{" "}
                          <span> Log Out </span>
                        </a>
                      ) : (
                        <Link href="/login">
                          <a>
                            {" "}
                            <i className="far fa-unlock"></i>
                            <span>Log In</span>
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default SidebarMenu;
