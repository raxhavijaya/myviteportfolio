import React, {useEffect, useRef} from "react";
import { cv } from "../../Data";
import Card from "./Card";
import './resume.css'
import ScrollReveal from "scrollreveal";

const Resume = () => {
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
    <section className="resume section" id="resume">
      <h2 ref={sr_up} className="section__title text-cs">Resume</h2>
      <p className="section__subtitle">
        My <span>Story</span>
      </p>

      <div className="resume__container container grid">
        <div ref={sr_right} className="resume__group">
          <h3 className="resume__heading">Education</h3>
          <div className="resume__items">
            {cv.map((val, id) => {
              if (val.category === "education") {
                return <Card key={id} title={val.title} subtitle={val.subtitle} 
                date={val.date}
                description={val.description} />;
              }
            })}
          </div>
        </div>
        
        <div ref={sr_left} className="resume__group">
          <h3 className="resume__heading">Experience</h3>
          <div className="resume__items">
            {cv.map((val, id) => {
              if (val.category === "experience") {
                return <Card key={id} title={val.title} subtitle={val.subtitle}
                date={val.date}
                description={val.description} />;
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
