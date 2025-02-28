import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import ScrollToTopButton from "./ScrollToTopButton";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white p-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-20">
            <img src="https://jdglobalschool.in/images/logo1.png" alt="" />
            <div>
              <h3 className="text-lg font-bold mb-4">Our Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:text-gray-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-400">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-400">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-400">
                    Event
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:text-gray-400">
                    Mission
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-400">
                    Vision
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-400">
                    Admission
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="inline-block">
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="mb-2">
                <span className="inline-block text-red-500">
                  <FaHome />
                </span>
                226, 5th Enclave, Randgram, Opp KM Residency, Raj Nagar Extn.,
                Ghaziabad 201003
              </p>
              <p className="mb-2">
                <span className="inline-block text-blue-500">
                  <FaPhoneAlt />
                </span>
                0120-2961089, 8882229658
              </p>
              <p className="mb-2 gap-1.5">
                <span className="inline-block text-yellow-500">
                  <MdAttachEmail />
                </span>
                jdglobal.school@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">JD Global School</h3>
              <p>English Medium (A Co-Educational Group of School)</p>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </>
  );
};

export default Footer;
