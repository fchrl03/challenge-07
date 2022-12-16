import React from 'react';
import { Footer } from 'react-daisyui';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaTwitch } from 'react-icons/fa';

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
          <a href="/" className="link text-blackdark link-hover">
            Our services
          </a>
          <a href="/" className="link text-blackdark link-hover">
            Why Us
          </a>
          <a href="/" className="link text-blackdark link-hover">
            Testimonial
          </a>
          <a href="/" className="link text-blackdark link-hover">
            FAQ
          </a>
        </div>

        <div>
          <p className="text-blackdark">Connect with us</p>
          <div className="flex flex-col gap-2.5 sm:flex-row">
            <div className="p-2.5 rounded-full bg-darkblue">
              <a className="text-white" href="/">
                <FaFacebookF />
              </a>
            </div>
            <div className="p-2.5 rounded-full bg-darkblue">
              <a className="text-white" href="/">
                <FaInstagram />
              </a>
            </div>
            <div className="p-2.5 rounded-full bg-darkblue">
              <a className="text-white" href="/">
                <FaTwitter />
              </a>
            </div>
            <div className="p-2.5 rounded-full bg-darkblue">
              <a className="text-white" href="/">
                <FaEnvelope />
              </a>
            </div>
            <div className="p-2.5 rounded-full bg-darkblue">
              <a className="text-white" href="/">
                <FaTwitch />
              </a>
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
