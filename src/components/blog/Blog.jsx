import React, {useEffect, useRef} from "react";
import { FaArrowRight } from "react-icons/fa";
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";
import './blog.css'
import ScrollReveal from "scrollreveal";

const Blog = () => {
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
    <section className="blog section" id="blog">
      <h2 ref={sr_right} className="section__title text-cs">Latest Blog</h2>
      <p ref={sr_left} className="section__subtitle">
        My <span>Articles and Advice</span>
      </p>

      <div ref={sr_up} className="blog__container container grid">
        <div className="blog__item card card-two">
          <span className="blog__date text-cs">February 20, 2023</span>
          <h3 className="blog__title">The Main Thing For The Designer</h3>
          <p className="blog__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero, facilis minus odio fugit ex dolorem amet aliquid?</p>

          <a href="" className="link">
            Read more
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>
          <img src={Blog1} alt="" className="blog__img" />
        </div>

        <div className="blog__item card card-two">
          <span className="blog__date text-cs">January 13, 2023</span>
          <h3 className="blog__title">Follow Your Own Design Process</h3>
          <p className="blog__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero, facilis minus odio fugit ex dolorem amet aliquid?</p>

          <a href="" className="link">
            Read more
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>
          <img src={Blog2} alt="" className="blog__img" />
        </div>

        <div className="blog__item card card-two">
          <span className="blog__date text-cs">December 31, 2022</span>
          <h3 className="blog__title">Usability Secrets to Create Better Interfaces</h3>
          <p className="blog__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero, facilis minus odio fugit ex dolorem amet aliquid?</p>

          <a href="" className="link">
            Read more
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>
          <img src={Blog3} alt="" className="blog__img" />
        </div>
      </div>
    </section>
  );
};

export default Blog;
