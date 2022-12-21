import React from 'react';
import { Button, Navbar, Dropdown, Menu } from 'react-daisyui';
import { Link } from 'react-router-dom';

function FuncHeader() {
  return (
    <div className="pb-40 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar>
        <Navbar.Start>
          <Dropdown>
            <Button color="ghost" tabIndex={0} className="lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </Button>
            <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
              <Dropdown.Item>
                <Link to="/#our-services">Our Services</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/#why-us">Why Us</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/#testimonial">Testimonial</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/#faq">FAQ</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Button color="success">Register</Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
            BCR
          </Link>
        </Navbar.Start>
        <Navbar.End className="hidden lg:flex">
          <Menu horizontal className="p-0">
            <Menu.Item>
              <Link className="font-semibold" to="/#our-services">
                Our Services
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link className="font-semibold" to="/#why-us">
                Why Us
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link className="font-semibold" to="/#testimonial">
                Testimonial
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link className="font-semibold" to="/#faq">
                FAQ
              </Link>
            </Menu.Item>
          </Menu>
          <Button className="text-white bg-limegreenlight outline-none border-none">Register</Button>
        </Navbar.End>
      </Navbar>
    </div>
  );
}

export default FuncHeader;
