import React, { useEffect, useRef } from "react";
import shapeTwo from "../../assets/shape-2.png";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import "./pricing.css";
import ScrollReveal from "scrollreveal";

const Pricing = () => {
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
    <section className="pricing section" id="pricing">
      <h2 ref={sr_right} className="section__title text-cs">Pricing</h2>
      <p ref={sr_left} className="section__subtitle">
        My <span>Price Board</span>
      </p>

      <div ref={sr_up} className="pricing__container container grid">
        <div className="pricing__item card card-one">
          <span className="pricing__subtitle text-cs">Hourly Basis</span>
          <h3 className="pricing__price">
            15 <span>$</span> <em>Hour</em>
          </h3>

          <p className="pricing__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, exercitationem iste porro, adipisci rem assumenda quaerat repudiandae dolor.</p>
          <ul className="pricing__list">
            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Brand Design</span>
            </li>

            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Web Development</span>
            </li>

            <li className="list__item">
              <del>Responsive Design</del>
            </li>

            <li className="list__item">
              <del>SEO</del>
            </li>
          </ul>

          <a href="" className="btn pricing__btn text-cs">
            Start Project
            <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
          </a>
          <img src={shapeTwo} alt="" className="shape c__shape" />
        </div>

        <div className="pricing__item-wrapper">
          <span className="pricing__label text-cs">Popular</span>
          <div className="pricing__item card card-one">
            <span className="pricing__subtitle text-cs">Freelancing</span>
            <h3 className="pricing__price">
              110 <span>$</span> <em>Week</em>
            </h3>

            <p className="pricing__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, exercitationem iste porro, adipisci rem assumenda quaerat repudiandae dolor.</p>
            <ul className="pricing__list">
              <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>Brand Design</span>
              </li>

              <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>Web Development</span>
              </li>

              <li className="list__item">
                <FaCheck className="list__icon"></FaCheck>
                <span>Responsive Design</span>
              </li>

              <li className="list__item">
                <del>SEO</del>
              </li>
            </ul>

            <a href="" className="btn pricing__btn text-cs">
              Start Project
              <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
            </a>
            <img src={shapeTwo} alt="" className="shape c__shape" />
          </div>
        </div>

        <div className="pricing__item card card-one">
          <span className="pricing__subtitle text-cs">Full Time</span>
          <h3 className="pricing__price">
            500 <span>$</span> <em>Month</em>
          </h3>

          <p className="pricing__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, exercitationem iste porro, adipisci rem assumenda quaerat repudiandae dolor.</p>
          <ul className="pricing__list">
            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Brand Design</span>
            </li>

            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Web Development</span>
            </li>

            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Responsive Design</span>
            </li>

            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>SEO</span>
            </li>
          </ul>

          <a href="" className="btn pricing__btn text-cs">
            Start Project
            <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
          </a>
          <img src={shapeTwo} alt="" className="shape c__shape" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
