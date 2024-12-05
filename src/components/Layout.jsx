import DashboardNavbar from "./DashboardNavbar";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { useEffect, useState } from "react";
import {
  FaAngleDown,
  FaBell,
  FaDollarSign,
  FaHome,
  FaUserAlt,
  FaUsers,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";
import { HiDocumentReport } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar closed by default
  const [openDropdownMobile, setOpenDropdownMobile] = useState(null);
  const navigate = useNavigate();
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleMobileDropdown = (dropdown) => {
    setOpenDropdownMobile((prev) => (prev === dropdown ? null : dropdown)); // Toggle the dropdown
  };

  const [properties, setProperties] = useState(null);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  console.log("The user Role is : ", user?.role);

  const getProperties = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/getProperties",
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data) {
        setProperties(response.data.data);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  useEffect(() => {
    getProperties();
    //eslint-disable-next-line
  }, []);

  return (
    // <div className=" flex justify-between items-start bg-[#f8f9f8] min-h-screen border-2 border-blue-800">
    //   <DashboardNavbar />
    //   <div className=" w-full h-full border-2 border-emerald-500">
    //     <div className="relative pt-24 pb-4">
    //       <div className="w-full">
    //         <div className="w-full px-4 mx-auto max-w-[1400px] ">
    //           <div className="w-full p-4 bg-[#f8f9f8] overflow-y-auto h-full">
    //             {children}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-screen ">
      <div>
        <div className="flex h-screen bg-gray-100 overflow-hidden">
          {/* Sidebar */}
          <div
            className={`fixed lg:relative top-0 left-0 h-full w-64 bg-[#f8f9fa] transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 lg:translate-x-0 z-20`}
          >
            <nav className="pt-4 relative h-full">
              <div
                onClick={() => navigate(`/dashboard/${user?._id}`)}
                className="text-center "
              >
                <h1 className="w-full text-2xl text-mainColor font-bold pt-4 cursor-pointer">
                  AL <span className="text-black">Rentals.</span>
                </h1>
              </div>

              <div>
                {user?.role === "landlord" ? (
                  <div>
                    <ul className="px-4 py-8">
                      <li className="p-4 md:border-b-0 border-b-[0.5px] border-gray-600 hover:bg-mainColor hover:text-white hover:rounded-md transition-all duration-500">
                        <div
                          onClick={() => navigate(`/dashboard/${user?._id}`)}
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
                            <FaDollarSign />{" "}
                            <h1 className="ml-2">Rent Analysis</h1>
                          </span>
                        </div>
                      </li>
                      <li className="p-4 md:border-b-0 border-b-[0.5px] border-gray-600 hover:bg-mainColor hover:text-white hover:rounded-md transition-all duration-500">
                        <div
                          onClick={() =>
                            navigate(`/landlordTenants/${user?._id}`)
                          }
                          className="flex items-center justify-between cursor-pointer"
                        >
                          <span className="flex items-center">
                            <FaUsers /> <h1 className="ml-2">My Tenants</h1>
                          </span>
                        </div>
                      </li>

                      <li className="p-4 md:border-b-0 border-b-[0.5px] border-gray-600 hover:bg-mainColor hover:text-white hover:rounded-md transition-all duration-500">
                        <div
                          onClick={() =>
                            navigate(`/addProperties/${user?._id}`)
                          }
                          className="flex items-center justify-between cursor-pointer"
                        >
                          <span className="flex items-center">
                            <IoHome /> <h1 className="ml-2">Add Properties</h1>
                          </span>
                        </div>
                      </li>
                      <li className="p-4 md:border-b-0 border-b-[0.5px] border-gray-600 hover:bg-mainColor hover:text-white hover:rounded-md transition-all duration-500">
                        <div
                          onClick={() => navigate(`/profile/${user?._id}`)}
                          className="flex items-center justify-between cursor-pointer"
                        >
                          <span className="flex items-center">
                            <MdDashboard />{" "}
                            <h1 className="ml-2">User Profile</h1>
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div
                      onClick={() => navigate(`/addProperties/${user?._id}`)}
                      className="px-4 cursor-pointer "
                    >
                      <div className="flex items-center justify-between rounded-md hover:bg-mainColor hover:text-white ease-in-out duration-500 transition hover:rounded-md ">
                        <h1 className="p-4 uppercase md:border-b-0 hover:rounded-md font-medium ">
                          my properties
                        </h1>
                        <FiPlus className="mr-4 font-medium" />
                      </div>
                    </div>

                    <div className="mt-2 h-50 overflow-y-scroll">
                    {properties && properties.length > 0 ? (
                      <div className="flex flex-col gap-1 p-4">
                        {properties
                          .slice(0, properties.length > 3 ? 2 : properties.length)
                          .map((property, index) => (
                            <ul key={property._id}>
                              <li
                                className={`cursor-pointer flex items-center text-center text-gray-600 w-[100%] py-2 px-2 overflow-hidden h-[70px] rounded-lg ${
                                  index % 2 === 0 ? "bg-gray-600 text-white" : "bg-gray-400 text-white"
                                }`}
                              >
                                <FaHome />
                                <h1 className="ml-2">{property.doorNumber}</h1>
                                <h1 className="ml-2">{property.streetName}</h1>
                              </li>
                            </ul>
                          ))}
                      </div>
 
                      ) : (
                        <p className="text-gray-500 text-center mt-4">...</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div>
                    <ul className="px-4 py-8">
                      <li className="p-4 md:border-b-0 border-b-[0.5px] border-gray-600 hover:bg-mainColor hover:text-white hover:rounded-md transition-all duration-500">
                        <div
                          onClick={() => navigate(`/dashboard/${user?._id}`)}
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
                            <FaDollarSign />{" "}
                            <h1 className="ml-2">Landlord Details</h1>
                          </span>
                        </div>
                      </li>
                      <li className="p-4 md:border-b-0 border-b-[0.5px] border-gray-600 hover:bg-mainColor hover:text-white hover:rounded-md transition-all duration-500">
                        <div
                          onClick={() =>
                            navigate(`/landlordTenants/${user?._id}`)
                          }
                          className="flex items-center justify-between cursor-pointer"
                        >
                          <span className="flex items-center">
                            <FaUsers /> <h1 className="ml-2">My Payments</h1>
                          </span>
                        </div>
                      </li>

                      <li className="p-4 md:border-b-0 border-b-[0.5px] border-gray-600 hover:bg-mainColor hover:text-white hover:rounded-md transition-all duration-500">
                        <div
                          onClick={() =>
                            navigate(`/addProperties/${user?._id}`)
                          }
                          className="flex items-center justify-between cursor-pointer"
                        >
                          <span className="flex items-center">
                            <IoHome /> <h1 className="ml-2">Lease Details</h1>
                          </span>
                        </div>
                      </li>
                      <li className="p-4 md:border-b-0 border-b-[0.5px] border-gray-600 hover:bg-mainColor hover:text-white hover:rounded-md transition-all duration-500">
                        <div
                          onClick={() => navigate(`/profile/${user?._id}`)}
                          className="flex items-center justify-between cursor-pointer"
                        >
                          <span className="flex items-center">
                            <MdDashboard />{" "}
                            <h1 className="ml-2">Tenant Profile</h1>
                          </span>
                        </div>
                      </li>
                    </ul>
                    {/* <div
                      onClick={() => navigate(`/addProperties/${user?._id}`)}
                      className="px-4 cursor-pointer "
                    >
                      <div className="flex items-center justify-between rounded-md hover:bg-mainColor hover:text-white ease-in-out duration-500 transition hover:rounded-md ">
                        <h1 className="p-4 uppercase md:border-b-0 hover:rounded-md font-medium ">
                          my properties
                        </h1>
                        <FiPlus className="mr-4 font-medium" />
                      </div>
                    </div>

                    <div className="mt-2">
                      {properties && properties.length > 0 ? (
                        <div className="flex flex-col gap-1 p-4">
                          {properties
                            .slice(
                              0,
                              properties.length > 3 ? 2 : properties.length
                            )
                            .map((property) => (
                              <ul key={property._id}>
                                <li className="cursor-pointer flex items-center text-center text-gray-600 w-[100%] py-2 px-2 overflow-hidden">
                                  <FaHome />
                                  <h1 className="ml-2">
                                    {property.doorNumber}
                                  </h1>
                                  <h1 className="ml-2">
                                    {property.streetName}
                                  </h1>
                                </li>
                              </ul>
                            ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 text-center mt-4">...</p>
                      )}
                    </div> */}
                  </div>
                )}
              </div>

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
            <header className="flex items-center justify-between bg-[#f8f9fa] p-5 ">
              <div className="flex items-center space-x-4 lg:space-x-0 w-full ">
                <button onClick={openSidebar} className="lg:hidden">
                  <CgMenuLeftAlt size={28} />
                </button>
                {/* Centered Search Bar on Mobile */}
                {/* <div className="lg:pl-8 pl-8 w-full lg:w-1/2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full max-w-2xl px-4 py-2 rounded-full focus:outline-none focus:border-gray-400 mx-auto lg:mx-0 border-[1px] border-gray-500 lg:block hidden"
                  />
                </div> */}

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

                  <div className="cursor-pointer">
                    <button
                      onClick={() => navigate(`/profile/${user?._id}`)}
                      className="flex justify-center items-center w-10 h-10 rounded-full font-bold text-[#ffffff] bg-mainColor"
                    >
                      {user?.fullName?.slice(0, 1).toUpperCase()}
                      {user?.fullName?.slice(1, 2).toUpperCase()}
                    </button>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="font-medium lg:block hidden text-white px-6 py-2 bg-mainColor rounded-md"
                  >
                    Logout
                  </button>

                  {/* Profile Picture */}
                </div>
              </div>
            </header>

            {/* Content Area */}
            {/* <main className="flex-1 overflow-y-auto pt-16 p-6 lg:ml-64">
              <h2 className="text-2xl font-semibold">
                Welcome to your Dashboard!
              </h2> */}
            {/* Add your main content here */}
            {/* </main> */}
            <div className=" w-full h-full bg-white pb-20">
              <div className="relative pt-4 pb-4">
                <div className="w-full">
                  <div className="w-full px-4 mx-auto max-w-[1400px] h-[calc(100vh-96px)] overflow-y-auto">
                    <div className="w-full p-4 h-full">{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;