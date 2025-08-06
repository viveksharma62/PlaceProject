import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Carousel = () => {
  useEffect(() => {
    // Re-initialize carousel
    const carouselEl = document.querySelector("#placementCarousel");
    if (carouselEl) {
      new window.bootstrap.Carousel(carouselEl);
    }
  }, []);

  return (
    <div
      id="placementCarousel"
      className="carousel slide container-fluid"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://exaltconsulting.com/uploads/exaltconsultancy/home-banner1.png"
            className="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img2.exportersindia.com/product_images/bc-full/dir_163/4881746/job-placement-service-1516077013-3582132.jpeg"
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://dynamic.placementindia.com/blog_images/20210330112333_image1.jpg"
            className="d-block w-100"
            alt="Slide 3"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#placementCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#placementCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousel;
