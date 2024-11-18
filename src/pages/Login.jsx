import React from "react";
import NavBar from "./../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading state
  const [verified, setVerified] = useState(false); // Captcha verification state

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(showLoading());
    if (!verified) {
      alert("Please complete the reCAPTCHA to log in.");
      return;
    }
    axios
      .post(
        // "https://backend-six-kappa-64.vercel.app/auth/login",
        // "https://backend-six-kappa-64.vercel.app/auth/login",
        "http://localhost:8080/api/v1/login",
        // "https://rma1-backend.onrender.com/api/v1/login",
        {
          email,
          password,
        }
      )
      .then((response) => {
        dispatch(hideLoading());
        if (response.status === 200) {
          // localStorage.setItem("token", response.data.token);
          localStorage.setItem("token", response.data.data[0]);
          const userId = response.data.data[1];
          navigate(`/dashboard/${userId}`);
        }
      })
      .catch((error) => {
        dispatch(hideLoading());
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Check your username and password!!!",
        });
      });
  };

  const handleCaptcha = (value) => {
    setVerified(true);
  };

  return (
    <div>
      <NavBar />
      <div className="relative">
        {loading && <Spinner />}
        <section className=" text-black md:py-0 py-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="lg:mt-28 mt-20">
              <div className="flex flex-col justify-center px-6 pb-8">
                <div className="flex justify-center items-center">
                  <div className="w-full bg-white rounded-lg shadow md:mt-0 xl:p-0 max-w-md">
                    <div className="p-6 space-y-4 sm:p-8">
                      <h1 className="text-3xl text-center font-semibold text-colorThree ">
                        Please log in.
                      </h1>
                      <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={handleLogin}
                      >
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-bold text-colorThree "
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="name@domain.com"
                            required="true"
                            onChange={(e) => setEmail(e.target.value)}
                          ></input>
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-bold text-colorThree"
                          >
                            Password
                          </label>
                          <div className="flex flex-row">
                            <input
                              // type={type}
                              name="password"
                              value={password}
                              id="password"
                              placeholder="••••••••"
                              className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              required="true"
                              onChange={(e) => setPassword(e.target.value)}
                            ></input>
                            {/* <span
                              onClick={handleToggle}
                              className="cursor-pointer flex justify-center items-center"
                            >
                              <Icon
                                className="absolute mr-10 text-black"
                                icon={icon}
                                size={20}
                              ></Icon>
                            </span> */}
                          </div>
                        </div>
                        <div className="w-[100%] flex justify-center items-center">
                          <ReCAPTCHA
                            sitekey="6LchMmUqAAAAANKg1dNzYDXJnCMf-L6TjRsUVAfG"
                            onChange={handleCaptcha}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                                required=""
                              ></input>
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="remember"
                                className="text-black  "
                              >
                                Keep me signed in
                              </label>
                            </div>
                          </div>
                          <a
                            href="/forgotPassword"
                            className="text-sm hover:underline"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <button
                          disabled={!verified || loading} // Disable until reCAPTCHA is completed
                          type="submit"
                          className={`w-full text-white bg-mainColor text-base hover:bg-colorFour transition ease-in-out duration-1000 focus:outline-none font-medium rounded px-5 py-2.5 text-center cursor-pointer ${
                            (!verified || loading) &&
                            "opacity-50 cursor-not-allowed"
                          }`}
                        >
                          Sign in
                        </button>
                        <div className="relative flex items-center">
                          <div className="flex-grow border-t border-gray-400"></div>
                          <span className="flex-shrink mx-4 text-black text-sm">
                            or
                          </span>
                          <div className="flex-grow border-t border-gray-400"></div>
                        </div>

                        <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                          <img
                            src="https://secure.meetupstatic.com/next/images/login/google.svg?w=48"
                            alt=""
                            className="w-5 h-5"
                          />
                          Sign in with Google
                        </button>

                        <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                          <img
                            src="https://secure.meetupstatic.com/next/images/login/apple.svg?w=48"
                            alt=""
                            className="w-5 h-5"
                          />
                          Sign in with Apple
                        </button>

                        <p className="text-sm text-center font-light text-gray-500 ">
                          Not Registered?{" "}
                          <a
                            href="/register"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            Create Account
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
