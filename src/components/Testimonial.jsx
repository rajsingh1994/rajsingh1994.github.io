import React from "react"
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Testimonial() {
  return (
    <>
      {/* <!-- testimonail-section --> */}
      <div className="testimonail-section mt-150 mb-150 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center">
              <div className="testimonial-sliders">
                <OwlCarousel className='owl-theme' loop margin={10} items={1} nav>
                  <div className="single-testimonial-slider">
                    <div className="client-avater">
                      <img src="assets/img/avaters/avatar1.png" alt=""/>
                    </div>
                    <div className="client-meta">
                      <h3>Saira Hakim <span>Local shop owner</span></h3>
                      <p className="testimonial-body">
									Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      </p>
                      <div className="last-icon">
                        <i className="fas fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial-slider">
                    <div className="client-avater">
                      <img src="assets/img/avaters/avatar2.png" alt=""/>
                    </div>
                    <div className="client-meta">
                      <h3>David Niph <span>Local shop owner</span></h3>
                      <p className="testimonial-body">
									Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      </p>
                      <div className="last-icon">
                        <i className="fas fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial-slider">
                    <div className="client-avater">
                      <img src="assets/img/avaters/avatar3.png" alt=""/>
                    </div>
                    <div className="client-meta">
                      <h3>Jacob Sikim <span>Local shop owner</span></h3>
                      <p className="testimonial-body">
									Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                      </p>
                      <div className="last-icon">
                        <i className="fas fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end testimonail-section --> */}
    </>
  )
}
