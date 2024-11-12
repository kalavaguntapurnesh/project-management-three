import { CgMenuLeftAlt } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { useState } from "react";
import {
  FaAngleDown,
  FaBell,
  FaDollarSign,
  FaUserAlt,
  FaUsers,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { HiDocumentReport } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const DashboardNavbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar closed by default
  const [openDropdownMobile, setOpenDropdownMobile] = useState(null);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleMobileDropdown = (dropdown) => {
    setOpenDropdownMobile((prev) => (prev === dropdown ? null : dropdown)); // Toggle the dropdown
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="-mt-6">
      <div>
        <div className="flex h-screen bg-gray-100 overflow-hidden">
          {/* Sidebar */}
          <div
            className={`fixed lg:relative top-0 left-0 h-full w-64 bg-[#f8f9fa] transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 lg:translate-x-0 z-20`}
          >
            <nav className="pt-4 relative h-full">
              <a href="/" className="text-center ">
                <h1 className="w-full text-2xl text-mainColor font-bold pt-4 cursor-pointer">
                  AL <span className="text-black">Rentals.</span>
                </h1>
              </a>

              <ul className="px-4 py-8">
                <li className="p-4 md:border-b-0 border-b-[0.5px] border-gray-600 hover:bg-mainColor hover:text-white hover:rounded-md transition-all duration-500">
                  <div
                    onClick={() => toggleMobileDropdown("home")}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center">
                      <MdDashboard /> <h1 className="ml-2">Dashboard</h1>
                    </span>
                  </div>
                </li>
                <li className="p-4 md:border-b-0 border-b-[0.5px] border-gray-600 hover:bg-mainColor hover:text-white hover:rounded-md transition-all duration-500">
                  <div
                    onClick={() => toggleMobileDropdown("rent-analysis")}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center">
                      <FaDollarSign /> <h1 className="ml-2">Rent Analysis</h1>
                    </span>
                  </div>
                </li>
                <li className="p-4 md:border-b-0 border-b-[0.5px] border-gray-600 hover:bg-mainColor hover:text-white hover:rounded-md transition-all duration-500">
                  <div
                    onClick={() => toggleMobileDropdown("my-tenants")}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center">
                      <FaUsers /> <h1 className="ml-2">My Tenants</h1>
                    </span>
                  </div>
                </li>

                <li className="p-4 md:border-b-0 border-b-[0.5px] border-gray-600 hover:bg-mainColor hover:text-white hover:rounded-md transition-all duration-500">
                  <div
                    onClick={() => toggleMobileDropdown("reports")}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center">
                      <HiDocumentReport />{" "}
                      <h1 className="ml-2">Add Properties</h1>
                    </span>
                  </div>
                </li>
                <li className="p-4 md:border-b-0 border-b-[0.5px] border-gray-600 hover:bg-mainColor hover:text-white hover:rounded-md transition-all duration-500 cursor-pointer">
                  <div
                    onClick={() => toggleMobileDropdown("profile")}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center hover:text-white">
                      <FaUserAlt /> <h1 className="ml-2">My Profile</h1>
                    </span>
                    <FaAngleDown
                      className={`transition-transform ${
                        openDropdownMobile === "profile"
                          ? "rotate-180 text-mainColor hover:text-white duration-500"
                          : ""
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {openDropdownMobile === "profile" && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 mt-6 space-y-2"
                      >
                        <li>
                          <a href="/profile" className="text-sm">
                            My Profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="/learn-about-us#logo_meaning"
                            className="text-sm"
                          >
                            Logout
                          </a>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              </ul>
              <div className="px-4 ">
                <h1 className="p-4 uppercase md:border-b-0 border-gray-600 hover:bg-gray-200 hover:rounded-md font-medium transition-all duration-500">
                  my properties
                </h1>
              </div>
              <ul className="px-4 pb-8">
                <li className="p-4 md:border-b-0 border-b-[0.5px] border-gray-600">
                  <div
                    onClick={() => toggleMobileDropdown("home")}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center">
                      <MdDashboard /> <h1 className="ml-2">Dashboard</h1>
                    </span>
                    <FaAngleDown
                      className={`transition-transform ${
                        openDropdownMobile === "home"
                          ? "rotate-180 text-mainColor"
                          : ""
                      }`}
                    />
                  </div>
                </li>
                <li className="p-4 md:border-b-0 border-b-[0.5px] border-gray-600">
                  <div
                    onClick={() => toggleMobileDropdown("rent-analysis")}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center">
                      <FaDollarSign /> <h1 className="ml-2">Rent Analysis</h1>
                    </span>
                    <FaAngleDown
                      className={`transition-transform ${
                        openDropdownMobile === "rent-analysis"
                          ? "rotate-180 text-mainColor"
                          : ""
                      }`}
                    />
                  </div>
                </li>
              </ul>

              <div className="absolute lg:bottom-4 bottom-8 left-0 w-full px-4 py-4">
                <button
                  onClick={handleLogout}
                  className="w-full text-white bg-mainColor py-2 rounded-md font-medium"
                >
                  Logout
                </button>
              </div>
            </nav>
          </div>

          {/* Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
              onClick={closeSidebar}
            />
          )}

          {/* Main Content */}
          <div
            className={`flex flex-col flex-1 transition-all duration-300 ${
              isSidebarOpen ? "lg:ml-64" : ""
            }`}
          >
            {/* Header */}
            <header className="flex items-center justify-between bg-white p-5 shadow ">
              <div className="flex items-center space-x-4 lg:space-x-0 w-full ">
                <button onClick={openSidebar} className="lg:hidden">
                  <CgMenuLeftAlt size={28} />
                </button>
                {/* Centered Search Bar on Mobile */}
                <div className="lg:pl-8 pl-8 w-full lg:w-1/2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full max-w-2xl px-4 py-2 rounded-full focus:outline-none focus:border-gray-400 mx-auto lg:mx-0 border-[1px] border-gray-500 lg:block hidden"
                  />
                </div>

                <div className="flex items-center justify-end w-full space-x-4 lg:pr-10 pr-2 ">
                  {/* Notification Icon */}
                  <div className="lg:flex hidden space-x-2 justify-center items-center cursor-pointer">
                    <div className="flex justify-center items-center w-10 h-10 border-2 border-gray-100 bg-gray-100 rounded-full">
                      <FaBell size={20} className="text-gray-700" />
                    </div>
                    <div className="flex justify-center items-center w-10 h-10 border-2 border-gray-100 bg-gray-100 rounded-full">
                      <IoMdSettings size={20} className="text-gray-700" />
                    </div>
                  </div>

                  <a
                    href="/"
                    className="flex items-center space-x-4 cursor-pointer"
                  >
                    {/* <div className="lg:flex hidden flex-col justify-center items-center">
                      <h1 className="font-semibold">Purnesh</h1>
                      <p className="text-gray-500 text-sm">Landlord</p>
                    </div> */}
                    <img
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                  </a>

                  <button
                    onClick={handleLogout}
                    className="font-medium lg:block hidden text-white px-6 py-2 bg-mainColor rounded-full"
                  >
                    Logout
                  </button>

                  {/* Profile Picture */}
                </div>
              </div>
            </header>

            {/* Content Area */}
            <main className="flex-1 overflow-y-auto pt-16 p-6 lg:ml-64">
              <h2 className="text-2xl font-semibold">
                Welcome to your Dashboard!
              </h2>
              {/* Add your main content here */}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
