import React from "react";
import { testimonials } from "../../Data";
import shapeTwo from "../../assets/shape-2.png";
import testimonialIcon from "../../assets/testimonials-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonial">
      <div className="testimonials__container container">
      <h2 className="section__title text-cs">Testimonials</h2>
      <p className="section__subtitle">
        My <span>Customers Say</span>
      </p>

      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="testimonials__container container mySwiper"
      >
        {testimonials.map(({ img, name, author, description }, index) => {
          return (
            <SwiperSlide className="testimonials__item card card-one" key={index}>
              <div className="testimonial__header">
                <div className="testimonial__icon">
                  <img src={testimonialIcon} alt="" />
                </div>
                <img src={img} alt="" className="testimonial__img" />
              </div>
              <p className="testimonial__description">{description}</p>
              <h3 className="testimonial__name">{name}</h3>
              <p className="testimonial__author">{author}</p>
              <img src={shapeTwo} alt="" className="shape c__shape" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
