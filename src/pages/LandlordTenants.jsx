import Layout from "./../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaRegSadCry } from "react-icons/fa";

const LandlordTenants = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <div>
        <Layout>
          <div className="flex items-center justify-center text-xl">
            <h1 className=" leading-normal text-gray-600 tracking-normal text-center">
              Yours tenants list is currently empty
            </h1>
            <span className="ml-2">
              <FaRegSadCry className="text-gray-600" />
            </span>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default LandlordTenants;
