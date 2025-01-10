import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdCreateNewFolder } from "react-icons/md";
import { FaRegWindowRestore } from "react-icons/fa";
import { FaSignature } from "react-icons/fa6";


const Lease = () => {
  const { propertyID } = useParams();
  const [property, setProperty] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [leases, setLeases] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const getPropertyDetails = async () => {
    try {
      const response = await axios.post(
        // "http://localhost:8080/api/v1/getLeaseProperty",
        "https://rentals-backend-three.onrender.com/api/v1/getLeaseProperty",
        { propertyId: propertyID }
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

  const handleUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('leaseFile', file);

    try {
      const response = await axios.post(
        // 'http://localhost:8080/api/v1/uploadLeaseAgreement',
        'https://rentals-backend-three.onrender.com/api/v1/uploadLeaseAgreement',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Upload response:', response);

      if (response.data) {
        const newFile = response.data.data;
        // setUploadedFiles((prevFiles) => [...prevFiles, newFile]);
        setLeases((prevLeases) => [...prevLeases, newFile.filename]);
      } else {
        alert('Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    }
  };

  useEffect(() => {
    const fetchUploadedFiles = async () => {
      try {
        // const response = await axios.get('http://localhost:8080/api/v1/getLeaseFiles');
        const response = await axios.get('https://rentals-backend-three.onrender.com/api/v1/getLeaseFiles');
        if (response.data && response.data.success) {
          setUploadedFiles(response.data.data);
        } else {
          console.error('Failed to fetch uploaded files');
        }
      } catch (error) {
        console.error('Error fetching uploaded files:', error);
      }
    };
  
    // getPropertyDetails();
    fetchUploadedFiles();
  }, [propertyID]);
  

  console.log("uploaded files: ", uploadedFiles);
  useEffect(() => {
    getPropertyDetails();
  }, [propertyID]);

  return (
    <Layout>
      <div className="w-full h-full p-4 sm:p-6">
        {/* Property Details Header */}
        {property ? (
          <div className="max-w-screen-lg mx-auto p-4 border-b border-gray-300 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                {property.propertyType?.label}
              </h2>
            </div>
            <div>
              <p className="text-gray-700">
                {property.doorNumber}, {property.streetName}, {property.landMark}
              </p>
              <p className="text-gray-700">
                {property.selectedCity?.name}, {property.selectedState?.name},{" "}
                {property.selectedCountry?.name}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">Loading property details...</p>
        )}

        {/* Lease and Set Up Section */}
        <div className="max-w-screen-lg mx-auto mt-6">
          <div className="flex justify-between items-center mb-4 relative">
            <h2 className="text-xl font-semibold">Leases</h2>

            {/* Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="px-4 py-2 bg-mainColor text-white rounded-lg"
              >
                Set up Lease ▼
              </button>

              {/* Dropdown Options */}
              {dropdownOpen && (
                <div className="absolute top-full mt-2 lg:w-60 w-48 bg-white border space-y-[20px] rounded-lg shadow-md z-10">
                  {/* File Upload */}
                  <label
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 cursor-pointer mt-6"
                  >
                    <input
                      type="file"
                      onChange={handleUpload}
                      className="hidden"
                    />
                    <div className="flex items-center gap-3">
                      <span className="text-xl">
                        <MdOutlineFileUpload />
                      </span>
                      Upload Lease
                    </div>
                  </label>

                  {/* Automatically submit the file */}
                  {file && (
                    <button
                      onClick={handleSubmit}
                      className="flex items-center mt-4 px-4 py-2 bg-mainColor  text-white rounded-lg"
                    >
                      Submit Lease
                    </button>
                  )}

                  {/* Other buttons */}
                  <button
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => navigate(`/lease-form/${propertyID}/create-form`)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">
                        <MdCreateNewFolder />
                      </span>
                      Create Lease
                    </div>
                  </button>

                  <button
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => console.log("Request e-signatures clicked")}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">
                        <FaSignature />
                      </span>
                      Request e-signatures
                    </div>
                  </button>

                  <button
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => console.log("Store Signed Lease clicked")}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xl">
                        <FaRegWindowRestore />
                      </span>
                      Store Signed Lease
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Uploaded Leases Section */}
        <div className="max-w-screen-lg mx-auto mt-10">
          <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">
            Uploaded Leases
          </h3>
          {leases.length > 0 ? (
            <ul className="list-disc pl-5 mt-4 ">
              {uploadedFiles.map((file, index) => (
                <li key={index} className="text-gray-800 flex items-center justify-between mb-2">
                  <span>{file.filename}</span>
                  <div className="flex gap-4">
                    <a
                      href={`http://localhost:8080/${file.filePath}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 p-3 bg-blue-900 text-white w-[120px] text-center rounded-lg"
                    >
                      View
                    </a>
                    <a
                      href={`http://localhost:8080/${file.filePath}`}
                      download={file.filename}
                      className="text-blue-600  p-3 bg-blue-900 text-white w-[120px] text-center rounded-lg"
                    >
                      Download
                    </a>
                  </div>
                    

                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 sm:w-28 sm:h-28"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41JwJpJrZjMH0dQPIbqhRt6oYNhAdHEneow&s"
                alt="No leases"
              />
              <p className="text-gray-500 mt-2">No leases added yet.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Lease;
