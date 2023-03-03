import React, { useState, useRef, useEffect } from "react";
import List from "./List";
import Items from "./Items";
import { projects } from "../../Data";
import "./portfolio.css";
import { AnimatePresence } from "framer-motion";
import ScrollReveal from "scrollreveal";

const allNavList = ["all", ...new Set(projects.map((project) => project.category))];

const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(projects);
  const [navList, setCategories] = useState(allNavList);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(projects);
      return;
    }
    const newProjectItems = projects.filter((item) => item.category === category);

    setMenuItems(newProjectItems);
  };

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
    <section className="portfolio section" id="portfolio">
      <h2 ref={sr_right} className="section__title text-cs">
        Portfolio
      </h2>
      <p ref={sr_left} className="section__subtitle">
        My <span>Cases</span>
      </p>

      <List list={navList} filterItems={filterItems} />

      <div ref={sr_up} className="portfolio__container container grid">
        <AnimatePresence initial={false}>
          <Items projectItems={projectItems} />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
