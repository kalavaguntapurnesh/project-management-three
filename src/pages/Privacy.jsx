import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./../components/ScrollToTop";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <ScrollToTop />

      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px] pb-12 md:text-start text-center space-y-6">
              <div className=" text-4xl font-bold text-center text-headingColor">
                <h1>Alchemind Rentals Privacy Statement</h1>
              </div>

              <div className="space-y-2 text-sideHeading mt-8 text-center">
                <p>Last Updated: October 10, 2024 (Version 0.0.1)</p>
                <p>
                  This privacy policy informs you about Alchemind Rentals's data
                  processing.
                </p>
              </div>

              <div className="my-4">
                <img
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/privacy_landing_main_2800X1000?scl=1"
                  alt=""
                  className="rounded"
                />
              </div>

              <div className=" text-4xl font-bold text-center text-headingColor pt-8">
                <h1>Discover and control your data</h1>
              </div>

              <div className="space-y-2 text-sideHeading mt-8 text-center">
                <p>
                  Privacy is at the centre of how we build the products and
                  services that customers use every day. See privacy resources
                  and controls below where you can manage your data and how it
                  is used.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-8 md:px-2 lg:px-1 px-4">
                <a
                  href="/privacy-statement"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                         https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/privacy_dashboard_card_809X461?wid=517&hei=291&fit=crop"
                          alt=""
                          className="md:h-52 w-[100%] rounded"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl font-semibold text-center">
                          Visit privacy statement
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          The privacy statement is where you can manage your
                          privacy settings and manage your data for your
                          Alchemind Rentals account.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="/privacy-report"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                            https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/privacy_account_checkup_card_809X461?wid=517&hei=291&fit=crop"
                          alt=""
                          //   className="md:h-52 md:w-[70%] w-[80%]"
                          className="md:h-52 w-[100%] rounded"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl font-semibold text-center">
                          Account check-up
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          The account check-up wizard is a tool where you can
                          review your account safety settings to strengthen your
                          online security. Do an account check-up
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>
                <a
                  href="/enroll-rewards"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                           https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/privacy_controls_card_809X461?wid=517&hei=291&fit=crop"
                          alt=""
                          className="md:h-52 w-[100%] rounded"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl font-semibold text-center">
                          Find your privacy controls
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Learn how to find your privacy settings and other
                          related information in Alchemind Rentals products and
                          services.
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>
              </div>

              <div className="grid lg:grid-cols-2 lg:mx-4 gap-6 pt-12 pb-8">
                <div className="flex flex-col gap-4 w-full space-y-2 ">
                  <div className=" flex items-center lg:justify-start justify-center ">
                    <h1 className="xl:text-5xl text-4xl font-semibold text-headingColor lg:text-start text-center">
                      Explores the powerful features of our Products
                    </h1>
                  </div>

                  <div className="text-sideHeading md:text-lg">
                    <p>
                      At Alchemind Rentals, we value, protect, and defend your
                      privacy. Our approach is built on our long-standing
                      privacy principles of user control, transparency,
                      security, defending data from third party access, and
                      using personal data in ways that provide meaningful
                      benefit to you.
                    </p>
                  </div>

                  <div>
                    <a
                      href="/"
                      className="bg-mainColor hover:bg-white hover:text-mainColor hover:border-[1px] hover:border-mainColor font-medium outline-none hover:shadow-form rounded-full transition duration-1000 ease-in-out text-base text-white px-8 py-2.5 text-center"
                    >
                      What we offer
                    </a>
                  </div>
                </div>

                <div>
                  <img
                    src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/privacy_data_protection_1376X920:VP5-800x450"
                    alt=""
                    className="rounded"
                  />
                </div>
              </div>

              <div className=" text-4xl font-semibold text-center pt-12">
                <h1>Learn more about privacy at Alchemind Rentals</h1>
              </div>

              <div className=" text-sideHeading text-center">
                <p>
                  Learn more about Privacy at Alchemind Rentals and how we put
                  our privacy principles into practise in the following links
                  and resources.
                </p>
              </div>

              <div className=" text-2xl text-blue-600 font-semibold underline pt-4">
                <h1>Privacy for Young People</h1>
              </div>

              <div className=" text-sideHeading mt-4">
                <p>
                  Privacy for young people is a page where young users can learn
                  about and understand Alchemind Rentals privacy practises and
                  how to use our products in a way that protects their privacy.
                  This page also highlights topics that may be helpful for
                  parents and guardians.
                </p>
              </div>

              <div className=" text-2xl text-blue-600 font-semibold underline pt-5">
                <h1>Privacy Report</h1>
              </div>

              <div className=" text-sideHeading mt-4">
                <p>
                  The privacy report includes new developments in privacy at LM
                  Club. Find the latest information on what personal data we
                  collect, how it may be used, and how you can manage and
                  control your data.
                </p>
              </div>

              <div className=" text-2xl text-blue-600 font-semibold underline pt-8">
                <h1>Privacy Frequently Asked Questions</h1>
              </div>

              <div className=" text-sideHeading mt-4">
                <p>
                  Do you have a question about Alchemind Rentals privacy? We
                  explain how customers can export or delete personal data and
                  more in the Privacy FAQs.
                </p>
              </div>

              <div className=" text-2xl text-blue-600 font-semibold underline pt-8">
                <h1>Alchemind Rentals Corporate Social Responsibility</h1>
              </div>

              <div className=" text-sideHeading mt-4">
                <p>
                  Learn more about how Alchemind Rentals approaches building a
                  more inclusive, equitable, sustainable, and trusted future for
                  everyone, and how technology can and must benefit the future
                  of humanity and our planet.
                </p>
              </div>

              <div className=" text-2xl text-blue-600 font-semibold underline pt-8">
                <h1>U.S. State Data Privacy Notice</h1>
              </div>

              <div className=" text-sideHeading mt-4">
                <p>
                  If you are in the U.S, please see our U.S State Data Privacy
                  Notice.
                </p>
              </div>

              <div className=" text-4xl font-semibold text-center pt-12">
                <h1>What's new?</h1>
              </div>

              <div className=" text-sideHeading mt-4 text-center">
                <p>
                  Check out the latest articles, blog posts, and news from LM
                  Club about protecting your privacy at home and at work.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 pt-8 md:px-2 lg:px-1 px-4">
                <a
                  href="mailto:info@laoemaom.com"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-2 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                           https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/GDPR_and_generative_AI_A%20guide_for_the_public_sector?wid=406&hei=230&fit=crop"
                          alt=""
                          className="md:h-52 w-[100%] rounded"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-2xl font-bold text-headingColor text-center">
                          GDPR and generative AI - a guide for the public sector
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          This whitepaper offers practical support for public
                          sector organisations as they consider generative AI
                          services such as Copilot for Alchemind Rentals 365 and
                          Azure OpenAI Service.
                        </p>
                      </div>
                      {/* 
                      <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@laoemaom.com"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-2 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                          https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Protecting_the_data_of_our_commercial_and_public_sector_customers_in_the_AI_era?wid=380&hei=213&fit=crop"
                          alt=""
                          className="md:h-52 w-[100%] rounded"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-2xl font-bold text-headingColor text-center">
                          Protecting the data of our commercial
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Learn more about Alchemind Rentals commitment to
                          protecting the data of our commercial and public
                          sector customers and how our approach to AI is built
                          on a foundation of privacy across all our AI products
                          and solutions.
                        </p>
                      </div>
                      {/* 
                      <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@laoemaom.com"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-2 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                           https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Enhancing_trust_and_protecting_privacy_in_the_AI_era?wid=380&hei=213&fit=crop"
                          alt=""
                          //   className="md:h-52 md:w-[70%] w-[80%]"
                          className="md:h-52 w-[100%] rounded"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-2xl font-bold text-headingColor text-center">
                          Enhancing trust and protecting privacy
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Discover how Alchemind Rentals privacy commitments
                          apply to AI and how Alchemind Rentals empowers
                          customers to use new AI technologies while advancing
                          trust and protecting privacy.
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          Learn More
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>
                <a
                  href="/enroll-rewards"
                  class="flex md:justify-start justify-center"
                >
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-2 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center w-full">
                        <img
                          src="
                        https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/EU-Data-Boundary-Blog-image-1-small?wid=380&hei=213&fit=crop"
                          alt=""
                          className="md:h-52 w-[100%] rounded"
                        />
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-2xl font-bold text-headingColor text-center">
                          Enabling customers to keep personal data
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Alchemind Rentals EU Data Boundary enables customers
                          to store and process their data within the EU. Read
                          about the latest enhancements and new features
                          building on prior progress.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
