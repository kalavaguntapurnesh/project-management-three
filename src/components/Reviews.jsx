import Star from "../assets/Star.svg";

const Reviews = () => {
  return (
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-12 flex justify-center flex-col">
        <div class="py-8">
          <div class="text-center flex justify-center items-center">
            <h1 class="font-bold md:text-5xl text-4xl">
              Real stories, Real results
            </h1>
          </div>

          <div class="pt-16">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
              <div class="flex md:justify-start justify-center">
                <div class="w-full max-w-sm p-4 shadow rounded-lg sm:p-6 md:p-8 border-colorFour border-[1px]">
                  <div class="space-y-4">
                    <div>
                      <h2 class="text-sm text-gray-400">
                        Dean C., Senior Software Engineer
                      </h2>
                    </div>
                    <div class="flex flex-row">
                      <img src={Star} alt="" class="w-5 h-5" />
                      <img src={Star} alt="" class="w-5 h-5" />
                      <img src={Star} alt="" class="w-5 h-5" />
                      <img src={Star} alt="" class="w-5 h-5" />
                      <img src={Star} alt="" class="w-5 h-5" />
                    </div>
                    <div>
                      <h1 class="font-semibold text-2xl">
                        Great experience so far
                      </h1>
                    </div>
                    <div>
                      <p>
                        Return on investment is great. We can setup our own
                        status pages with both public and internal ones being
                        able to show us different details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex md:justify-start justify-center">
                <div class="w-full max-w-sm p-4 shadow rounded-lg sm:p-6 md:p-8 border-colorFour border-[1px]">
                  <div class="space-y-4">
                    <div>
                      <h2 class="text-sm text-gray-400">
                        Roberto B., Executive Vice President
                      </h2>
                    </div>
                    <div class="flex flex-row">
                      <img src={Star} alt="" class="w-5 h-5" />
                      <img src={Star} alt="" class="w-5 h-5" />
                      <img src={Star} alt="" class="w-5 h-5" />
                      <img src={Star} alt="" class="w-5 h-5" />
                      <img src={Star} alt="" class="w-5 h-5" />
                    </div>
                    <div>
                      <h1 class="font-semibold text-2xl">
                        Simple and precious
                      </h1>
                    </div>
                    <div>
                      <p>
                        The public status page is the best I have found for this
                        price, you can set custom logo and custom domain and it
                        is https. Other services claims to have powerful status
                        pages but they are cumbersome or expensive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex md:justify-start justify-center">
                <div class="w-full max-w-sm p-4 shadow rounded-lg sm:p-6 md:p-8 border-colorFour border-[1px]">
                  <div class="space-y-4">
                    <div>
                      <h2 class="text-sm text-gray-400">
                        Lee E., Director of Information Technology
                      </h2>
                    </div>
                    <div class="flex flex-row">
                      <img src={Star} alt="" class="w-5 h-5" />
                      <img src={Star} alt="" class="w-5 h-5" />
                      <img src={Star} alt="" class="w-5 h-5" />
                      <img src={Star} alt="" class="w-5 h-5" />
                      <img src={Star} alt="" class="w-5 h-5" />
                    </div>
                    <div>
                      <h1 class="font-semibold text-2xl">
                        Simple and affordable
                      </h1>
                    </div>
                    <div>
                      <p>
                        I like the public status page. There is a decent
                        selection of monitor types and settings to help cutdown
                        on false positives. Solid little mobile app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
