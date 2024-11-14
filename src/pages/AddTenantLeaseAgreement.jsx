import Layout from "../components/Layout";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Form, Input, Row, message,Select, Checkbox } from "antd";
import Swal from "sweetalert2";

const AddTenantLeaseAgreement = () => {
  const { user } = useSelector((state) => state.user);
  const { propertyID, customerID, landlordLeaseAgreementID } = useParams(); 
  const navigate = useNavigate(); 
  const [form] = Form.useForm();

  console.log("in tenanat form propertyId",propertyID);
  console.log("in tenanat form tenantID ",customerID);
  console.log("in tenanat form landlordLeaseAgreementID ",landlordLeaseAgreementID);
  const handleLeaseSubmit = async (values) => {
    try {
      const res = await axios.post(
        
        `http://localhost:8080/api/v1/addTenantLeaseAgreement?landlordLeaseAgreementId=${landlordLeaseAgreementID}&propertyId=${propertyID}&tenantId=${customerID}`,
        // `https://rma1-backend.onrender.com/api/v1/addLandlordLeaseProperty?propertyId=${propertyId}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.status === 201) {
    //     Swal.fire({
    //       title: "Lease Agreement Created Successfully",
    //       icon: "success",
    //     }).then(() => {
    //       navigate(`/dashboard/${propertyId}`);
    //     });
    //   } else {
    //     message.error(res.data.message);
    //   }

    Swal.fire({
            title: "Lease Agreement Accepted Successfully & Now you can go to payment page",
            icon: "success",
          });
          // await updateTenantDetailsInLandlordDashboard(propertyID);
          navigate(`/dashboard/${user?._id}`);
        } else {
          message.error(res.data.message);
        }

    } catch (error) {
      console.error("Error while creating lease agreement:", error);
      message.error("Something went wrong");
    }
  };

  //  async function updateTenantDetailsInLandlordDashboard(propertyID){

  //  }

  return (
    <Layout>
      <div className="container mx-auto p-6 max-w-md">
  <h2 className="text-2xl font-semibold text-center mb-6">Accept Lease Agreement Form</h2>
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
      <Checkbox>Agree to lease terms (accepting all lease terms given by the landlord)</Checkbox>
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
