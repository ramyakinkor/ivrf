import React from 'react';

const ContactArea = () => {
   return (
      <>
         <section className="contact__area pt-105 pb-145">
            <div className="contact__shape">
               <img className="man-1" src="/assets/img/icon/sign/man-1.png" alt="man" />
               <img className="circle" src="/assets/img/icon/sign/circle.png" alt="circle" />
               <img className="zigzag" src="/assets/img/icon/sign/zigzag.png" alt="zigzag" />
               <img className="dot" src="/assets/img/icon/sign/dot.png" alt="dot" />
               <img className="bg" src="/assets/img/icon/sign/sign-up.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="page__title-wrapper mb-55">
                        <h2 className="page__title-2">Leave Us a Message.</h2>
                        <p>Jolly good bevvy butty its all gone to pot that quaint so I said cheers.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-7 col-xl-7">
                     <div className="contact__wrapper  white-bg">
                        <div className="contact__form">
                           <form >
                              <div className="row">
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Full Name</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="Full name" name="name" />
                                          <i className="fal fa-user"></i>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Work email</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="e-mail address" name="email" />
                                          <i className="fal fa-envelope"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Company Name</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="Company Name" name="subject" />
                                          <i className="fal fa-smile"></i>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Website</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="Website" name="website" />
                                          <i className="fal fa-globe"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-12">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Message</h5>
                                       <div className="contact__input textarea">
                                          <textarea required placeholder="Tell us a bil about your project" name="message"></textarea>
                                          <i className="fal fa-comment"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-12">
                                    <button type="submit" className="m-btn m-btn-4"> <span></span> submit </button>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5">
                     <div className="contact__map">
                        <iframe width="700" height="440" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=rafilmstudio+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactArea;