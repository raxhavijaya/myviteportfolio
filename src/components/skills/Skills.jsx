import React, { useEffect, useRef } from "react";
import { skills } from "../../Data";
import "./skills.css";
import ScrollReveal from "scrollreveal";

const Skills = () => {
  const sr_up = useRef(null);
  const sr_right = useRef(null);
  const sr_left = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(sr_up.current, {
      origin: "bottom",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    sr.reveal(sr_right.current, {
      origin: "left",
      distance: "60px",
      duration: 2500,
      delay: 600,
    });

    sr.reveal(sr_left.current, {
      origin: "right",
      distance: "60px",
      duration: 2500,
      delay: 600,
    });
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 ref={sr_left} className="section__title text-cs">
        Professional Skills
      </h2>
      <p ref={sr_right} className="section__subtitle">
        My <span>Talent</span>
      </p>

      <div ref={sr_up} className="skills__container container grid">
        {skills.map(({ name, percentage, description }, index) => {
          return (
            <div className="skills_item" key={index}>
              <div className="skills__titles">
                <h3 className="skills__name">{name}</h3>
                <span className="skills__number">
                  {percentage} <span>%</span>
                </span>
              </div>
              <p className="skills__description">{description}</p>

              <div className="skills__bar">
                <span className="skills__percentage" style={{ width: `${percentage}%` }}>
                  <span></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
