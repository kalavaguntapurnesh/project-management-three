import React, { useState, useEffect } from "react";
import { RiCriminalFill, RiGuideFill, RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  MdAccountBalanceWallet,
  MdArticle,
  MdCable,
  MdOutlineHomeRepairService,
  MdOutlineWorkHistory,
  MdPayment,
} from "react-icons/md";
import {
  FaCalculator,
  FaCreditCard,
  FaDollarSign,
  FaHouseCircleCheck,
  FaLocationArrow,
  FaNewspaper,
  FaUser,
  FaXTwitter,
} from "react-icons/fa6";
import { FaInstagram, FaUserAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FiChevronDown, FiPaperclip, FiPieChart } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { GrResources, GrTechnology } from "react-icons/gr";
import { IoTicketSharp } from "react-icons/io5";
import { VscLaw } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdDashboard } from "react-icons/md";
import { FaBell, FaUsers } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownMobile, setOpenDropdownMobile] = useState(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dropdown and close others
  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null); // close if the same dropdown is clicked
    } else {
      setOpenDropdown(dropdown); // open the clicked dropdown
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    setOpenDropdownMobile((prev) => (prev === dropdown ? null : dropdown)); // Toggle the dropdown
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar closed by default

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 ">
        <a href="/" className="flex items-center">
          <div
            className={`h-10 w-10 bg-mainColor rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ease-in-out ${
              isScrolled ? "w-10 h-10 rounded-full" : "w-10 h-10 rounded-full"
            }`}
          >
            AL
          </div>

          <span
            className={`text-2xl font-bold ml-1 transition-all duration-300 ease-in-out ${
              isScrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
            }`}
          >
            Rentals.
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex flex-grow justify-center space-x-8 items-center">
          <Tabs />
          <a
            href="/pricing"
            className="text-gray-700 hover:text-neutral-100 hover:bg-mainColor hover:rounded-full hover:px-4 hover:py-1.5 ease-in-out duration-500"
          >
            Pricing
          </a>
        </ul>

        {/* Login Button */}
        <div className="hidden lg:flex space-x-4">
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="bg-mainColor hover:text-mainColor hover:border-[1px] hover:border-mainColor text-white lg:px-6 md:px-4 py-2 rounded-full font-medium text-sm hover:bg-white transition duration-500"
          >
            Log In
          </button>
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="border-[1px] border-mainColor text-mainColor hover:text-white hover:bg-mainColor lg:px-6 md:px-4 py-2 rounded-full text-sm font-medium transition duration-500"
          >
            Sign Up
          </button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="w-6 h-6 text-black" />
            ) : (
              <RiMenu3Fill className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        <div
          className={
            !isMobileMenuOpen
              ? "lg:hidden fixed left-[-100%] h-[75%] ease-in-out duration-1000 "
              : "lg:hidden fixed left-0 top-0 w-[70%] border-r h-[100%] bg-white ease-in-out duration-1000 rounded-b-lg z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          }
        >
          <a href="/">
            <h1 className="w-full text-2xl text-mainColor font-bold m-4 cursor-pointer">
              AL <span className="text-black">Rentals.</span>
            </h1>
          </a>
          <ul className="p-4">
            <li className="p-4 border-b border-gray-600">
              <div
                onClick={() => toggleMobileDropdown("home")}
                className="flex items-center justify-between cursor-pointer"
              >
                Company
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "home"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "home" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-gray-700 ">
                      <a href="/learn-about-us" className="text-sm">
                        About Us
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a
                        href="/learn-about-us#logo_meaning"
                        className="text-sm"
                      >
                        Logo Meaning
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a
                        href="/learn-about-us#about_founder"
                        className="text-sm"
                      >
                        Leadership
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="p-4 border-b border-gray-600">
              <div
                onClick={() => toggleMobileDropdown("products")}
                className="flex items-center justify-between cursor-pointer"
              >
                Products
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "products"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "products" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-gray-700">
                      <a href="/" className="text-sm">
                        LM Beehive
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/" className="text-sm">
                        LM Broadcast
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/enroll-rewards" className="text-sm">
                        Enroll Rewards
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/" className="text-sm">
                        Ecommerce Platform
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="p-4 border-b border-gray-600">
              <div
                onClick={() => toggleMobileDropdown("subscription")}
                className="flex items-center justify-between cursor-pointer"
              >
                Subscription
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "subscription"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "subscription" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-gray-700">
                      <a href="/pricing#pricing_platinum" className="text-sm">
                        Platinum
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/pricing#pricing_gold" className="text-sm">
                        Gold
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/pricing#pricing_silver" className="text-sm">
                        Silver
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/pricing#pricing_bronze" className="text-sm">
                        Bronze
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/pricing" className="text-sm">
                        Free Tier
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="p-4 border-b border-gray-600">
              <div
                onClick={() => toggleMobileDropdown("privacy")}
                className="flex items-center justify-between cursor-pointer"
              >
                Privacy
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "privacy"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "privacy" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-gray-700">
                      <a href="/privacy-policy" className="text-sm">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/consumer-privacy" className="text-sm">
                        Consumer Policy
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="p-4 border-b border-gray-600">
              <a
                href="/pricing"
                className="flex items-center justify-between cursor-pointer"
              >
                Pricing
              </a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a
                href="/login"
                className="flex items-center justify-between cursor-pointer"
              >
                Login
              </a>
            </li>
          </ul>

          <div className="px-4">
            <h1 className="p-4 text-xl font-semibold">Follow us on</h1>
            <div className="p-4">
              <div className="grid grid-cols-4">
                <a href="https://www.linkedin.com/company/laoe-maom/">
                  <FaLinkedinIn className="w-6 h-6 text-black duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="">
                  <FaXTwitter className="w-6 h-6 text-black duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="">
                  {" "}
                  <FaInstagram className="w-6 h-6 text-black duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="">
                  {" "}
                  <FaFacebookF className="w-6 h-6 text-black duration-1000 hover:text-mainColor ease-in-out" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2 "
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full md:text-sm lg:text-base px-3 py-1.5 transition-colors ${
        selected === tab ? " bg-mainColor text-neutral-100" : "text-gray-700"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-[100%] bg-white rounded-lg shadow p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden " key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl bg-mainColor"
    />
  );
};

const Blog = () => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      <a
        href="/learn-about-us"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaUser className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Renter Profile
        </span>
      </a>
      <a
        href="/learn-about-us#logo_meaning"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <MdCable className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Online Rent Payments
        </span>
      </a>
      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiPaperclip className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Digital Lease
        </span>
      </a>

      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <IoTicketSharp className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Maintenance Tickets
        </span>
      </a>

      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaCreditCard className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Credit Boost
        </span>
      </a>

      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaLocationArrow className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Find Next Place
        </span>
      </a>
    </div>
  );
};

const Homebar = () => {
  return (
    <div className="grid grid-cols-4 gap-4 ">
      <a
        href="/learn-about-us"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaHouseCircleCheck className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Rental Listings
        </span>
      </a>
      <a
        href="/learn-about-us#logo_meaning"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaDollarSign className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Rental Applications
        </span>
      </a>
      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaUserAlt className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Tenant Screening
        </span>
      </a>

      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <RiCriminalFill className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Credit, Criminal, Eviction Reports
        </span>
      </a>

      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiPieChart className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Digital Leases
        </span>
      </a>

      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <GrTechnology className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Online Rent Collection
        </span>
      </a>

      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <MdPayment className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">Fastpay</span>
      </a>

      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <MdOutlineHomeRepairService className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Maintenance Tracking
        </span>
      </a>
      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <MdOutlineWorkHistory className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Rent Price Analysis
        </span>
      </a>

      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaCalculator className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Rent Property Calculator
        </span>
      </a>

      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <MdAccountBalanceWallet className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Property Accounting
        </span>
      </a>
    </div>
  );
};

const ContactBar = () => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      <a
        href="/learn-about-us"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaNewspaper className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">Rental News</span>
      </a>
      <a
        href="/learn-about-us#logo_meaning"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <MdArticle className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">Articles</span>
      </a>
      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <RiGuideFill className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">Guides</span>
      </a>

      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <GrResources className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">Resources</span>
      </a>

      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <VscLaw className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">Laws</span>
      </a>
    </div>
  );
};

const TABS = [
  { title: "Landlords", Component: Homebar },
  {
    title: "Tenants",
    Component: Blog,
  },
  {
    title: "Education",
    Component: ContactBar,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
