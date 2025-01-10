import Layout from "./../components/Layout";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Col, Form, Input, Row, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Swal from "sweetalert2";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./PhoneInput.css";

const AddProperties = () => {
  const { user } = useSelector((state) => state.user);
  const [customer, setCustomer] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [doorNumber, setDoorNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [landMark, setLandMark] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [propertyType, setPropertyType] = useState("Male");
  const [countryCode, setCountryCode] = useState("");
  const [propertyId, setPropertyId] = useState(null);

  const options = [
    { value: "Apartment", label: "Apartment" },
    { value: "Condominium", label: "Condominium" },
    { value: "Single House", label: "Single House" },
    { value: "Other", label: "Other" },
  ];

  const propertyState = [
    { value: "Vacant", label: "Vacant" },
    { value: "Contract Inprogress", label: "Contract Inprogress" },
    { value: "Leased", label: "Leased" },
  ]

  const propertyStatus = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ]

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setCountryCode(country.isoCode);
  };

  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        // "http://localhost:8080/api/v1/addProperty",
        "https://rma1-backend-1.onrender.com/api/v1/addProperty",
        {
          ...values,
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
  
      if (res.status === 201) {
        const newPropertyId = res.data._id;
        setPropertyId(newPropertyId); 
        console.log("Response data:", res.data);
        console.log("New property ID:", newPropertyId); 
        console.log("Property ID (state) before render:", propertyId); 
  
        Swal.fire({
          title: "Property Added Successfully",
          icon: "success",
          confirmButtonText: "Add Lease Agreement",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(`/addLeaseAgreement/${newPropertyId}`); 
          }
        });
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };
  
 
  useEffect(() => {
    if (propertyId) {
      console.log("Updated property ID in state:", propertyId);
    }
  }, [propertyId]);
  
  return (
    <div>
      <div>
        <Layout>
          <div>
            <div>
              <h1 className="pb-3 font-semibold leading-normal tracking-normal text-2xl text-center">
                Add a Property
              </h1>
            </div>

            <div className="pt-8">
              <div className=" grid grid-cols-1 lg:grid-cols-4 gap-3">
                <div className="col-span-4">
                  <Form
                    layout="vertical"
                    onFinish={handleFinish}
                    initialValues={{
                      ...customer,
                    }}
                  >
                    <Row gutter={20}>
                      <Col xs={24} md={24} lg={8}>
                        <Form.Item
                          label="Door No."
                          name="doorNumber"
                          required
                          rules={[{ required: true }]}
                          className="font-medium"
                        >
                          <Input
                            type="text"
                            placeholder="door no"
                            className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={24} lg={8}>
                        <Form.Item
                          label="Street Name"
                          name="streetName"
                          required
                          rules={[{ required: true }]}
                          className="font-medium"
                        >
                          <Input
                            type="text"
                            placeholder="Street Name"
                            className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={24} lg={8}>
                        <Form.Item
                          label="Land Mark"
                          name="landMark"
                          required
                          rules={[{ required: true }]}
                          className="font-medium"
                        >
                          <Input
                            type="text"
                            placeholder="Nearby Land Mark"
                            className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={24} lg={8}>
                        <Form.Item
                          label="Property Type"
                          name="propertyType"
                          required
                          rules={[{ required: true }]}
                          className="font-medium"
                        >
                          <Select
                            onChange={setPropertyType}
                            label="Age"
                            options={options}
                          ></Select>
                        </Form.Item>
                      </Col>

                     
                      <Col xs={24} md={24} lg={8}>
                        <Form.Item
                          label="Property State"
                          name="propertyState"
                          required
                          rules={[{ required: true }]}
                          className="font-medium"
                        >
                          <Select
                            onChange={setPropertyType}
                            label="Age"
                            options={propertyState}
                          ></Select>
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={24} lg={8}>
                        <Form.Item
                          label="Has a Repair"
                          name="propertyStatus"
                          required
                          rules={[{ required: true }]}
                          className="font-medium"
                        >
                          <Select
                            onChange={setPropertyType}
                            label="Age"
                            options={propertyStatus}
                          ></Select>
                        </Form.Item>
                      </Col>


                      <Col xs={24} md={24} lg={8}>
                        <Form.Item
                          label="Country"
                          name="selectedCountry"
                          required
                          rules={[{ required: true }]}
                          className="font-medium"
                        >
                          <Select
                            options={Country.getAllCountries()}
                            getOptionLabel={(options) => {
                              return options["name"];
                            }}
                            getOptionValue={(options) => {
                              return options["name"];
                            }}
                            value={selectedCountry}
                            onChange={(item) => {
                              setSelectedCountry(item);
                            }}
                          />
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={24} lg={8}>
                        <Form.Item
                          label="State"
                          name="selectedState"
                          required
                          rules={[{ required: true }]}
                          className="font-medium"
                        >
                          <Select
                            options={State?.getStatesOfCountry(
                              selectedCountry?.isoCode
                            )}
                            getOptionLabel={(options) => {
                              return options["name"];
                            }}
                            getOptionValue={(options) => {
                              return options["name"];
                            }}
                            value={selectedState}
                            onChange={(item) => {
                              setSelectedState(item);
                            }}
                          />
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={24} lg={8}>
                        <Form.Item
                          label="City"
                          name="selectedCity"
                          required
                          rules={[{ required: true }]}
                          className="font-medium"
                        >
                          <Select
                            options={City.getCitiesOfState(
                              selectedState?.countryCode,
                              selectedState?.isoCode
                            )}
                            getOptionLabel={(options) => {
                              return options["name"];
                            }}
                            getOptionValue={(options) => {
                              return options["name"];
                            }}
                            value={selectedCity}
                            onChange={(item) => {
                              setSelectedCity(item);
                            }}
                          />
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={24} lg={8}>
                        <Form.Item
                          label="Phone No."
                          name="phoneNumber"
                          required
                          rules={[{ required: true }]}
                          className="font-medium"
                        >
                          <PhoneInput
                            country={countryCode}
                            value={phoneNumber}
                            onChange={(phone) => setPhoneNumber(phone)}
                            inputProps={{
                              name: "phone",
                              required: true,
                              autoFocus: true,
                            }}
                            // inputClass="w-full p-3 text-base" // Tailwind classes to increase size
                            containerClass="custom-phone-input"
                            inputClass="phone-input-field"
                            // buttonClass="phone-input-button"
                          />
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={24} lg={8}>
                        <Form.Item
                          label="Zip / Postal Code"
                          name="zipCode"
                          required
                          rules={[{ required: true }]}
                          className="font-medium"
                        >
                          <Input
                            type="text"
                            className="p-2"
                            // pattern="[0-9]{3,5}(?:-[0-9]{3,4})?$"
                            title="12345-6789 or 517-126"
                            placeholder="12345-6789 or 517-126"
                          />
                        </Form.Item>
                      </Col>

                    </Row>

                    <div className=" flex justify-center items-center">
                      <Col xs={24} md={24} lg={8} className="my-8">
                        <button
                          class="hover:text-white transition duration-1000 font-semibold text-white bg-mainColor py-3 px-16 rounded-md"
                          type="submit"
                        >
                          Add Property
                        </button>
                      </Col>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default AddProperties;
