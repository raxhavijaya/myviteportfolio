import React, {useRef, useEffect} from "react";
// import '../../scrollReveal'
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "./home.css";
import ScrollReveal from "scrollreveal";



const Home = () => {
  const sr_down = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal()
    sr.reveal(sr_down.current, {
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay:400,
    });
  }, []);

  return (
    <section className="home section" id="home">
      <div ref={sr_down} className="home__wrapper">
        <div  className="home__container container">
          <p  className="home__subtitle text-cs">
            Hello, <span>My Name is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>RAXHA</span> VIJAYA
          </h1>

          <p className="home__job">
            <span className="text-cs">I am</span> <b>Front End Developer</b>
          </p>

          <div  className="home__img-wrapper box">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>
            <p className="home__data home__data-one">
              <span className="text-lg">
                1<b> +</b>
              </span>
              <span className="text-sm text-cs">
                Years of <span>Experience</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">5</span>
              <span className="text-sm text-cs">
                Completed <span>Projects</span>
              </span>
            </p>
            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            From Jakarta, Indonesia. I am a proficient front-end developer with expertise in React. I would be delighted to engage in a conversation with you regarding my unique skill set.
          </p>

          <div className="home__socials">
            <a href="https://www.linkedin.com/in/raxhavijaya31/" target="_blank" className="home__social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com/raxhavijaya" target="_blank" className="home__social-link">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/raxhavijayar/" target="_blank" className="home__social-link">
              <FaInstagram />
            </a>
          </div>

          <div className="home__btns">
            <a href="/CV_Raxha Vijaya Ramadhan NEW.pdf" download={true} className="btn text-cs">
              Download CV
            </a>

            <a href="#skills" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
