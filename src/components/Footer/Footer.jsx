import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import {
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-300 text-base-content pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="footer grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-10 border-b border-gray-400/50">
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex justify-start items-center gap-1">
              <img src={logo} alt="logo" className="w-[20%] sm:w-[10%]" />
              <Link
                to="/"
                className="text-xl font-bold text-primary font-heading normal-case"
              >
                HomeEase
              </Link>
            </div>
            <p className="text-sm text-gray-700 max-w-xs mb-4">
              Your trusted partner for home services. Quality, verified, and
              always on time.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-700 hover:text-primary transition duration-200"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-700 hover:text-primary transition duration-200"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-700 hover:text-primary transition duration-200"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-700 hover:text-primary transition duration-200"
              >
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>

          <nav>
            <h6 className="footer-title">Popular Services</h6>
            <a className="link link-hover">AC Repair</a>
            <a className="link link-hover">Deep Cleaning</a>
            <a className="link link-hover">Plumbing</a>
            <a className="link link-hover">Electrical Work</a>
          </nav>

          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy Policy</a>
          </nav>

          <nav>
            <h6 className="footer-title">Support</h6>
            <a className="link link-hover">FAQ</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Refer a Friend</a>
            <a className="link link-hover">Provider Portal</a>
          </nav>

          <nav className="col-span-2 md:col-span-1 lg:col-span-1">
            <h6 className="footer-title">Contact Us</h6>
            <p className="flex items-center space-x-2">
              <FaPhoneAlt size={18} className="text-primary" />
              <a href="tel:+8801700000000" className="link link-hover">
                +880 1700 000 000
              </a>
            </p>
            <p className="flex items-center space-x-2 mt-2">
              <IoMail size={18} className="text-primary" />
              <a href="mailto:support@HomeEase.com" className="link link-hover">
                support@HomeEase.com
              </a>
            </p>
            <p className="flex items-start space-x-2 mt-2">
              <FaMapMarkerAlt
                size={18}
                className="text-primary shrink-0 mt-1"
              />
              <span>
                HomeEase HQ, <br />
                Dhaka, Bangladesh
              </span>
            </p>
          </nav>
        </div>

        <div className="py-6 text-center text-sm text-gray-600 border-t border-gray-400/50 mt-10 lg:mt-0">
          <p>
            &copy; {currentYear} HomeEase Technologies Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
