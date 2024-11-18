import React from "react";
import NavBar from "./../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
const Register = () => {
  const [error, setError] = useState(null); // To display any error messages
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading state

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verified, setVerified] = useState(false);
  const [role, setRole] = useState("");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleCaptcha = (value) => {
    setVerified(true);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(showLoading());
    if (!verified) {
      alert("Please complete the reCAPTCHA to register.");
      return;
    }
    setLoading(true);
    try {
      // Reset error state
      setError(null);

      // Make API request to register the user
      axios
        .post(
          // "https://backend-six-kappa-64.vercel.app/auth/register",
          "http://localhost:8080/api/v1/registerUser",
          // "https://rma1-backend.onrender.com/api/v1/registerUser",
          {
            email,
            password,
            fullName,
            role,
          }
        )
        .then((response) => {
          dispatch(hideLoading());
          if (response.status === 201) {
            const verifyMail = response.data.email;
            const partialEmail = verifyMail.replace(
              /(\w{3})[\w.-]+@([\w.]+\w)/,
              "$1***@$2"
            );
            Swal.fire({
              title: "Registration Success",
              text:
                "Check your email " +
                partialEmail +
                " and verify it to proceed further.",
              icon: "success",
            });
            navigate("/login");
          }
        })
        .catch((error) => {
          dispatch(hideLoading());
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });

      navigate("/dashboard");
    } catch (err) {
      console.error("Registration failed:", err);
      setError("Registration failed. Please try again."); // Display error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="relative">
      <NavBar />
      {loading && <Spinner />}
      <div>
        <section className="text-black md:py-0 py-8">
          <div className="max-w-[1400px] mx-auto">
            <div className="lg:mt-28 mt-20">
              <div className="flex flex-col justify-center px-6 pb-8">
                <div className="flex justify-center items-center">
                  <div className="w-full bg-white rounded-lg shadow md:mt-0 xl:p-0 max-w-md">
                    <div className="p-6 space-y-4 sm:p-8">
                      <h1 className="text-3xl text-center font-semibold text-colorThree">
                        Get started with us
                      </h1>
                      <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={handleRegister}
                      >
                        {/* Role Selection */}
                        <div className="flex flex-col space-y-2">
                          <label className="text-sm font-bold text-colorThree">
                            I am a:
                          </label>
                          <div className="flex flex-row items-center">
                            <div className="w-[50%]">
                              <input
                                type="radio"
                                name="role"
                                value="landlord"
                                id="landlord"
                                checked={role === "landlord"}
                                onChange={handleRoleChange}
                                className="mr-2 "
                              />
                              <label htmlFor="landlord" className="mr-4">
                                Landlord
                              </label>
                            </div>

                            <div className="w-[50%]">
                              <input
                                type="radio"
                                name="role"
                                value="tenant"
                                id="tenant"
                                checked={role === "tenant"}
                                onChange={handleRoleChange}
                                className="mr-2"
                              />
                              <label htmlFor="tenant">Tenant</label>
                            </div>
                          </div>
                        </div>

                        {/* Full Name Input */}
                        <div>
                          <label
                            htmlFor="text"
                            className="block mb-2 text-sm font-bold text-colorThree"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            className="border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Your Full Name"
                            required
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </div>

                        {/* Email Input */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-bold text-colorThree"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="name@domain.com"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        {/* Password Input */}
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-bold text-colorThree"
                          >
                            Password
                          </label>
                          <div className="flex flex-row">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              value={password}
                              placeholder="••••••••"
                              className="border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              required
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="terms"
                              aria-describedby="terms"
                              type="checkbox"
                              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-pointer"
                              required
                            ></input>
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="terms"
                              className="font-light text-gray-500 dark:text-gray-300"
                            >
                              I accept the{" "}
                              <a
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                href="/privacy"
                              >
                                Terms and Conditions & Privacy Policy
                              </a>
                            </label>
                          </div>
                        </div>

                        {/* reCAPTCHA */}
                        <div className="w-[100%] flex justify-center items-center">
                          <ReCAPTCHA
                            sitekey="6LchMmUqAAAAANKg1dNzYDXJnCMf-L6TjRsUVAfG"
                            onChange={handleCaptcha}
                          />
                        </div>

                        {/* Sign Up Button */}
                        <button
                          type="submit"
                          disabled={!verified || !role} // Disable if captcha or role is not completed
                          className={`w-full text-base font-medium rounded px-5 py-2.5 text-center transition ease-in-out duration-1000 ${
                            verified && role
                              ? "bg-mainColor hover:bg-colorFour text-white"
                              : "bg-[#f8f9fa] cursor-not-allowed text-gray-400"
                          }`}
                        >
                          Sign Up{" "}
                          {role &&
                            `as ${
                              role.charAt(0).toUpperCase() + role.slice(1)
                            }`}
                        </button>

                        <div className="relative flex items-center">
                          <div className="flex-grow border-t border-gray-400"></div>
                          <span className="flex-shrink mx-4 text-black text-sm">
                            or
                          </span>
                          <div className="flex-grow border-t border-gray-400"></div>
                        </div>

                        {/* Social Sign In Buttons */}
                        <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                          <img
                            src="https://secure.meetupstatic.com/next/images/login/google.svg?w=48"
                            alt=""
                            className="w-5 h-5"
                          />
                          Sign Up with Google
                        </button>

                        <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                          <img
                            src="https://secure.meetupstatic.com/next/images/login/apple.svg?w=48"
                            alt=""
                            className="w-5 h-5"
                          />
                          Sign Up with Apple
                        </button>

                        <p className="text-sm text-center font-light text-gray-500">
                          Already have an account?{" "}
                          <a
                            href="/login"
                            className="font-medium text-primary-600 hover:underline"
                          >
                            Sign In Here
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

export default Register;
