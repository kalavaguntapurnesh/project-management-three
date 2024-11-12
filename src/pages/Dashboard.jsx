import Layout from "./../components/Layout";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { HiSpeakerphone } from "react-icons/hi";
import { FaDollarSign, FaUserCheck } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { GiSpanner } from "react-icons/gi";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [customer, setCustomer] = useState(null);
  const [properties, setProperties] = useState(null);
  const navigate = useNavigate();

  const getCustomerInfo = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/getUserData",
        // "https://backend-syndeo.onrender.com/api/v1/getUserData",
        { userId: user?._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data) {
        setCustomer(response.data.data);
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
    getCustomerInfo();

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getProperties();
    //eslint-disable-next-line
  }, []);


  const [allActiveProperties, setAllActiveProperties] = useState(null);

  const getAllActiveProperties = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/getAllActiveProperties",
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data) {
        console.log("tenant data", response.data)
        setAllActiveProperties(response.data.data);
        console.log(allActiveProperties);
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
    getAllActiveProperties();

    //eslint-disable-next-line
  }, []);


  const [selectedLeaseTerms, setSelectedLeaseTerms] = useState(null); 
  const [showLeaseModal, setShowLeaseModal] = useState(false); 

  const fetchLeaseTerms = async (leaseAgreementId) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/getLandlordLeaseTerms",
        { landlordLeaseAgreementId: leaseAgreementId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data) {
        setSelectedLeaseTerms(response.data.data[0]); 
        setShowLeaseModal(true); 
      }
    } catch (error) {
      console.log(error);
      alert("Could not fetch lease terms. Please try again.");
    }
  };


  return (
    <div>
      <Layout>
        <div className="w-[100%]">
          <div>
            <h1 className="pb-3 font-semibold leading-normal text-gray-800 tracking-normal text-2xl text-start">
              Hello, {customer?.fullName}
            </h1>
          </div>

          <div className="w-[100%] flex items-start">
            <form class="max-w-md w-[100%]">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md "
                  placeholder="Search by property or tenant..."
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-mainColor  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="mt-6">
            {properties && properties.length > 0 ? (
              <div className="flex flex-col gap-4">
                {properties.map((property) => (
                  <div
                    key={property._id}
                    className="w-[100%] py-4 lg:px-8 px-4 border border-gray-200 rounded-lg shadow-md bg-white"
                  >
                    <h2 className="text-lg text-gray-800 font-semibold">
                      {property.propertyType?.label}
                    </h2>
                    <h2 className="text-2xl pt-3 space-x-3">
                      <span>{property.doorNumber}</span>
                      <span>{property.streetName}</span>
                      <span>{property.landMark}</span>
                    </h2>
                    <h2 className="text-gray-700 pt-1 text-lg space-x-3">
                      <span>{property.selectedCity?.name}</span>
                      <span>{property.selectedState?.name}</span>
                      <span>{property.selectedCountry?.name}</span>
                    </h2>

                    <h2 className="pt-2 pb-2 space-x-3 text-black font-semibold">
                      <span className="bg-red-500 p-0.5 rounded-full"></span>
                      <span>Vacant</span>
                    </h2>

                    <div className="lg:w-[70%] w-[100%] mt-3">
                      <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 ">
                        <div className="flex items-center justify-start">
                          <HiSpeakerphone className="w-6 h-6 text-mainColor" />
                          <h1 className="ml-2">Listing</h1>
                        </div>
                        <div className="flex items-center justify-start">
                          <FaUserCheck className="w-6 h-6 text-mainColor" />
                          <h1 className="ml-2">Applications</h1>
                        </div>
                        <div className="flex items-center justify-start">
                          <IoDocumentText className="w-6 h-6 text-mainColor" />
                          <h1 className="ml-2">Leases</h1>
                        </div>
                        <div className="flex items-center justify-start">
                          <FaDollarSign className="w-6 h-6 text-mainColor" />
                          <h1 className="ml-2">Payments</h1>
                        </div>
                        <div className="flex items-center justify-start">
                          <GiSpanner className="w-6 h-6 text-mainColor" />
                          <h1 className="ml-2">Maintenance</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center mt-4">...</p>
            )}
          </div>


          <div className="mt-6">
            {allActiveProperties && allActiveProperties.length > 0 ? (
              <div className="flex flex-col gap-4">
              {allActiveProperties.map((property) => (
                <div
                  key={property._id}
                  className="flex justify-between w-[100%] py-4 lg:px-8 px-4 border border-gray-200 rounded-lg shadow-md bg-white"
                >
                  <div>
                    <h2 className="text-lg text-gray-800 font-semibold">
                      {property.propertyType?.label}
                    </h2>
                    <h2 className="text-2xl pt-3 space-x-3">
                      <span>{property.doorNumber}</span>
                      <span>{property.streetName}</span>
                      <span>{property.landMark}</span>
                    </h2>
                    <h2 className="text-gray-700 pt-1 text-lg space-x-3">
                      <span>{property.selectedCity?.name}</span>
                      <span>{property.selectedState?.name}</span>
                      <span>{property.selectedCountry?.name}</span>
                    </h2>
                  </div>
                  
                 
                  <div className="mt-4 flex gap-3">
                    <button
                      className="px-4 py-1  bg-blue-500 text-white rounded-md hover:bg-blue-900"
                      onClick={() => fetchLeaseTerms(property.landlordLeaseAgreement?._id)}
                    >
                      Read Lease Terms
                    </button>
                    <button
                      className="px-4 py-1 bg-green-500 text-white rounded-md hover:bg-green-900"
                    >
                       Accept Lease Terms and Continue
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            ) : (
              <p className="text-gray-500 text-center mt-4">...</p>
            )}
          </div>

        </div>
      </Layout>

       {/* Lease Terms Modal */}
       {showLeaseModal && selectedLeaseTerms && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Lease Agreement Details</h2>
            <p><strong>Rent Amount:</strong> {selectedLeaseTerms.RentAmount}</p>
            <p><strong>Security Deposit:</strong> {selectedLeaseTerms.SecurityDeposit}</p>
            <p><strong>Lease Duration:</strong> {selectedLeaseTerms.LeaseDuration}</p>
            <p><strong>Start Date:</strong> {new Date(selectedLeaseTerms.StartDate).toLocaleDateString()}</p>
            <p><strong>End Date:</strong> {new Date(selectedLeaseTerms.EndDate).toLocaleDateString()}</p>
            <p><strong>Terms and Description:</strong> {selectedLeaseTerms.LeaseTermsAndDescription}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={() => setShowLeaseModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default Dashboard;
