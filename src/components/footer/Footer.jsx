import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="" className="footer__social-link">
            <FaLinkedin />
          </a>
          <a href="" className="footer__social-link">
            <FaGithub />
          </a>
          <a href="" className="footer__social-link">
            <FaInstagram />
          </a>
        </div>

        <p className="footer__copyright text-cs">&copy; 2023 <span>Luique</span>. All Rights Reserved</p>

        <p className="footer__copyright text-cs">Developed by <span>Raxha Vijaya Ramadhan</span></p>
        </div>
    </footer>
  )
}

export default Footer