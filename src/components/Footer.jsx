import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <footer className="text-base">
        <div className="w-full max-w-screen px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
          <div className="pb-8 mb-8 border-b border-gray-400">
            <div className="grid grid-cols-2 md:grid-cols-5 ">
              <div className="mb-12 md:mb-0 ">
                <h4 className="text-sm leading-5 font-bold tracking-wider uppercase flex justify-center items-center mt-1 text-footerLinks">
                  Services
                </h4>
                <ul className="pl-0 mt-4 space-y-3 list-none">
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Customer Success
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Popular Blogs
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/login"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Log In to Property
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Rentals Mode
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/privacy"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Developer Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-12 md:mb-0 ">
                <h4 className="text-sm leading-5 font-bold tracking-wider uppercase flex justify-center items-center mt-1 text-footerLinks">
                  Connect
                </h4>
                <ul className="pl-0 mt-4 space-y-3 list-none">
                  <li className=" flex items-center justify-center">
                    <a
                      href="/contact"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Help Center
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Rentals Careers
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Become Partner
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/register"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Sign Up Here
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/about"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Team & Company
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-12 md:mb-0">
                <h4 className="text-sm leading-5 font-bold tracking-wider uppercase flex justify-center items-center mt-1 text-footerLinks">
                  Company
                </h4>
                <ul className="pl-0 mt-4 space-y-3 list-none">
                  <li className=" flex items-center justify-center">
                    <a
                      href="/privacy"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/privacy"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/about"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      About Rentals
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/contact"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/about"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Why Rentals?
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-12 md:mb-0 md:hidden block">
                <h4 className="text-sm leading-5 font-bold tracking-wider uppercase flex justify-center items-center mt-1 text-footerLinks">
                  Product
                </h4>
                <ul className="pl-0 mt-4 space-y-3 list-none">
                  <li className=" flex items-center justify-center">
                    <a
                      href="/contact"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Booking Page
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Group Calls
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Sign-up Sheet
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/register"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Education
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href="/about"
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                    >
                      Recruiting
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-12 md:mb-0 col-span-2">
                <h4 className="text-sm leading-5 font-bold tracking-wider uppercase flex justify-center items-center mt-1 text-footerLinks">
                  Contact Us
                </h4>
                <form action="">
                  <div className="mt-4 flex flex-col justify-center items-center">
                    <div className=" flex justify-center items-center w-full">
                      <input
                        type="email"
                        name="email"
                        required
                        className=" appearance-none flex md:w-9/12 w-10/12 border border-transparent px-5 py-3 text-base leading-6 rounded-md text-gray-800 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mt-4 mb-2 rounded-md flex w-full justify-center items-center">
                      <button
                        type="submit"
                        className="md:w-9/12 w-10/12 flex items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-md text-white bg-mainColor hover:bg-colorFour focus:outline-none focus:bg-green-200 transition duration-1000 ease-in-out"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="grid grid-cols-5 justify-center items-center place-items-center">
              <a href="/about">
                <FaLinkedin
                  size={25}
                  className="cursor-pointer"
                  color="black"
                />
              </a>

              <a href="/about">
                <FaInstagram
                  size={25}
                  className="cursor-pointer"
                  color="black"
                />
              </a>

              <a href="/about">
                <FaFacebook
                  size={25}
                  className="cursor-pointer"
                  color="black"
                />
              </a>

              <a href="/about">
                <FaXTwitter
                  size={25}
                  className="cursor-pointer"
                  color="black"
                />
              </a>
              <a href="/about">
                <FaGoogle size={25} className="cursor-pointer" color="black" />
              </a>
            </div>
            <a
              href="/privacy"
              className="flex justify-center items-center mt-6"
            >
              <p className="md:text-sm text-xs text-footerLinks">
                Copyright © 2024 Property Management. All rights reserved.
              </p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
