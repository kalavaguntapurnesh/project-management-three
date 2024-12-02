import React, { useState } from 'react';
import { FaUpload } from "react-icons/fa"; 


const Disclosures = () => {
  const [isAware, setIsAware] = useState(false);
  const [isLead, setIsLead] = useState(false);
  const [isMold, setIsMold] = useState(false); 
  const [bedBugIssue, setBedBugIssue] = useState(""); // Track dropdown selection
  const [otherBedBugDetails, setOtherBedBugDetails] = useState(""); // Track other details

  const handleCheckboxChange = (event) => {
    const { name, value } = event.target;
    const isYes = value === "yes";


    if (name === "habitability") setIsAware(isYes);
    if (name === "leadPaint") setIsLead(isYes);
    if (name === "moldIssue") setIsMold(isYes); 

  };

  const handleDropdownChange = (event) => {
    setBedBugIssue(event.target.value);
    if (event.target.value === "noIssues") {
      setOtherBedBugDetails(""); // Clear the textarea when "noIssues" is selected
    }
  };

  const handleOtherDetailsChange = (event) => {
    setOtherBedBugDetails(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Conditions Affecting Habitability */}
      <div className="flex flex-col m-2 space-y-2">
        <h1 className="text-blue-900 font-semibold">Conditions Affecting Habitability</h1>
        <p>
          As the Lessor, you may be required to disclose any code violations, code enforcement litigation and/or compliance board proceedings during the previous 12 months for the residence and common area and any notice of intent to terminate utility service.
        </p>
        <div className="flex flex-col space-y-4 ml-3">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="habitabilityYes"
              name="habitability"
              value="yes"
              className="cursor-pointer"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="habitabilityYes" className="text-gray-700 cursor-pointer">
              Yes, I'm aware of conditions affecting habitability regarding this property
            </label>
          </div>
          {isAware && (
            <textarea
              placeholder="Please explain"
              className="mt-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-3"
            ></textarea>
          )}
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="habitabilityNo"
              name="habitability"
              value="no"
              className="cursor-pointer"
              defaultChecked
              onChange={handleCheckboxChange}
            />
            <label htmlFor="habitabilityNo" className="text-gray-700 cursor-pointer">
              No, I'm not aware of any conditions affecting habitability regarding this property
            </label>
          </div>
        </div>
      </div>

      {/* Lead Paint Disclosure */}
      <div className="flex flex-col m-2 space-y-2">
        <h1 className="text-blue-900 font-semibold">Lead Paint Disclosure</h1>
        <p>
          Lessors must disclose the presence of known lead-based paint and/or lead-based paint hazards in the dwelling. Lessees must also receive a federally approved pamphlet on lead poisoning prevention. Are you aware of any lead-based paint or hazards in the property?
        </p>
        <div className="flex flex-col space-y-4 ml-3">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="leadYes"
              name="leadPaint"
              value="yes"
              className="cursor-pointer"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="leadYes" className="text-gray-700 cursor-pointer">
              Yes, I'm aware of lead issues regarding this property
            </label>
          </div>
          {isLead && (
            <textarea
              placeholder="Please explain"
              className="mt-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-3"
            ></textarea>
          )}
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="leadNo"
              name="leadPaint"
              value="no"
              className="cursor-pointer"
              defaultChecked
              onChange={handleCheckboxChange}
            />
            <label htmlFor="leadNo" className="text-gray-700 cursor-pointer">
              No, I'm not aware of lead issues regarding this property
            </label>
          </div>
        </div>
      </div>

      {/* Mold Issue Disclouse */}

      <div className="flex flex-col m-2 space-y-2">
        <h1 className="text-blue-900 font-semibold">Mold Disclosure</h1>
        <p>Lessors must disclose the presence of known mold hazards in the property.</p>
        <div className="flex flex-col space-y-4 ml-3">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="moldYes"
              name="moldIssue"
              value="yes"
              className="cursor-pointer"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="moldYes" className="text-gray-700 cursor-pointer">
              Yes, I'm aware of mold issues issues regarding this property
            </label>
          </div>
          {isMold && (
            <textarea
              placeholder="Please explain"
              className="mt-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-3"
            ></textarea>
          )}
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="moldNo"
              name="moldIssue"
              value="no"
              className="cursor-pointer"
              defaultChecked
              onChange={handleCheckboxChange}
            />
            <label htmlFor="moldNo" className="text-gray-700 cursor-pointer">
            No, I'm not aware of mold issues issues regarding this property
            </label>
          </div>
        </div>
      </div>

      {/* Bed Bug Disclosure */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-blue-900 font-semibold">Bed Bug Disclosure</h1>
        <p>
          Owner/managing agents of residential rental property must furnish to each tenant signing
          a vacancy lease a notice that sets forth the property’s bedbug infestation history.
        </p>
        <div className="flex flex-col space-y-4 ml-3">
          <label htmlFor="bedBugDisclosure" className="text-gray-700 font-medium">
            Please choose from the following:
          </label>
          <select
            id="bedBugDisclosure"
            value={bedBugIssue}
            onChange={handleDropdownChange}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="noIssues">No known bed bug issues</option>
            <option value="building">Bed bugs found in the building</option>
            <option value="apartment">Bed bugs found in the apartment</option>
            <option value="other">Other bed bug issues</option>
          </select>
          {/* Show textarea only for specific selections */}
          {(bedBugIssue === "building" ||
            bedBugIssue === "apartment" ||
            bedBugIssue === "other") && (
            <textarea
              placeholder="Please explain the issue"
              value={otherBedBugDetails}
              onChange={handleOtherDetailsChange}
              className="mt-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          )}
        </div>
      </div>


    {/* File Upload Section */}
    
      <div className="flex flex-col m-2 space-y-2">
        <h1 className="text-blue-900 font-semibold">Utility Disclosure</h1>
        <p>
          You may be required to disclose that the cost of heating shall be the responsibility of the tenant, and the projected average monthly cost of utility service from the utility providing the primary source of heat based on energy consumption during the most recent annual period of continuous occupancy by one or more prior occupants, current or expected rates and normalized weather
        </p>
        <p>
          You can request a formal utility disclosure from your service provider, or upload a bill for this purpose:
        </p>
        
        <div className="flex items-center justify space-y-4">
        <input
          type="file"
          placeholder="Utility Disclosure"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>
        
      </div>


    </div>
  );
};

export default Disclosures;
