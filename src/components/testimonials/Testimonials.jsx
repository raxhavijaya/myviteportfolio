import React, { useEffect, useRef } from "react";
import { testimonials } from "../../Data";
import shapeTwo from "../../assets/shape-2.png";
import testimonialIcon from "../../assets/testimonials-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./testimonials.css";
import ScrollReveal from "scrollreveal";

const Testimonials = () => {
  const sr_up = useRef(null);
  const sr_right = useRef(null);
  const sr_left = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(sr_up.current, {
      origin: "bottom",
      distance: "60px",
      duration: 2500,
      delay: 600,
    });

    sr.reveal(sr_right.current, {
      origin: "left",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    sr.reveal(sr_left.current, {
      origin: "right",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });
  }, []);

  return (
    <section className="testimonials section" id="testimonial">
      <div className="testimonials__container container">
        <h2 ref={sr_right} className="section__title text-cs">
          Testimonials
        </h2>
        <p ref={sr_up} className="section__subtitle">
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
          ref={sr_left}
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
