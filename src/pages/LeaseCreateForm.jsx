import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { FaRegEdit } from "react-icons/fa";
import Clauses from "./Clauses";
import Rules from "./Rules";
import Disclosures from "./Disclosures";
import Attachments from "./Attachments";

const LeaseCreateForm = () => {
  const { propertyID } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [landlordDetails, setLandlordDetails] = useState(null);

  const handleNavigation = () => {
    navigate(`/profile/:${propertyID}`);
  };

  const getPropertyDetails = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/getLeaseProperty",
        {
          propertyId: propertyID,
        }
      );

      if (response.data && response.data.success) {
        setProperty(response.data.data);
      } else {
        console.error("Failed to fetch property details");
      }
    } catch (error) {
      console.error("Error fetching property details:", error);
    }
  };


  useEffect(() => {
    getPropertyDetails();
  }, [propertyID]);

  const getLandlordDetails = async()=>{
    try{
      const response = await axios.post("http://localhost:8080/api/v1/getLandlordDetailsInTenantDashboard",
        {
          propertyId: propertyID,
        }
      );

      if (response.data) {
        setLandlordDetails(response.data);
      } else {
        console.error("Failed to fetch landlord details");
      }
    } catch (error) {
      console.error("Error fetching landlord details:", error);
    }
  }

  useEffect(()=>{
    getLandlordDetails();
  },[propertyID]);

  console.log("landlord details : ", landlordDetails);
  const fullName = landlordDetails?.landlordDetails?.userId?.fullName;
  const email = landlordDetails?.landlordDetails?.userId?.email;
  const phonenumber = landlordDetails?.landlordDetails?.userId?.phoneNumber;
  console.log("landlord details : ", fullName);
  console.log("landlord details : ", email  );
  console.log("landlord details : ", phonenumber  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [activeItem, setActiveItem] = useState("lease term"); // Tracks the current section
  const [formData, setFormData] = useState({
    leaseTerm: {
      startDate: null,
      endDate: null,
      fullYear: false,
      monthToMonth: false,
      customDate: false,
    },
    rentDetails: {
      rent: "",
      fees: "",
      securityDeposit: "",
      moveInFee: "",
      moveOutFee: "",
      parkingFee: "",
      lateRentFee: "",
      rentDueDate: "",
    },
    options: {
      proratedRent: false,
      petPolicy: false,
      smokingPolicy: false,
      monthToMonth: false,
      requireRentersInsurance: false,
      requireOnlinePaymentSetup: false,
      petPolicyDetails: {
        deposit: false, 
        fee: false,
        monthlyCharge: false,
        maintenanceLiability: false,
        noPets: false,
        depositAmount: "", // Make sure to initialize other values as well
        oneTimeFeeAmount: "",
        monthlyChargeAmount: "",
      },
    },
  });
 

  console.log(formData);
// List of menu items
const menuItems = [
    "lease term",
    "rent, deposit & fees",
    "options",
    "clauses",
    "rules",
    "disclosures",
    "attachments",
    "lessor info",
    "terms agreement",
  ];

  const handleNext = () => {
    // Validation for the current section
    if (activeItem === "lease term") {
      const { startDate, endDate, fullYear, monthToMonth, customDate } = formData.leaseTerm;
      if (!startDate || (!endDate && !fullYear && !monthToMonth && !customDate)) {
        Swal.fire({
          icon: "info",
          title: "Missing Data",
          text: "Please fill out all required fields in Lease Term.",
        });
        return;
      }
    }

    if (activeItem === "rent, deposit & fees") {
      const { rent, fees, securityDeposit, rentDueDate } = formData.rentDetails;
      if (!rent || !fees || !securityDeposit || !rentDueDate) {
        Swal.fire({
          icon: "info",
          title: "Missing Data",
          text: "Please fill out all required fields in Rent, Deposit & Fees.",
        });
        return;
      }
    }

    if (activeItem === "options") {
        const {
          proratedRent,
          petPolicy,
          smokingPolicy,
          monthToMonth,
          requireRentersInsurance,
          requireOnlinePaymentSetup,
          petPolicyDetails: { deposit, fee, monthlyCharge, maintenanceLiability, noPets }
        } = formData.options;
      
        // Example validation: Check if at least one option is selected
        if (
          !proratedRent &&
          !petPolicy &&
          !smokingPolicy &&
          !monthToMonth &&
          !requireRentersInsurance &&
          !requireOnlinePaymentSetup &&
          !deposit &&
          !fee &&
          !monthlyCharge &&
          !maintenanceLiability &&
          !noPets
        ) {
          Swal.fire({
            icon: "info",
            title: "Missing Data",
            text: "Please fill out at least one option in Options.",
          });
          return;
        }
      
    
      }
      

    // Navigate to the next section
    const currentIndex = menuItems.indexOf(activeItem);
    const nextIndex = currentIndex + 1 < menuItems.length ? currentIndex + 1 : currentIndex;
    setActiveItem(menuItems[nextIndex]);
  };



  const handleFullYearCheck = () => {
    if (formData.leaseTerm.fullYear && formData.leaseTerm.startDate) {
      const nextYear = new Date(formData.leaseTerm.startDate);
      nextYear.setFullYear(formData.leaseTerm.startDate.getFullYear() + 1);
      handleChange("leaseTerm", "endDate", nextYear);
    } else {
      handleChange("leaseTerm", "endDate", null);
    }
  };

  // Handle checkbox changes
  const handleCheckboxChange = (checkbox) => {
    if (checkbox === "fullYear") {
      handleChange("leaseTerm", "fullYear", true);
      handleChange("leaseTerm", "monthToMonth", false);
      handleChange("leaseTerm", "customDate", false);
      handleFullYearCheck();
    } else if (checkbox === "monthToMonth") {
      handleChange("leaseTerm", "fullYear", false);
      handleChange("leaseTerm", "monthToMonth", true);
      handleChange("leaseTerm", "customDate", false);
      if (formData.leaseTerm.startDate) {
        const nextMonth = new Date(formData.leaseTerm.startDate);
        nextMonth.setMonth(formData.leaseTerm.startDate.getMonth() + 1);
        handleChange("leaseTerm", "endDate", nextMonth);
      }
    } else if (checkbox === "customDate") {
      handleChange("leaseTerm", "fullYear", false);
      handleChange("leaseTerm", "monthToMonth", false);
      handleChange("leaseTerm", "customDate", true);
      handleChange("leaseTerm", "endDate", null);
    }
  };



  const handleChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

const handleOptionChange = (option) => {
  setFormData((prev) => ({
    ...prev,
    options: {
      ...prev.options,
      [option]: !prev.options[option],
    },
  }));
};
  
  const handlePetPolicyDetailChange = (key,value) => {
    setFormData((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        petPolicyDetails: {
          ...prev.options.petPolicyDetails,
          [key]: value,
        },
      },
    }));
  };

  

  const handleSubmit = () => {
    console.log("Submitting Data:", formData);
    Swal.fire({
      icon: "success",
      title: "Form Submitted",
      text: "Your data has been successfully submitted.",
    });
  };



  const renderFormContent = () => {
    switch (activeItem) {
      case "lease term":
        return (
            <div className="shadow-box p-6 border rounded-lg bg-white">
            <div className="mb-4">
              <h1 className="font-bold text-3xl text-mainColor">Lease Term</h1>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Start Date</label>
              <DatePicker
                selected={formData.leaseTerm.startDate}
                onChange={(date) => handleChange("leaseTerm", "startDate", date)}
                className="mt-2 p-2 border rounded-md"
                placeholderText="Select start date"
                required
              />
            </div>
      
            <div className="mb-4">
              <label className="block text-gray-700">End Date</label>
              <DatePicker
                selected={formData.leaseTerm.endDate}
                onChange={(date) => handleChange("leaseTerm", "endDate", date)}
                className="mt-2 p-2 border rounded-md"
                placeholderText="Select end date"
                required
                disabled={
                  formData.leaseTerm.fullYear || formData.leaseTerm.monthToMonth
                }
              />
            </div>
      
            <div className="mb-4">
              <div>
                <input
                  type="checkbox"
                  id="fullYear"
                  checked={formData.leaseTerm.fullYear}
                  onChange={() => handleCheckboxChange("fullYear")}
                />
                <label htmlFor="fullYear" className="ml-2">
                  Full Year
                </label>
              </div>
      
              <div>
                <input
                  type="checkbox"
                  id="monthToMonth"
                  checked={formData.leaseTerm.monthToMonth}
                  onChange={() => handleCheckboxChange("monthToMonth")}
                />
                <label htmlFor="monthToMonth" className="ml-2">
                  Month to Month
                </label>
              </div>
      
              <div>
                <input
                  type="checkbox"
                  id="customDate"
                  checked={formData.leaseTerm.customDate}
                  onChange={() => handleCheckboxChange("customDate")}
                />
                <label htmlFor="customDate" className="ml-2">
                  Custom Date
                </label>
              </div>
            </div>
      
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
              >
                Next
              </button>
            </div>
      
            <div className="text-center p-4 text-sm text-gray-600">
              <p>
                Your use lease tools is subject to our{" "}
                <span className="text-mainColor underline text-xl cursor-pointer ">
                  Terms of use.
                </span>{" "}
                Lease templates and their contents are not guaranteed, may not be
                suitable for your circumstances, and should be independently verified
                with your professional advisors prior to use.
              </p>
            </div>
          </div>

        );
        case "rent, deposit & fees":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-mainColor">Rent, Deposit & Fees</h1>
                </div>
                
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rent</label>
                        <input
                            type="number"
                            value={formData.rentDetails.rent}
                            onChange={(e) => handleChange("rentDetails", "rent", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fees</label>
                        <input
                            type="number"
                            value={formData.rentDetails.fees}
                            onChange={(e) => handleChange("rentDetails", "fees", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Security Deposit</label>
                        <input
                            type="number"
                            value={formData.rentDetails.securityDeposit}
                            onChange={(e) => handleChange("rentDetails", "securityDeposit", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>

                     
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Move-in Fee</label>
                        <input
                            type="number"
                            value={formData.rentDetails.moveInFee}
                            onChange={(e) => handleChange("rentDetails", "moveInFee", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Move-out Fee</label>
                        <input
                            type="number"
                            value={formData.rentDetails.moveOutFee}
                            onChange={(e) => handleChange("rentDetails", "moveOutFee", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parking Fee</label>
                        <input
                            type="number"
                            value={formData.rentDetails.parkingFee}
                            onChange={(e) => handleChange("rentDetails", "parkingFee", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Late Rent Fee</label>
                        <input
                            type="number"
                            value={formData.rentDetails.lateRentFee}
                            onChange={(e) => handleChange("rentDetails", "lateRentFee", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>
                
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rent Due Date</label>
                        <input
                            type="date"
                            value={formData.rentDetails.rentDueDate}
                            onChange={(e) => handleChange("rentDetails", "rentDueDate", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="$0.00"
                            required
                        />
                    </div>

                </div>

                <div className="flex justify-between">
                    <button
                        onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                        className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >
                        Next
                    </button>
                </div>


             {/* Terms of Use */}
            <div className="text-center p-4 text-sm text-gray-600">
                <p>Your use lease tools is subject to our <span className="text-mainColor underline text-xl cursor-pointer ">Terms of use.</span> Lease templates and their 
                contents are not guarented, may not be suitable for your circumstances, and should be independently verified with your professional advisors
                prior to use.
                </p>
            </div>
              </div>
            );
          case "options":
            return (
                <div className="shadow-box p-6 border rounded-lg bg-white space-y-5">
                    <div className="mb-4">
                        <h1 className="font-bold text-3xl text-mainColor">Options</h1>
                    </div>

                    <div className="flex flex-col gap-3">
                    <label htmlFor="proratedRent" className="text-lg font-medium text-gray-900 dark:text-gray-300">
                        Prorated Rent
                    </label>
                    <div className="flex gap-3 items-center ml-3">
                        <input
                        type="checkbox"
                        id="proratedRent"
                        
                        checked={formData.options.proratedRent}
                        onChange={() => handleOptionChange("proratedRent")}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="proratedRent" className="ms-2 text-lg font-medium text-gray-500 dark:text-gray-300">
                        Prorates the first month's rent
                        </label>
                    </div>

                    {/* Conditionally render the shadow box when checkbox is checked */}
                    {formData.options.proratedRent && (
                        <div className="mt-3 p-4 border border-gray-300 rounded-lg shadow-lg bg-white dark:bg-gray-800">
                        <div className="mb-4">
                            <label htmlFor="proratedDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Move's in
                            </label>
                            <input
                            type="date"
                            id="proratedDate"
                            value={formData.proratedDate}
                            onChange={(e) => handleChange("proratedRent", "date", e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="proratedAmount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Prorated Rent
                            </label>
                            <input
                            type="number"
                            id="proratedAmount"
                            placeholder="$0.00"
                            value={formData.proratedAmount}
                            onChange={(e) => handleChange("proratedRent", "amount", e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                        </div>
                    )}
                    </div>
                    <div className="flex flex-col gap-4">
  <label
    htmlFor="petPolicy"
    className="text-lg font-medium text-gray-900 dark:text-gray-300"
  >
    Pet Policy
  </label>

  {/* Checkbox for Deposit */}
  <div className="flex flex-col gap-2 ml-3">
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id="deposit"
        checked={formData.options.petPolicyDetails.deposit}
        onChange={() =>
          setFormData((prev) => ({
            ...prev,
            options: {
              ...prev.options,
              petPolicyDetails: {
                ...prev.options.petPolicyDetails,
                deposit: !prev.options.petPolicyDetails.deposit,
              },
            },
          }))
        }
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="deposit"
        className="text-lg font-medium text-gray-500 dark:text-gray-300"
      >
        Pets are allowed, there is a deposit
      </label>
    </div>
    {formData.options.petPolicyDetails.deposit && (
      <div className="mt-2">
        <label
          htmlFor="depositAmount"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Deposit Amount
        </label>
        <input
          type="number"
          id="depositAmount"
          placeholder="$0.00"
          value={formData.options.petPolicyDetails.depositAmount || ""}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              options: {
                ...prev.options,
                petPolicyDetails: {
                  ...prev.options.petPolicyDetails,
                  depositAmount: e.target.value,
                },
              },
            }))
          }
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
    )}
  </div>

  {/* Checkbox for One-Time Fee */}
  <div className="flex flex-col gap-2 ml-3">
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id="oneTimeFee"
        checked={formData.options.petPolicyDetails.oneTimeFee}
        onChange={() =>
          setFormData((prev) => ({
            ...prev,
            options: {
              ...prev.options,
              petPolicyDetails: {
                ...prev.options.petPolicyDetails,
                oneTimeFee: !prev.options.petPolicyDetails.oneTimeFee,
              },
            },
          }))
        }
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="oneTimeFee"
        className="text-lg font-medium text-gray-500 dark:text-gray-300"
      >
        Pets are allowed, but there is a one-time fee
      </label>
    </div>
    {formData.options.petPolicyDetails.oneTimeFee && (
      <div className="mt-2">
        <label
          htmlFor="oneTimeFeeAmount"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          One-Time Fee Amount
        </label>
        <input
          type="number"
          id="oneTimeFeeAmount"
          placeholder="$0.00"
          value={formData.options.petPolicyDetails.oneTimeFeeAmount || ""}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              options: {
                ...prev.options,
                petPolicyDetails: {
                  ...prev.options.petPolicyDetails,
                  oneTimeFeeAmount: e.target.value,
                },
              },
            }))
          }
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
    )}
  </div>

  {/* Checkbox for Monthly Charge */}
  <div className="flex flex-col gap-2 ml-3">
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id="monthlyCharge"
        placeholder="$0.00"
        checked={formData.options.petPolicyDetails.monthlyCharge}
        onChange={() =>
          setFormData((prev) => ({
            ...prev,
            options: {
              ...prev.options,
              petPolicyDetails: {
                ...prev.options.petPolicyDetails,
                monthlyCharge: !prev.options.petPolicyDetails.monthlyCharge,
              },
            },
          }))
        }
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />

      <label
        htmlFor="monthlyCharge"
        className="text-lg font-medium text-gray-500 dark:text-gray-300"
      >
        Pets are allowed, but there is an additional monthly charge per pet
      </label>
    </div>
    {formData.options.petPolicyDetails.monthlyCharge && (
      <div className="mt-2">
        <label
          htmlFor="monthlyChargeAmount"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Monthly Charge Amount
        </label>
        <input
          type="number"
          id="monthlyChargeAmount"
          placeholder="$0.00"
          value={formData.options.petPolicyDetails.monthlyChargeAmount || ""}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              options: {
                ...prev.options,
                petPolicyDetails: {
                  ...prev.options.petPolicyDetails,
                  monthlyChargeAmount: e.target.value,
                },
              },
            }))
          }
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />

      </div>
    )}

    {/* Checkbox for Maintenance Liability */}
<div className="flex flex-col gap-2 ">
  <div className="flex items-center gap-3">
    <input
      type="checkbox"
      id="maintenanceLiability"
      checked={formData.options.petPolicyDetails.maintenanceLiability}
      
      onChange={() =>
        setFormData((prevState) => ({
          ...prevState,
          options: {
            ...prevState.options,
            petPolicyDetails: {
              ...prevState.options.petPolicyDetails,
              maintenanceLiability: !prevState.options.petPolicyDetails.maintenanceLiability,
            },
          },
        }))
      }
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      htmlFor="maintenanceLiability"
      className="text-lg font-medium text-gray-500 dark:text-gray-300"
    >
      Pets are allowed, and tenants are liable for additional maintenance issues caused by pets
    </label>
  </div>
</div>

{/* Checkbox for No Pets Allowed */}
<div className="flex flex-col gap-2">
  <div className="flex items-center gap-3">
    <input
      type="checkbox"
      id="noPets"
      checked={formData.options.petPolicyDetails.noPets}
      onChange={() =>
        setFormData((prevState) => ({
          ...prevState,
          options: {
            ...prevState.options,
            petPolicyDetails: {
              ...prevState.options.petPolicyDetails,
              noPets: !prevState.options.petPolicyDetails.noPets,
            },
          },
        }))
      }
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      htmlFor="noPets"
      className="text-lg font-medium text-gray-500 dark:text-gray-300"
    >
      Pets are not allowed
    </label>
  </div>
</div>


  </div>
</div>


                

                    <div className="flex flex-col gap-3">
                        <label for="checked-checkbox" class=" text-lg font-medium text-gray-900 dark:text-gray-300 ">Smoking Policy</label>
                        <div className="flex gap-3 items-center ml-3">
                           <input
                                type="checkbox"
                                id="smokingPolicy"
                                checked={formData.options.smokingPolicy}
                                onChange={() => handleOptionChange("smokingPolicy")}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="smokingPolicy" className="ms-2 text-lg font-medium text-gray-500 dark:text-gray-300">
                                Smoking is not allowed in the unit
                            </label>
                        </div>                
                    </div>
                
                {/* Month-to-Month */}

                <div className="flex flex-col gap-3">
                        <label for="checked-checkbox" class=" text-lg font-medium text-gray-900 dark:text-gray-300 ">Month To Month</label>
                        <div className="flex gap-3 items-center ml-3">
                           <input
                                type="checkbox"
                                id="monthToMonth"
                                checked={formData.options.monthToMonth}
                                onChange={() => handleOptionChange("monthToMonth")}
                        
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="smokingPolicy" className="ms-2 text-lg font-medium text-gray-500 dark:text-gray-300">
                                Allow lease to become a month-to-month agreement at the end of lease term
                            </label>
                        </div>                
                    </div>

                    <div className="flex flex-col gap-3">
                        <label for="checked-checkbox" class=" text-lg font-medium text-gray-900 dark:text-gray-300 ">Require Renters Insurance</label>
                        <div className="flex gap-3 items-center ml-3">
                           <input
                                type="checkbox"
                                id="requireRentersInsurance"
                                checked={formData.options.requireRentersInsurance}
                                onChange={() => handleOptionChange("requireRentersInsurance")}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="smokingPolicy" className="ms-2 text-lg font-medium text-gray-500 dark:text-gray-300">
                                Require tenants to provide proof of renters insurance before move-in
                            </label>
                        </div>                
                    </div>


                
                    <div className="flex flex-col gap-3">
                        <label for="checked-checkbox" class=" text-lg font-medium text-gray-900 dark:text-gray-300 ">Require Online Payment Setup</label>
                        <div className="flex gap-3 items-center ml-3">
                           <input
                                 type="checkbox"
                                 id="requireOnlinePaymentSetup"
                                 checked={formData.options.requireOnlinePaymentSetup}
                                 onChange={() => handleOptionChange("requireOnlinePaymentSetup")}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="smokingPolicy" className="ms-2 text-lg font-medium text-gray-500 dark:text-gray-300">
                                Require tenants to provide proof of renters insurance before move-in
                            </label>
                        </div>                
                    </div>
              

                <div className="flex justify-between">
                        <button
                            onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                            className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                        >
                            Back
                        </button>
                        <button
                            onClick={handleNext}
                            className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                        >
                            Next
                        </button>
                    </div>


                {/* Terms of Use */}
                <div className="text-center p-4 text-sm text-gray-600">
                    <p>Your use lease tools is subject to our <span className="text-mainColor underline text-xl cursor-pointer ">Terms of use.</span> Lease templates and their 
                    contents are not guarented, may not be suitable for your circumstances, and should be independently verified with your professional advisors
                    prior to use.
                    </p>
                </div>

            </div>
            );
          case "clauses":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-mainColor">Clauses</h1>
                </div>
                
                
              <Clauses/>
                

                <div className="flex justify-between mt-[50px]">
                        <button
                            onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                            className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                        >
                            Back
                        </button>
                        <button
                            onClick={handleNext}
                            className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                        >
                            Next
                        </button>
                    </div>


                {/* Terms of Use */}
                <div className="text-center p-4 text-sm text-gray-600">
                    <p>Your use lease tools is subject to our <span className="text-mainColor underline text-xl cursor-pointer ">Terms of use.</span> Lease templates and their 
                    contents are not guarented, may not be suitable for your circumstances, and should be independently verified with your professional advisors
                    prior to use.
                    </p>
                </div>
                
              </div>
            );

          case "rules":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-mainColor">Rules</h1>
                  
                  <Rules/>
                

                <div className="flex justify-between mt-[50px]">
                        <button
                            onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                            className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                        >
                            Back
                        </button>
                        <button
                            onClick={handleNext}
                            className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                        >
                            Next
                        </button>
                    </div>


                {/* Terms of Use */}
                <div className="text-center p-4 text-sm text-gray-600">
                    <p>Your use lease tools is subject to our <span className="text-mainColor underline text-xl cursor-pointer ">Terms of use.</span> Lease templates and their 
                    contents are not guarented, may not be suitable for your circumstances, and should be independently verified with your professional advisors
                    prior to use.
                    </p>
                </div>

                </div>
               
               
              </div>
            );
          case "disclosures":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-mainColor">Disclosures</h1>
                </div>
                {/* Disclosures Form */}
                <Disclosures/>
                <div className="flex justify-between mt-[50px]">
                    <button
                      onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                      className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >       
                        Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >
                       Next
                    </button>    
                </div>

                {/* Terms of Use */}
                <div className="text-center p-4 text-sm text-gray-600">
                    <p>Your use lease tools is subject to our <span className="text-mainColor underline text-xl cursor-pointer ">Terms of use.</span> Lease templates and their 
                    contents are not guarented, may not be suitable for your circumstances, and should be independently verified with your professional advisors
                    prior to use.
                    </p>
                </div>

              </div>
            );
          case "attachments":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-mainColor">Attachments</h1>
                  <Attachments/>

                  <div className="flex justify-between mt-[50px]">
                    <button
                      onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                      className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >       
                        Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >
                       Next
                    </button>    
                </div>

                {/* Terms of Use */}
                <div className="text-center p-4 text-sm text-gray-600">
                    <p>Your use lease tools is subject to our <span className="text-mainColor underline text-xl cursor-pointer ">Terms of use.</span> Lease templates and their 
                    contents are not guarented, may not be suitable for your circumstances, and should be independently verified with your professional advisors
                    prior to use.
                    </p>
                </div>

                
                </div>
                {/* Attachments Form */}
              </div>
            );

          case "lessor info":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-gray-700">Your Contact Information</h1>
                  <div className="m-3 flex flex-col gap-4">
                      <div className="shadow-lg p-4 text-xl rounded-lg">If you would like to change the name, phone, or email address associated with this account, please do so from within your <span onClick={handleNavigation} className="underline text-mainColor cursor-pointer font-bold">Account Settings.</span></div>
                      <div className="flex gap-4 w-full justify-between">
                        <div className="w-1/2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" id="name" value={fullName} readOnly class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                        </div>
                        <div className="w-1/2">
                            <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="email" value={email}  readOnly class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />

                            </div>           
                        </div>
                      </div> 
                      <div className="w-full">
                        <label for="phonenumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                        <input type="number" id="email"  value={phonenumber} readOnly class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phone number" required />
                      </div>
                 </div> 

                  <div className="py-5">
                    <h1 className="font-bold text-3xl text-gray-700">Company Info</h1>
                    <div className="m-3 flex flex-col gap-4">
                        <div className="shadow-lg p-4 text-xl rounded-lg">If you prefer not to have your personal name and phone number on the lease, you can enter your company information, which will be used instead. Your personal phone is still required to help us prevent fraud.</div>
          
                        <div className="w-full">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                            <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                        </div>                      
                        <div className="w-full">
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Phone</label>
                          <input type="number" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                        </div>
                    </div> 
                  </div>

                 <div className="py-5 flex flex-col gap-4">
                  <h1 className="font-bold text-3xl text-gray-700">Emergency Line (optional)</h1>
                  <div className="w-full space-y-2">
                      <label for="name" class="block mb-2 text-lg  text-gray-500 dark:text-white">Phone where tenants can reach someone in a maintenance emergency</label>
                      <input type="number" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000-000-0000" required />
                    </div>
                  </div>

                  <div className="py-5 flex flex-col gap-4">
                    <h1 className="font-bold text-3xl text-gray-700">Lessor Address (Home or Business)</h1>
                    <h1 className=" text-xl text-gray-500">A lessor address is required on all leases.</h1>
                    <div className="w-full space-y-2">
                      <label for="name" class="block mb-2 text-lg  text-gray-500 dark:text-white">Start typing the street address</label>
                      <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="start typing ..." required />
                    </div> 
                  </div>


                  <div className="flex justify-between mt-[50px]">
                    <button
                      onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                      className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >       
                        Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="mt-6 bg-mainColor text-white p-2 w-[150px] rounded-lg"
                    >
                      Save & Next
                    </button>    
                  </div>

                   {/* Terms of Use */}
                  <div className="text-center p-4 text-sm text-gray-600">
                      <p>Your use lease tools is subject to our <span className="text-mainColor underline text-xl cursor-pointer ">Terms of use.</span> Lease templates and their 
                      contents are not guarented, may not be suitable for your circumstances, and should be independently verified with your professional advisors
                      prior to use.
                      </p>
                  </div>

                </div>
                </div>
                {/* Lessor Info Form */}
              </div>
            );

          case "terms agreement":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="mb-4 flex flex-col shadow-lg p-4 gap-6">
                 
                  <div className="text-2xl font-semibold text-mainColor">Please agree to the following before creating your lease.</div>
                  <div className="text-xl text-gray-600">By clicking "I agree", you acknowledge that you have read, understand, have had the opportunity to consult with counsel of your choosing, 
                    and agree to the <span className="cursor-pointer text-blue-900 text-2xl font-bold" onClick={handleOpenModal}>provisions</span> stated herein.</div>
                </div>

                 {/* Modal */}
                      {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 ">
                          <div className="bg-white shadow-lg rounded-lg relative w-1/2 max-h-[80vh] overflow-y-scroll py-20">
                            {/* Close Button */}
                            <button
                              className="absolute top-4 right-4 text-gray-600 hover:text-black p-8  text-3xl"
                              onClick={handleCloseModal}
                            >
                              ✖
                            </button>
                            
                            {/* Modal Content */}
                            <div className="p-6">
                              <p className="text-xl">
                                The law firm of Gordon & Rees Scully Mansukhani, LLP (the "Firm") has prepared example residential leases ("Forms") for
                                publication on the Rentals site. These Forms are merely to provide information and examples for self-help purposes. 
                                The Firm strives to keep the Forms accurate, current and up-to-date. However, because the law changes rapidly, 
                                the Firm cannot guarantee that all of the information on the Rentals site is completely current. The law is different from jurisdiction to jurisdiction, and may be subject to interpretation by different courts. The law is a personal matter, and no Forms like the kind published on the Rentals site can fit every circumstance. Furthermore, the Forms are not legal advice and are not guaranteed to be correct, complete or up-to-date. Therefore, if you need legal advice for your specific problem, 
                                you must consult a licensed attorney in your area. Except as part of a Firm Legal Engagement (defined below), we do not review any information you input on the Forms for legal accuracy or sufficiency, draw legal conclusions, provide opinions about your selection of forms, or apply the law to the facts of your situation. If you need legal advice for a specific problem, you should consult with a licensed attorney. Use of the Forms or any other legal information published on the Rentals site is not a substitute for legal advice from a qualified attorney licensed to practice in an appropriate jurisdiction. Communications between you, the Firm, and/or Rentals may not be protected as privilege communications under the attorney-client privilege or work product doctrine. Also, if you submit questions to the Firm or Rentals, the communications between you and the individual who answers your question may not be protected as privileged communications under the attorney-client privilege or work product doctrine. Your use of the Forms does not create an attorney-client relationship between you and Gordon & Rees Scully Mansukhani, LLP, or between you and any Gordon & Rees Scully Mansukhani, LLP employee or representative, unless you specifically enter into a Legal Services Agreement executed by an authorized partner of the Firm. Unless you are otherwise represented by an attorney, including any external attorney, you represent yourself in any legal matter you undertake through use of our Forms.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}


                    <div className="flex justify-between mt-[30px]">
                    <button
                      onClick={() => setActiveItem(menuItems[menuItems.indexOf(activeItem) - 1])}
                      className="mt-6 bg-mainColor text-white p-2 w-[100px] rounded-lg"
                    >       
                        Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="mt-6 bg-mainColor text-white p-2 w-[150px] rounded-lg"
                    >
                      I Agree
                    </button>    
                  </div>
              </div>
            );
          default:
            return <div>Select an option to begin</div>;
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-100">
     
      <div className="bg-mainColor  h-[60px] text-white px-6 py-4 flex items-center">
        <button
          className="mr-4 text-xl"
          onClick={() => navigate(`/lease-form/${propertyID}`)}
        >
          ←
        </button>
        {property ? (
          <div className="max-w-screen-lg flex gap-5 text-white p-4 sm:flex-row  space-y-4 sm:space-y-0">
            
              <h2 className="text-lg sm:text-xl font-bold">{property.propertyType?.label}</h2>
    
              <p className="text-white">
                {property.doorNumber}, {property.streetName}, {property.landMark}
              </p>
              <p className="text-white">
                {property.selectedCity?.name}, {property.selectedState?.name}, {property.selectedCountry?.name}
              </p>
            
          </div>
        ) : (
          <p className="text-center">Loading property details...</p>
        )}
      </div>

      {/* Main Content */}
      <div className="w-[1200px] mx-auto flex m-[20px]">
        <div className="flex flex-grow">
          {/* Side Menu */}
          <div className="w-1/4 bg-white border-r p-4">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className={`p-2 cursor-pointer rounded-lg ${
                    activeItem === item
                      ? "bg-mainColor text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                  onClick={() => setActiveItem(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form Content */}
          <div className="w-3/4 p-6">{renderFormContent()}</div>
        </div>
      </div>

     
    </div>
  );
};

export default LeaseCreateForm;
