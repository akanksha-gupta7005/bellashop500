import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center"
      style={{
        background:
          "linear-gradient(135deg, #FFB8FF 0%, #ffffff 50%, #f3d5f3 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <p
            className="uppercase tracking-[4px] font-semibold mb-4"
            style={{ color: "#800080" }}
          >
            Step Into Elegance
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900">
            Step Into
            <span
              className="block"
              style={{ color: "#FF00FF" }}
            >
              Your Style
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">
            Discover beautiful, comfortable and trendy footwear designed
            especially for girls and women who love to walk with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#collection"
              className="px-7 py-3 rounded-full text-white font-bold
                         shadow-lg hover:scale-105 transition duration-300"
              style={{ backgroundColor: "#FF00FF" }}
            >
              Shop Collection
            </a>

            <a
              href="#about"
              className="px-7 py-3 rounded-full font-bold border-2
                         hover:bg-[#800080] hover:text-white
                         transition duration-300"
              style={{
                borderColor: "#800080",
                color: "#800080",
              }}
            >
              Explore More
            </a>
          </div>

          {/* Small Stats */}
          <div className="flex gap-10 mt-10">
            <div>
              <h3
                className="text-2xl font-bold"
                style={{ color: "#800080" }}
              >
                500+
              </h3>
              <p className="text-gray-500 text-sm">Styles</p>
            </div>

            <div>
              <h3
                className="text-2xl font-bold"
                style={{ color: "#800080" }}
              >
                10K+
              </h3>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>

            <div>
              <h3
                className="text-2xl font-bold"
                style={{ color: "#800080" }}
              >
                4.9
              </h3>
              <p className="text-gray-500 text-sm">Rating</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">

          <div
            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-40"
            style={{ backgroundColor: "#FF00FF" }}
          />

          <img
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80"
            alt="Women's footwear"
            className="relative w-full max-w-md h-[500px] object-cover
                       rounded-[40px] shadow-2xl
                       hover:scale-105 transition duration-500"
          />

          <div
            className="absolute bottom-8 -left-4 md:-left-8
                       bg-white px-6 py-4 rounded-2xl shadow-xl"
          >
            <p className="text-sm text-gray-500">
              New Collection
            </p>
            <p
              className="font-bold text-lg"
              style={{ color: "#800080" }}
            >
              Summer '26
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;