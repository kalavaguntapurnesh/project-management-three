import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { FaRegEdit } from "react-icons/fa";

const LeaseCreateForm = () => {
  const { propertyID } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);

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
                
                <div className="shadow-md p-2 mb-2 mt-2 flex flex-col gap-4 bg-gray-100 rounded-lg">
                    <div className="mb-4 flex justify-between">
                        <label className="block font-bold text-2xl text-gray-700">1. Rent</label>
                        <span className="text-xl cursor-pointer"><FaRegEdit /></span>
                    </div>
                    <p className="">The Lessee shall pay to the Lessor or Lessor's authorized agent, at the address set forth above, 
                       or through Avail, or as changed by written notice to the Lessee, as rent for the Premises, parking, 
                       or otherwise the sum as stated above. Rent is due and payable on the first day of each calendar month, 
                       in advance. The timely payment of each installment of rent is deemed to be of the essence of this Lease. 
                       The failure to pay rent when due may result in the Lessor bringing an action in court to recover unpaid 
                       rent and/or possession.</p>  
                     
                </div>

                <div className="shadow-md p-2 mb-2 mt-2 flex flex-col gap-2 bg-gray-100 rounded-lg">
                    <div className="mb-4 flex justify-between">
                        <label className="block font-bold text-2xl text-gray-700">2. Jointly and Severally Liable</label>
                        <span className="text-xl cursor-pointer"><FaRegEdit /></span>
                    </div>
                    <p className="text-gray-600">Each Lessee is jointly and severally liable for the payment of rent and performance of all other terms of this agreement.</p>  
                    
                </div>

                <div className="shadow-md p-2 mb-2 mt-2 flex flex-col gap-2 bg-gray-100 rounded-lg">
                    <div className="mb-4 flex justify-between">
                        <label className="block font-bold text-2xl text-gray-700">3. Late Changes</label>
                        <span className="text-xl cursor-pointer"><FaRegEdit /></span>
                    </div>
                    <p className="text-gray-600">Rent received by Lessor later than the 5th day after the due date, as specified in Paragraph 1 above, will incur a late charge. 
                        The late charge shall be equal to . If Lessee mails rent to Lessor, the late charge will apply if the rent is received later than the 5th day of the month,
                         regardless of the date Lessee mailed such rent payment. If a payment of rent is made by personal check which is later dishonored by the Lessee's bank,
                          Lessee shall be assessed any bank charges incurred by Lessor as a result of such dishonored check, in addition to the rent and late charge due on the 
                          payment of rent. The Lessor, at the Lessor's sole discretion, may waive the late charges.</p>  
                    
                </div>

                <div className="shadow-md p-2 mb-2 mt-2 flex flex-col gap-2 bg-gray-100 rounded-lg">
                    <div className="mb-4 flex justify-between">
                        <label className="block font-bold text-2xl text-gray-700">4. Security Deposit</label>
                        <span className="text-xl cursor-pointer"><FaRegEdit /></span>
                    </div>
                    <p className="text-gray-600">Lessee has deposited with Lessor, the sum set forth above as a security deposit to be held by the Lessor in accordance with State 
                        or local law or ordinance to secure the faithful performance by the Lessee of all of the provisions contained in this lease. If Lessee performs all of the 
                        obligations as provided in this lease and pays all sums due Lessor, then Lessor, after the Lessee has surrendered possession of the Premises and delivered 
                        the keys thereto to Lessor, shall refund said deposit to Lessee, including interest as provided by law. If Lessee has failed to perform or comply with any 
                        of the provisions of the lease, then Lessor may apply all or any part of the security deposit in payment of any sums due from Lessee to Lessor, or to pay 
                        for repair of any damages caused by Lessee, Lessee's co-occupants or guests. The security deposit shall not be treated as advance payment of rent, and the 
                        Lessee shall not apply the security deposit as rent during the term of the lease unless Lessee obtains written permission from Lessor to do so. </p>  
                    
                </div>

                <div className="shadow-md p-2 mb-2 mt-2 flex flex-col gap-2 bg-gray-100 rounded-lg">
                    <div className="mb-4 flex justify-between">
                        <label className="block font-bold text-2xl text-gray-700">5. Possession</label>
                        <span className="text-xl cursor-pointer"><FaRegEdit /></span>
                    </div>
                    <p className="text-gray-600">If Lessor cannot deliver possession of the Premises at the commencement of the lease term, the rent shall be abated until 
                        the Premises are available for occupancy by Lessee. If Lessor does not notify Lessee that the Premises is ready for Lessee's occupancy within 10 days
                         after the scheduled commencement date of the Term as set forth above, the Lessee may terminate this lease upon written notice to Lessor. Lessor shall
                          not be liable to Lessee for any consequential damages to Lessee arising as a result of Lessor's inability to give Lessee possession of the Premises 
                          at the commencement of the lease term. </p>  
                    
                </div>

                <div className="shadow-md p-2 mb-2 mt-2 flex flex-col gap-2 bg-gray-100 rounded-lg">
                    <div className="mb-4 flex justify-between">
                        <label className="block font-bold text-2xl text-gray-700">6. Condition of Premises</label>
                        <span className="text-xl cursor-pointer"><FaRegEdit /></span>
                    </div>
                    <p className="text-gray-600">Lessee has examined the Premises prior to accepting the same and prior to the execution of this lease, and is satisfied with the 
                        physical condition thereof, including but not limited to the heating, plumbing and smoke detectors. Lessee's acceptance of possession shall constitute 
                        conclusive evidence of Lessee's receipt of the Premises in good order and repair as of the commencement of the lease term. Lessor or his agent has made 
                        no promises as to condition or repair to Lessee, unless they are expressed in this lease or a rider attached hereto signed by Lessee and Lessor or his agent, 
                        and no promises to decorate, alter or repair the Premises have been made by Lessor or his agent, unless expressed herein.</p>  
                    
                </div>

                <div className="shadow-md p-2 mb-2 mt-2 flex flex-col gap-2 bg-gray-100 rounded-lg">
                    <div className="mb-4 flex justify-between">
                        <label className="block font-bold text-2xl text-gray-700">7. Limitation of Liability</label>
                        <span className="text-xl cursor-pointer"><FaRegEdit /></span>
                    </div>
                    <p className="text-gray-600">Except as provided by state or local law or ordinance, Lessor shall not be liable for any damage or injury caused by the negligence
                         or acts of other Lessees, guest, or others at the building. </p>  
                    
                </div>

                <div className="shadow-md p-2 mb-2 mt-2 flex flex-col gap-2 bg-gray-100 rounded-lg">
                    <div className="mb-4 flex justify-between">
                        <label className="block font-bold text-2xl text-gray-700">8. Lessee to Maintain</label>
                        <span className="text-xl cursor-pointer"><FaRegEdit /></span>
                    </div>
                    <p className="text-gray-600">Lessee shall keep the Premises and the fixtures and appliances therein in a clean and healthy condition, and in good working order, 
                        and in accordance with any and all ordinances applicable to the tenancy, at Lessee's own expense, and upon the termination of this lease, for any reason, 
                        Lessee shall return the Premises to Lessor in as good a condition of cleanliness and repair as at the commencement of this lease, reasonable wear and tear 
                        excepted. Lessee shall make all necessary repairs to the Premises whenever damage has occurred or repairs are required due to Lessee's conduct or neglect.
                        Lessee shall replace all broken glass and fixtures and shall maintain all smoke and carbon monoxide detectors in good condition at all times, including 
                        replacing spent batteries as necessary. Upon Lessee vacating the Premises, if the Premises are not clean and in good repair, Lessor or his agent may replace
                        the Premises in the same condition of repair and cleanliness as existed at the commencement of the lease term. Lessee agrees to pay Lessor for all expenses 
                        incurred by Lessor in replacing the Premises in that condition. Lessee shall not cause or permit any waste, misuse or neglect to occur to the water, gas,
                        utilities or any other portion of the Premises. </p>  
                    
                </div>

                <div className="shadow-md p-2 mb-2 mt-2 flex flex-col gap-2 bg-gray-100 rounded-lg">
                    <div className="mb-4 flex justify-between">
                        <label className="block font-bold text-2xl text-gray-700">9. Use of Premises</label>
                        <span className="text-xl cursor-pointer"><FaRegEdit /></span>
                    </div>
                    <p className="text-gray-600">The Premises shall be occupied for residential purposes only, and only by the persons disclosed in this lease and on the Application
                         for Lease submitted by Lessee in connection with the renting of the Premises. Lessee shall not engage in any activity, which will increase the rate of insurance 
                         on the property. Lessee shall not allow trash to accumulate in the common areas of the Premises or allow objects to be thrown from windows. Lessee shall not hang 
                         objects out of windows or place objects on windowsills or ledges, which may fall and injure persons below. Except for animals permitted under NY Civil Rights 
                         Law § 47-b, Lessee shall not keep any pet in the Premises without written permission being first obtained from Lessor. Lessee shall not use porches for cooking,
                         sleeping or storage of furniture, bicycles or other items of personal property. In no case shall Lessee allow porches or decks to be overloaded or occupied by
                         more people than would be reasonably safe based on the condition of such porch or deck.</p>  
                    
                </div>

                <div className="shadow-md p-2 mb-2 mt-2 flex flex-col gap-2 bg-gray-100 rounded-lg">
                    <div className="mb-4 flex justify-between">
                        <label className="block font-bold text-2xl text-gray-700">10. Appliances</label>
                        <span className="text-xl cursor-pointer"><FaRegEdit /></span>
                    </div>
                    <p className="text-gray-600">Lessee shall not install any air conditioning, heating or cooling equipment or dishwashers or clothes washers or dryers or other appliances 
                        in any portion of the building or Premises occupied by Lessee without first obtaining Lessor's written permission to do so. All such appliances installed by Lessee 
                        shall be maintained in good working order by Lessee and removed by Lessee at the expiration of the term of the lease. Any damage caused by appliances installed by 
                        Lessee shall be the responsibility of Lessee and Lessee shall reimburse Lessor for the cost of repair of any damage caused by such appliances.</p>  
                    
                </div>

                <div className="shadow-md p-2 mb-2 mt-2 flex flex-col gap-2 bg-gray-100 rounded-lg">
                    <div className="mb-4 flex justify-between">
                        <label className="block font-bold text-2xl text-gray-700">11. Disturbance</label>
                        <span className="text-xl cursor-pointer"><FaRegEdit /></span>
                    </div>
                    <p className="text-gray-600">Lessee agrees not to play televisions, radios or musical instruments or musical playback equipment in a manner which disturbs other tenants, 
                        and shall maintain the volume of such equipment at reasonable levels. In addition, Lessee agrees to limit playing of such equipment between the hours of 10:00 p.m. 
                        and 7:00 a.m. to a volume that cannot be heard by persons outside of the Premises.</p>  
                    
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
              </div>
            );
          case "attachments":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-mainColor">Attachments</h1>
                </div>
                {/* Attachments Form */}
              </div>
            );
          case "lessor info":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-mainColor">Lessor Info</h1>
                </div>
                {/* Lessor Info Form */}
              </div>
            );
          case "terms agreement":
            return (
              <div className="shadow-box p-6 border rounded-lg bg-white">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-mainColor">Terms Agreement</h1>
                </div>
                {/* Terms Agreement Form */}
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
