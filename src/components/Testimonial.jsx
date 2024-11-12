import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const Testimonial = () => {
  const ServiceData = [
    {
      name: "Marcel Bordon",
      imageLink:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      designation: "Working at One",
      review:
        "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Neque quam at reprehenderit, cumque delectus maiores possimus quibusdam ",
    },
    {
      name: "Aaron Zander",
      imageLink:
        "https://screencloud.com/_next/static/media/marcel-bordon.dd451a32.webp",
      designation: "Working at Two",
      review:
        "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Neque quam at reprehenderit, cumque delectus maiores possimus quibusdam ",
    },
    {
      name: "Michael Fasbender",
      imageLink:
        "https://screencloud.com/_next/static/media/aaron-zander.74f76098.webp",
      designation: "Working at Three",
      review:
        "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Neque quam at reprehenderit, cumque delectus maiores possimus quibusdam ",
    },
    {
      name: "Tulsa Fast",
      imageLink:
        "https://screencloud.com/_next/static/media/sharon-winning.cb6ceb06.webp",
      designation: "Working at Four",
      review:
        "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Neque quam at reprehenderit, cumque delectus maiores possimus quibusdam ",
    },
    {
      name: "Leaney Dawson",
      imageLink:
        "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      designation: "Working at Five",
      review:
        "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Neque quam at reprehenderit, cumque delectus maiores possimus quibusdam ",
    },
    {
      name: "Myrcella Stark",
      imageLink:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
      designation: "Working at Six",
      review:
        "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Neque quam at reprehenderit, cumque delectus maiores possimus quibusdam ",
    },
  ];

  return (
    <div className="pt-12" id="testimonial">
      <div className="relative">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px] pb-8">
            <div className="flex items-center text-center justify-center ">
              <div className="h-4 w-1 bg-mainColor"></div>
              <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                Trust our reviews
              </h1>
            </div>
            <div className="mx-auto max-w-[1200px] text-center mt-4">
              <h1 className="text-4xl font-bold text-headingColor">
                Real stories, real results
              </h1>
            </div>

            <div className="mx-auto max-w-[1200px] text-sideHeading text-center mt-4">
              <p>
                Laoe Maom embodies progress and adaptability, responding
                dynamically to the evolving relationships and interests in our
                global landscape. We are a collective of individuals and
                businesses worldwide, committed to mutual support and shared
                success. By joining forces, we breathe life into businesses and
                nurture them to thrive. Let’s achieve greatness together.
              </p>
            </div>

            <Swiper
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                1000: {
                  slidesPerView: 3,
                  spaceBetween: 18,
                },
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, FreeMode]}
              className="max-w-[90%] "
            >
              {ServiceData.map((item) => (
                <SwiperSlide key={item.title} className="pt-16 pb-12">
                  <div class="bg-white border-[1px] rounded-lg overflow-visible">
                    <div class="relative -mt-10 flex justify-center">
                      <img
                        class="rounded-full shadow-md h-20 w-20 object-cover "
                        src={item.imageLink}
                        alt="Profile"
                      />
                    </div>
                    <div class="px-6 py-4 text-center">
                      <h2 class="text-xl font-semibold text-gray-800">
                        {item.name}
                      </h2>
                      <p class="text-gray-600">{item.designation}</p>

                      <p class="mt-2 text-gray-600">
                        John's review about the company and services is positive
                        and detailed, explaining his experience clearly.
                      </p>

                      <div class="flex justify-center mt-4">
                        <svg
                          class="w-6 h-6 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L14.09 8.26L20.78 9.27L16 13.14L17.18 19.84L12 16.77L6.82 19.84L8 13.14L3.22 9.27L9.91 8.26L12 2Z" />
                        </svg>
                        <svg
                          class="w-6 h-6 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L14.09 8.26L20.78 9.27L16 13.14L17.18 19.84L12 16.77L6.82 19.84L8 13.14L3.22 9.27L9.91 8.26L12 2Z" />
                        </svg>
                        <svg
                          class="w-6 h-6 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L14.09 8.26L20.78 9.27L16 13.14L17.18 19.84L12 16.77L6.82 19.84L8 13.14L3.22 9.27L9.91 8.26L12 2Z" />
                        </svg>
                        <svg
                          class="w-6 h-6 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L14.09 8.26L20.78 9.27L16 13.14L17.18 19.84L12 16.77L6.82 19.84L8 13.14L3.22 9.27L9.91 8.26L12 2Z" />
                        </svg>
                        <svg
                          class="w-6 h-6 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L14.09 8.26L20.78 9.27L16 13.14L17.18 19.84L12 16.77L6.82 19.84L8 13.14L3.22 9.27L9.91 8.26L12 2Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
