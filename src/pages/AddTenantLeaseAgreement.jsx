import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form, Input, Select, Checkbox, message } from "antd";
import Swal from "sweetalert2";
import Layout from "../components/Layout";
import axios from "axios";
import { useDetails } from "../AppContext";
import LandlordTenants from "./LandlordTenants";
import { useDispatch } from "react-redux";
import { setTenantDetails, setLandlordDetails } from "../redux/features/tenantLandlordSlice";

const AddTenantLeaseAgreement = () => {
  const { setDetails } = useDetails(); 
  const { user } = useSelector((state) => state.user);
  const { propertyID, customerID, landlordLeaseAgreementID } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [tenantDetails, setTenantDetails] = useState([]);

  const handleLeaseSubmit = async (values) => {
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/addTenantLeaseAgreement?landlordLeaseAgreementId=${landlordLeaseAgreementID}&propertyId=${propertyID}&tenantId=${customerID}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.status === 201) {
        Swal.fire({
          title: "Lease Agreement Accepted Successfully & Now you can go to the payment page",
          icon: "success",
        });

        // Fetch tenant and landlord details
        const [tenantRes, landlordRes] = await Promise.all([
          axios.post(
            `http://localhost:8080/api/v1/updateTenantDetailsInLandlordDashboard`,
            { propertyId: propertyID, tenantId: customerID },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          ),
          axios.post(
            `http://localhost:8080/api/v1/getLandlordDetailsInTenantDashboard`,
            { propertyId: propertyID },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          ),
        ]);

        console.log("tenant details: ", tenantRes);
        console.log("landlord details: ", landlordRes);
        // Update context state method

        // setDetails((prevDetails) => ({
        //   ...prevDetails,  // Spread previous state to keep other properties intact
        //   tenantDetails: tenantRes.data,
        //   landlordDetails: landlordRes.data,
        // }));

        
      // local storage method

        // localStorage.setItem('tenantDetails', JSON.stringify(tenantRes.data));
        // localStorage.setItem('landlordDetails', JSON.stringify(landlordRes.data));
      
        // redux

            // console.log("Dispatching tenant details:", tenantRes.data);
            // dispatch(setTenantDetails(tenantRes.data));
            // console.log("Dispatching landlord details:", landlordRes.data);
            // dispatch(setLandlordDetails(landlordRes.data));

         console.log(tenantRes.data);
         console.log(landlordRes.data);
      

        // setTenantDetails(tenantRes);

        console.log("in side state varible" , tenantDetails);

        navigate(`/dashboard/${user?._id}`);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error("Error while creating lease agreement:", error);
      message.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="container mx-auto p-6 max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Accept Lease Agreement Form
        </h2>
        <Form layout="vertical" form={form} onFinish={handleLeaseSubmit}>
          <Form.Item
            label="Acceptance Status"
            name="AcceptanceStatus"
            rules={[{ required: true, message: "Please select Acceptance Status" }]}
          >
            <Select placeholder="Select Status">
              <Select.Option value="Accept">Accept</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="leaseTerms"
            valuePropName="checked"
            rules={[{ required: true, message: "Please agree to the lease terms" }]}
          >
            <Checkbox>
              Agree to lease terms (accepting all lease terms given by the landlord)
            </Checkbox>
          </Form.Item>

          <Form.Item
            label="Signature"
            name="Signature"
            rules={[{ required: true, message: "Please enter your signature" }]}
          >
            <Input placeholder="Enter Signature" />
          </Form.Item>

          <div className="flex justify-center mt-4">
            <button className="bg-mainColor text-white py-2 px-8 rounded-md" type="submit">
              Submit Lease Agreement
            </button>
          </div>
        </Form>

    
      </div>
    </Layout>
  );
};

export default AddTenantLeaseAgreement;
