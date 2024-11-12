import { FaBuilding, FaHandshake } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Carousel = () => {
  return (
    <div>
      <div className="bg-[#f8f9fa]">
        <div className="relative pt-4 pb-12">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px]">
              <div className="justify-center w-full ">
                <div className="w-full max-w-[14000px] mx-auto space-y-4">
                  <div className="pt-4">
                    <h1 className="mx-auto max-w-[800px] text-center md:text-5xl text-4xl font-bold tracking-tight">
                      Empowering the DIY landlords
                    </h1>
                  </div>

                  <div className="text-center">
                    <p className="md:text-xl text-lg text-gray-600">
                      We aim to make managing rental properties accessible and
                      efficient for individual landlords, especially those
                      without the resources of large property management
                      companies.
                      <a href="/pricing" className="text-blue-500">
                        {" "}
                        Compare plans
                      </a>
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-8">
                    <a href="" class="flex md:justify-start justify-center">
                      <div class="w-full p-4 bg-white border border-gray-200 rounded-xl shadow-md sm:p-6 md:p-8 ">
                        <div class="space-y-4">
                          <div class="flex justify-center items-center">
                            <img
                              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-agent-lg-1.webp"
                              alt=""
                              class="w-32 h-32"
                            />
                          </div>
                          <div class="flex justify-center items-center">
                            <h1 class="text-3xl text-colorTwo font-bold">
                              Online Rent Collection
                            </h1>
                          </div>

                          <div class="flex justify-center items-center text-gray-600 text-center">
                            <p>
                              Securely collect rent and fees online, with
                              options for tenants to schedule payments and track
                              receipts
                            </p>
                          </div>

                          <div className="flex justify-center">
                            <button class="border-[1px] border-mainColor hover:bg-colorFour hover:text-white transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded-full">
                              View More
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="" class="flex md:justify-start justify-center">
                      <div class="w-full p-4 bg-white border border-gray-200 rounded-xl shadow-md sm:p-6 md:p-8 ">
                        <div class="space-y-4">
                          <div class="flex justify-center items-center">
                            <img
                              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-sell-lg-1.webp"
                              alt=""
                              class="w-32 h-32"
                            />
                          </div>

                          <div class="flex justify-center items-center">
                            <h1 class=" text-3xl text-colorTwo font-bold">
                              Maintenance Tracking
                            </h1>
                          </div>

                          <div class="flex justify-center items-center text-gray-600 text-center">
                            <p>
                              Manage maintenance requests with photos,
                              messaging, and tracking tools, all in one platform
                            </p>
                          </div>

                          <div className="flex justify-center">
                            <button class="border-[1px] border-mainColor hover:bg-colorFour hover:text-white transition duration-1000 text-colorFour font-semibold py-2 px-4 rounded-full">
                              View More
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="" class="flex md:justify-start justify-center">
                      <div class="w-full p-4 bg-white border border-gray-200 rounded-xl shadow-md sm:p-6 md:p-8 ">
                        <div class="space-y-4">
                          <div class="flex justify-center items-center">
                            <img
                              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-rent-lg-1.webp"
                              alt=""
                              class="w-32 h-32"
                            />
                          </div>

                          <div class="flex justify-center items-center">
                            <h1 class=" text-3xl text-colorTwo font-bold">
                              Accounting Dashboard
                            </h1>
                          </div>

                          <div class="flex justify-center items-center text-gray-600 text-center">
                            <p>
                              Simplify financial tracking with automatic syncing
                              of rent payments for easier accounting​ .
                            </p>
                          </div>

                          <div className="flex justify-center">
                            <button class="border-[1px] border-mainColor hover:bg-colorFour hover:text-white transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded-full">
                              View More
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="relative pt-12 pb-12">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px]">
              <div className="justify-center w-full ">
                <div className="w-full max-w-[14000px] mx-auto space-y-4">
                  <div className="pt-4">
                    <h1 className="mx-auto max-w-[1000px] text-center md:text-5xl text-4xl font-bold tracking-tight">
                      We manage rental properties effectively
                    </h1>
                  </div>

                  <div className="text-center">
                    <p className="md:text-xl text-lg text-gray-600">
                      Detailed screening reports, including credit, background,
                      and eviction checks, to ensure quality tenant selection
                    </p>
                  </div>

                  <div className="pt-8">
                    <div className="bg-[#f8f9fa]">
                      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-4">
                        <div className="flex flex-col justify-center space-y-3 md:p-8 p-2">
                          <div className="font-semibold text-4xl text-headingColor w-[100%]">
                            <h1 className="md:text-start text-center">
                              Customizable Lease Agreements
                            </h1>
                          </div>
                          <div className="font-light text-sideHeading">
                            <p className="md:text-start text-center">
                              Landlords can add clauses and upload documents,
                              and tenants can sign digitally for seamless lease
                              processing​ that can be customized to meet
                              specific rental need.
                            </p>
                          </div>

                          <div className="text-blue-600 underline text-xl md:text-start text-center">
                            <a href="">List properties here</a>
                          </div>
                        </div>
                        <div className="w-[100%]">
                          <img
                            src="https://images.pexels.com/photos/4569340/pexels-photo-4569340.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt=""
                            className="h-[360px] w-[100%]"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-4">
                        <div className="w-[100%] md:block hidden">
                          <img
                            src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt=""
                            className="h-[360px] w-[100%]"
                          />
                        </div>
                        <div className="md:hidden flex flex-col justify-center space-y-3 md:p-12 p-2">
                          <div className="font-semibold text-4xl text-headingColor w-[100%]">
                            <h1 className="md:text-start text-center">
                              Maintenance Request Tracking
                            </h1>
                          </div>
                          <div className="font-light text-sideHeading">
                            <p className="md:text-start text-center">
                              Tenants can submit maintenance requests through
                              us, allowing landlords to manage and track repairs
                              from their dashboard. The platform supports in-app
                              messaging and photo attachments.
                            </p>
                          </div>

                          <div className="text-blue-600 text-xl underline md:text-start text-center">
                            <a href="">Manage your property</a>
                          </div>
                        </div>
                        <div className="md:flex hidden flex-col justify-center space-y-3 md:p-12 p-2">
                          <div className="font-semibold text-4xl text-headingColor w-[100%]">
                            <h1 className="md:text-start text-center">
                              Maintenance Request Tracking
                            </h1>
                          </div>
                          <div className="font-light text-sideHeading">
                            <p className="md:text-start text-center">
                              Tenants can submit maintenance requests through
                              us, allowing landlords to manage and track repairs
                              from their dashboard. The platform supports in-app
                              messaging and photo attachments.
                            </p>
                          </div>

                          <div className="text-blue-600 text-xl underline md:text-start text-center">
                            <a href="">Manage your property</a>
                          </div>
                        </div>
                        <div className="w-[100%] md:hidden block">
                          <img
                            src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt=""
                            className="h-[360px] w-[100%]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f9fa]">
        <div className="relative pt-12 pb-12">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px]">
              <div className="justify-center w-full ">
                <div className="w-full max-w-[14000px] mx-auto space-y-4">
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="flex flex-col justify-center space-y-3 md:p-8 p-1">
                      <div className="font-bold text-4xl text-headingColor w-[100%]">
                        <h1 className="md:text-start text-center">
                          Access lawyer-reviewed, state-specific lease agreement
                          templates
                        </h1>
                      </div>

                      <div className="font-light text-sideHeading">
                        <p className="md:text-start text-center">
                          Access state-specific templates that can be customized
                          with Unlimited Plus. Our lease agreement and addendum
                          templates ensure both you and your tenants are
                          protected during the lease term.
                        </p>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <div className="flex flex-row items-center text-lg">
                          <TiTick size={20} />
                          <h1 className="ml-1">
                            Level up your landlording simply and confidently
                          </h1>
                        </div>
                        <div className="flex flex-row items-center text-lg">
                          <TiTick size={20} />
                          <h1 className="ml-1">
                            Take the guesswork out of managing your business
                          </h1>
                        </div>

                        <div className="flex flex-row items-center text-lg">
                          <TiTick size={20} />
                          <h1 className="ml-1">
                            Track your listing's performance and trends in your
                            market
                          </h1>
                        </div>

                        <div className="flex flex-row items-center text-lg">
                          <TiTick size={20} />
                          <h1 className="ml-1">
                            Save time and effort with prioritized responses to
                            your questions.
                          </h1>
                        </div>
                      </div>

                      <div className="pt-4 md:flex items-center lg:justify-start justify-center hidden">
                        <a
                          href="/products"
                          className="bg-mainColor font-medium outline-none
                      rounded-full hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                        >
                          Let's get started
                        </a>
                      </div>

                      <div className="mx-8 pt-4">
                        <a
                          href="/products"
                          className="bg-mainColor hover:bg-white hover:text-mainColor hover:border-[1px] hover:border-mainColor font-medium outline-none md:hidden block
                      rounded-full hover:shadow-form transition duration-1000 ease-in-out text-base text-white px-8 py-2.5 text-center"
                        >
                          Let's get started
                        </a>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                      <a
                        href="mailto:info@laoemaom.com"
                        class="flex md:justify-start justify-center"
                      >
                        <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow ">
                          <div class="space-y-2">
                            <div className="flex justify-center items-center">
                              <div className="flex justify-center items-center w-16 h-16 border-2 border-violet-100 bg-violet-100 rounded-full">
                                <MdHomeWork
                                  size={28}
                                  className="text-mainColor"
                                />
                              </div>
                            </div>
                            <div class="flex justify-center items-center">
                              <h1 class="text-2xl text-headingColor font-semibold text-center">
                                Rent Analysis Reports
                              </h1>
                            </div>

                            <div class="flex justify-center items-center text-sideHeading text-center">
                              <p>
                                We provide landlords with localized rental price
                                analysis
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>

                      <a
                        href="mailto:info@laoemaom.com"
                        class="flex md:justify-start justify-center"
                      >
                        <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow ">
                          <div class="space-y-2">
                            <div className="flex justify-center items-center">
                              <div className="flex justify-center items-center w-16 h-16 border-2 border-violet-100 bg-violet-100 rounded-full">
                                <FaBuilding
                                  size={28}
                                  className="text-mainColor"
                                />
                              </div>
                            </div>
                            <div class="flex justify-center items-center">
                              <h1 class="text-2xl text-headingColor font-semibold text-center">
                                Tenant Portal
                              </h1>
                            </div>

                            <div class="flex justify-center items-center text-sideHeading text-center">
                              <p>
                                A dedicated portal for tenants to manage
                                payments
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>

                      <a
                        href="mailto:info@laoemaom.com"
                        class="flex md:justify-start justify-center"
                      >
                        <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow ">
                          <div class="space-y-2">
                            <div className="flex justify-center items-center">
                              <div className="flex justify-center items-center w-16 h-16 border-2 border-violet-100 bg-violet-100 rounded-full">
                                <FaHandshake
                                  size={28}
                                  className="text-mainColor"
                                />
                              </div>
                            </div>
                            <div class="flex justify-center items-center">
                              <h1 class="text-2xl text-headingColor font-semibold text-center">
                                Syndicated Listings
                              </h1>
                            </div>

                            <div class="flex justify-center items-center text-sideHeading text-center">
                              <p>
                                Maximizing exposure and speeding up the tenant
                                search process​ .
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>

                      <a
                        href="mailto:info@laoemaom.com"
                        class="flex md:justify-start justify-center"
                      >
                        <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow ">
                          <div class="space-y-2">
                            <div className="flex justify-center items-center">
                              <div className="flex justify-center items-center w-16 h-16 border-2 border-violet-100 bg-violet-100 rounded-full">
                                <IoDocumentAttach
                                  size={28}
                                  className="text-mainColor"
                                />
                              </div>
                            </div>
                            <div class="flex justify-center items-center">
                              <h1 class="text-2xl text-headingColor font-semibold text-center">
                                Late Fees Reminders
                              </h1>
                            </div>

                            <div class="flex justify-center items-center text-sideHeading text-center">
                              <p>
                                Automated late fees reminders for upcoming or
                                overdue payments.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
