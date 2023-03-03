import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from "react-icons/fa";
import "./contact.css";
import { toast } from "react-toastify";
import ScrollReveal from "scrollreveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://sheet.best/api/sheets/bedfd71d-cdfc-440f-bec8-dabe3e5d875a", form);
      toast.success("Message sent!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    }
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
    <section className="contact section" id="contact">
      <h2 ref={sr_left} className="section__title text-cs">
        Contact Me
      </h2>
      <p ref={sr_right} className="section__subtitle">
        Let's <span>Talk About Ideas</span>
      </p>

      <div className="contact__container container grid">
        <div ref={sr_right} className="contact__content">
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegMap />
            </span>
            <h3 className="contact__card-title">Address</h3>
            <p className="contact__card-data">Jakarta, Indonesia</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegUser />
            </span>
            <h3 className="contact__card-title">Freelance</h3>
            <p className="contact__card-data">Available Right Now</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegEnvelope />
            </span>
            <h3 className="contact__card-title">Email</h3>
            <p className="contact__card-data">raxhavijaya31@gmail.com</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegAddressBook />
            </span>
            <h3 className="contact__card-title">Phone</h3>
            <p className="contact__card-data">+62 812-1921-2568</p>
          </div>
        </div>

        <form ref={sr_left} className="contact__form" onSubmit={handleSubmit}>
          <div  className="contact__form-group grid">
            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your full Name <b>*</b>
              </label>
              <input type="text" name="name" value={form.name} onChange={handleChange} className="contact__form-input" required/>
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag text-cs">
                Your Email Address <b>*</b>
              </label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="contact__form-input" required/>
            </div>
          </div>

          <div className="contact__form-div">
            <label className="contact__form-tag text-cs">
              Your Subject <b>*</b>
            </label>
            <input type="text" name="subject" value={form.subject} onChange={handleChange} className="contact__form-input" required/>
          </div>

          <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag text-cs">
              Your Message <b>*</b>
            </label>
            <textarea name="message" value={form.message} onChange={handleChange} className="contact__form-input" required/>
          </div>

          <div className="contact__submit">
            <p>* Accept the terms and conditions.</p>
            <button className="btn text-cs">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
