import React from 'react';
import categoryImage from '../../data/categoryImageData';
import SingleItem from './SingleItem';

const NewestItems = () => {
   return (
      <>
         <section className="category__area pt-105 pb-135">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper text-center mb-60">
                        <h2 className="section__title">Check Out All Categories</h2>
                        <p>Find over 7000 Images & Videos</p>
                     </div>
                  </div>
               </div>
               <div className="new-product-tab">
                  
                  <div className="tab-content" id="nav-tabContent">
                     <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                        <div className="d-flex flex-wrap justify-content-center "> 
                           {
                              categoryImage.map(image => 
                                <SingleItem key={image.src} src={image.src} title={image.title} />   
                              )
                           }

                           {/* <div className="col-auto">
                              <SingleItem img="20" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="1" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="2" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="3" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="4" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="5" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="6" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="7" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="8" img_format="jpg" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="9" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="10" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="11" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="12" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="13" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="25" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="26" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="27" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="28" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="29" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="30" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="31" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="32" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="33" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="34" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="35" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="36" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="37" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="38" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="39" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="40" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="41" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="42" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="43" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="44" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="45" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="46" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="47" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="48" img_format="jpg" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="49" img_format="jpg"  />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="50" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="51" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="52" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="53" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="54" />
                           </div>
                        </div>
                     </div>

                     <div className="tab-pane fade" id="nav-template" role="tabpanel" aria-labelledby="nav-template-tab">
                        <div className="row justify-content-center g-0">
                           <div className="col-auto">
                              <SingleItem img="27" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="28" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="29" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="30" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="30" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="32" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="33" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="34" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="35" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="36" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="37" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="38" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="39" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="40" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="41" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="42" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="43" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="44" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="45" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="46" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="47" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="48" img_format="jpg"  />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="49" img_format="jpg"  />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="50" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="51" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="52" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="53" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="54" />
                           </div> */}
                        </div>
                     </div>

                     <div className="tab-pane fade" id="nav-wordpress" role="tabpanel" aria-labelledby="nav-wordpress-tab">
                        <div className="row justify-content-center g-0">
                           <div className="col-auto">
                              <SingleItem img="8" img_format="jpg"  />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="9" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="10" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="11" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="12" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="13" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="25" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="26" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="27" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="28" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="29" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="30" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="31" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="32" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="33" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="34" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="35" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="26" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="37" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="38" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="39" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="40" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="41" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="45" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="46" />
                           </div>
                        </div>

                     </div>

                     <div className="tab-pane fade" id="nav-business" role="tabpanel" aria-labelledby="nav-business-tab">
                        <div className="row justify-content-center g-0">
                           <div className="col-auto">
                              <SingleItem img="8" img_format="jpg"  />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="9" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="10" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="29" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="30" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="31" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="32" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="33" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="34" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="35" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="36" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="37" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="38" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="39" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="40" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="41" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="45" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="46" />
                           </div>
                        </div>
                     </div>

                     <div className="tab-pane fade" id="nav-corporate" role="tabpanel" aria-labelledby="nav-corporate-tab">
                        <div className="row justify-content-center g-0">
                           <div className="col-auto">
                              <SingleItem img="6" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="9" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="10" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="29" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="41" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="45" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="46" />
                           </div>
                        </div>
                     </div>

                     <div className="tab-pane fade" id="nav-marketing" role="tabpanel" aria-labelledby="nav-marketing-tab">
                        <div className="row justify-content-center g-0">
                           <div className="col-auto">
                              <SingleItem img="9" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="11" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="13" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="12" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="14" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="25" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="26" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="27" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="28" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="29" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="30" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="31" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="32" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="33" />
                           </div>
                        </div>
                     </div>

                     <div className="tab-pane fade" id="nav-technology" role="tabpanel" aria-labelledby="nav-technology-tab">
                        <div className="row justify-content-center g-0">
                           <div className="col-auto">
                              <SingleItem img="8" img_format="jpg"  />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="9" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="30" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="31" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="32" />
                           </div>
                           <div className="col-auto">
                              <SingleItem img="33" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default NewestItems;