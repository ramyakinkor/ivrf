import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__area footer-bg-2">
          <div className="footer__top pt-90 pb-50">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div
                    className="footer__widget mb-40 wow fadeInUp mr-5"
                    data-wow-delay=".3s"
                    style={{
                      marginRight: "3em",
                    }}
                  >
                    <div className="footer__widget-head mb-35">
                      <Link href="/">
                        <a>
                          <img src="/assets/img/logo/ivrf-logo-tm.png" alt="" />
                        </a>
                      </Link>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__social mb-30">
                        <h4>Follow our Socials</h4>
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/profile.php?id=100092741844104&mibextid=ZbWKwL" className="fb">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/ivrfootage?t=Cv_GgghhiatOPK90MNylTw&s=08" className="tw">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://instagram.com/ivrfootage?igshid=MzRlODBiNWFlZA==" className="pin">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="footer__social mb-20">
                          <ul>
                            {/* <li>
                            <img src="/assets/img/footer/4k.jpeg" alt="logo" />
                            </li> */}
                            <li>
                            <a href="#" >
                            <img src="/assets/img/footer/4k-min.png" alt="4K" />
                            </a>
                          </li>
                            <li>
                            <a  >
                            <img src="/assets/img/footer/8k-Logo.png" alt="8K" />
                            </a>
                          </li>
                            
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
                  <div
                    className="footer__widget mb-40 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="footer__widget-head">
                      <h4 className="footer__widget-title footer__widget-title-2">
                        Our Company
                      </h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__link footer__link-2">
                        <ul>
                          <li>
                            <Link href="/stock-image">Stock Images </Link>
                          </li>
                          <li>
                            <Link href="/stock-video">Stock Videos </Link>
                          </li>
                          <li>
                            <Link href="/contact">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div
                    className="footer__widget mb-40 wow fadeInUp footer__widget-pl-70"
                    data-wow-delay=".7s"
                  >
                    <div className="footer__widget-head">
                      <h4 className="footer__widget-title footer__widget-title-2">
                        Categories
                      </h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__link footer__link-2">
                        <ul>
                          <li>
                            <Link href="/product/category/image/Art?search=art">Art </Link>
                          </li>
                          <li>
                            <Link href="/product/category/image/Landscape?search=landscape">
                              Landscape
                            </Link>
                          </li>
                          <li>
                            <Link href="/product/category/image/Science?search=science">
                              Science
                            </Link>
                          </li>
                          <li>
                            <Link href="/product/category/image/Abstract?search=abstract">
                              Abstract
                            </Link>
                          </li>
                          <li>
                            <Link href="/stock-image">All Categories</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div
                    className="footer__widget mb-40 wow fadeInUp footer__widget-pl-70"
                    data-wow-delay=".7s"
                  >
                    <div className="footer__widget-head">
                      <h4 className="footer__widget-title footer__widget-title-2">
                        Legal
                      </h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__link footer__link-2">
                        <ul>
                          <li>
                            <Link href="/terms-of-use">Terms of use </Link>
                          </li>
                          <li>
                            <Link href="/liscensing">Licensing</Link>
                          </li>
                          <li>
                            <Link href="/privacy-policy">Privacy policy</Link>{" "}
                          </li>
                          <li>
                            <Link href="/payment-policy">Payment policy</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="footer__bottom-inner footer__bottom-inner-2">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-md-6">
                    <div
                      className="footer__copyright footer__copyright-2 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <p>
                      © 2023 All Rights Reserved IVRFootage Pvt Ltd, Designed By{" "}
                        <a href="https://designslibrary.com">Designs Library</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
