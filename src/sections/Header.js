import React from 'react';
import { Button, Navbar, Dropdown, Menu } from 'react-daisyui';

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
                <a href="/#our-services">Our Services</a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/#why-us">Why Us</a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/#testimonial">Testimonial</a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/#faq">FAQ</a>
              </Dropdown.Item>
              <Dropdown.Item>
                <Button color="success">Register</Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <a href="/" className="btn btn-ghost normal-case text-xl font-bold">
            BCR
          </a>
        </Navbar.Start>
        <Navbar.End className="hidden lg:flex">
          <Menu horizontal className="p-0">
            <Menu.Item>
              <a className="font-semibold" href="/#our-services">
                Our Services
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className="font-semibold" href="/#why-us">
                Why Us
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className="font-semibold" href="/#testimonial">
                Testimonial
              </a>
            </Menu.Item>
            <Menu.Item>
              <a className="font-semibold" href="/#faq">
                FAQ
              </a>
            </Menu.Item>
          </Menu>
          <Button className="text-white" color="success">
            Register
          </Button>
        </Navbar.End>
      </Navbar>
    </div>
  );
}

export default FuncHeader;
