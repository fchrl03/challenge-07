import React from 'react';
import { Footer } from 'react-daisyui';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaTwitch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function FuncFooter() {
  return (
    <div>
      <Footer className="p-10 bg-white text-neutral-content">
        <div>
          <p className="text-blackdark">
            Jalan Suroyo No. 161 Mayangan Kota <br /> Probolonggo 672000
          </p>
          <p className="text-blackdark">binarcarrental@gmail.com</p>
          <p className="text-blackdark">081-233-334-808</p>
        </div>
        <div>
          <Link to="/" className="link text-blackdark link-hover">
            Our services
          </Link>
          <Link to="/" className="link text-blackdark link-hover">
            Why Us
          </Link>
          <Link to="/" className="link text-blackdark link-hover">
            Testimonial
          </Link>
          <Link to="/" className="link text-blackdark link-hover">
            FAQ
          </Link>
        </div>

        <div>
          <p className="text-blackdark">Connect with us</p>
          <div className="flex gap-2.5">
            <div className="p-2.5 rounded-full bg-darkblue">
              <Link className="text-white" to="/">
                <FaFacebookF />
              </Link>
            </div>
            <div className="p-2.5 rounded-full bg-darkblue">
              <Link className="text-white" to="/">
                <FaInstagram />
              </Link>
            </div>
            <div className="p-2.5 rounded-full bg-darkblue">
              <Link className="text-white" to="/">
                <FaTwitter />
              </Link>
            </div>
            <div className="p-2.5 rounded-full bg-darkblue">
              <Link className="text-white" to="/">
                <FaEnvelope />
              </Link>
            </div>
            <div className="p-2.5 rounded-full bg-darkblue">
              <Link className="text-white" to="/">
                <FaTwitch />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <p className="text-blackdark">Copyright Binar 2022</p>
          <p className="text-4xl text-blackdark font-bold">BCR</p>
        </div>
      </Footer>
    </div>
  );
}

export default FuncFooter;
