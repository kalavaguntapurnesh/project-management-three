import Layout from "../components/Layout";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Form, Input, Row, message } from "antd";
import Swal from "sweetalert2";

const AddLeaseAgreement = () => {
  const { user } = useSelector((state) => state.user);
  const { propertyId } = useParams(); 
  const navigate = useNavigate(); 
  const [form] = Form.useForm();

  console.log(propertyId);
  const handleLeaseSubmit = async (values) => {
    try {
      const res = await axios.post(
        // `http://localhost:8080/api/v1/addLandlordLeaseProperty?propertyId=${propertyId}`,
        `https://rma1-backend-1.onrender.com/api/v1/addLandlordLeaseProperty?propertyId=${propertyId}`,
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
            title: "Lease Agreement Created Successfully",
            icon: "success",
          });
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
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Add Lease Agreement</h2>
        <Form layout="vertical" form={form} onFinish={handleLeaseSubmit}>
          <Row gutter={20}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Rent Amount"
                name="RentAmount"
                rules={[{ required: true, message: "Please enter rent amount" }]}
              >
                <Input placeholder="Enter Rent Amount" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Security Deposit"
                name="SecurityDeposit"
                rules={[{ required: true, message: "Please enter security deposit" }]}
              >
                <Input placeholder="Enter Security Deposit" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Lease Duration"
                name="LeaseDuration"
                rules={[{ required: true, message: "Please enter Lease Duration" }]}
              >
                <Input placeholder="Enter Lease Duration" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
            <Form.Item
                label="Start Date"
                name="StartDate"
                rules={[{ required: true, message: "Please enter Start Date" }]}
            >
                <Input type="date" placeholder="Select Start Date" />
            </Form.Item>
            </Col>

            <Col xs={24} md={12}>
            <Form.Item
                label="End Date"
                name="EndDate"
                rules={[{ required: true, message: "Please enter End Date" }]}
            >
                <Input type="date" placeholder="Select End Date" />
            </Form.Item>
            </Col>

            <Col xs={24} md={12}>
            <Form.Item
                label="Status"
                name="Status"
                rules={[{ required: true, message: "Please enter Status" }]}
            >
                <Input placeholder="Enter Status" />
            </Form.Item>
            </Col>

            <Col xs={24} md={12}>
            <Form.Item
                label="Lease Terms and Description"
                name="LeaseTermsAndDescription"
                rules={[{ required: true, message: "Please enter Lease Terms and Description" }]}
            >
                <Input.TextArea
                placeholder="Enter Lease Terms and Description"
                maxLength={40}
                rows={2}
                />
            </Form.Item>
            </Col>

            <Col xs={24} md={12}>
            <Form.Item
                label="Late Fee Policy"
                name="Late_Fee_Policy"
                rules={[{ required: true, message: "Please enter Late Fee Policy" }]}
            >
                <Input placeholder="Enter Late Fee Policy" />
            </Form.Item>
            </Col>

            <Col xs={24} md={12}>
            <Form.Item
                label="Rent Increase Policy"
                name="Rent_Increase_policy"
                rules={[{ required: true, message: "Please enter Rent Increase Policy" }]}
            >
                <Input placeholder="Enter Rent Increase Policy" />
            </Form.Item>
            </Col>

            <Col xs={24} md={12}>
            <Form.Item
                label="Renewal Option"
                name="Renewel_Option"
                rules={[{ required: true, message: "Please enter Renewal Option" }]}
            >
                <Input placeholder="Enter Renewal Option" />
            </Form.Item>
            </Col>

        </Row>

          <div className="flex justify-center mt-4">
            <button
              className="bg-mainColor text-white py-2 px-8 rounded-md"
              type="submit"
            >
              Submit Lease Agreement
            </button>
          </div>
        </Form>
      </div>
    </Layout>
  );
};

export default AddLeaseAgreement;
