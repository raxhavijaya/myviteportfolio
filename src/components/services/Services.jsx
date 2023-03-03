import React, { useEffect, useRef} from "react";

import { services } from "../../Data";
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from '../../assets/shape-2.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./services.css";
import ScrollReveal from "scrollreveal";

const Services = () => {
  const sr_up = useRef(null);
  const sr_right = useRef(null);
  const sr_left = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal()

    sr.reveal(sr_up.current, {
      origin: "bottom",
      distance: "60px",
      duration: 2500,
      delay:400,
      
    });

    sr.reveal(sr_right.current, {
      origin: "left",
      distance: "60px",
      duration: 2500,
      delay:600,
    });

    sr.reveal(sr_left.current, {
      origin: "right",
      distance: "60px",
      duration: 2500,
      delay:600,
    });
  }, []);

  return (
    <section className="services section" id="services">
      <div className="services__container container">
      <h2 ref={sr_left} className="section__title text-cs">What I Do</h2>
      <p ref={sr_right} className="section__subtitle">
        My <span>Services</span>
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
        className="services__container container mySwiper"
        ref={sr_up}
      >
        {services.map(({ name, title, description }, index) => {
          return (
            <SwiperSlide  className="services__item card card-one" key={index}>
              <span className="services__subtitle text-cs">{name}</span>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
              <a href="" className="link">
                See Pricing
                <FaArrowRight className="link__icon"></FaArrowRight>
              </a>
              <img src={shapeTwo} alt="" className="shape c__shape" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </section>
  );
};

export default Services;
