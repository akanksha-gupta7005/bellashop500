import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="uppercase tracking-[3px] font-semibold"
            style={{ color: "#FF00FF" }}
          >
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            Fashion That Walks With You
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We believe every step deserves style, comfort and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
              alt="Fashion footwear"
              className="rounded-[35px] shadow-xl w-full h-\[450px\] object-cover"
            />

            <div
              className="absolute -bottom-6 -right-6
                         w-32 h-32 rounded-full
                         flex items-center justify-center
                         text-white font-bold text-center
                         shadow-xl"
              style={{ backgroundColor: "#800080" }}
            >
              Walk
              <br />
              With
              <br />
              Confidence
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-5">
              Designed For Her
            </h3>

            <p className="text-gray-600 leading-8 mb-5">
              BellaSteps brings together stylish footwear created for
              modern girls and women. From elegant heels to comfortable
              everyday flats, our collection has something for every mood
              and occasion.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Our goal is simple — combine fashion, comfort and quality
              so you can confidently express your personal style.
            </p>

            <div className="grid grid-cols-2 gap-5">

              <div
                className="p-5 rounded-2xl"
                style={{ backgroundColor: "#FFB8FF" }}
              >
                <span className="text-3xl">👠</span>
                <h4 className="font-bold mt-2">
                  Trendy Designs
                </h4>
              </div>

              <div
                className="p-5 rounded-2xl"
                style={{ backgroundColor: "#f3e5f3" }}
              >
                <span className="text-3xl">💗</span>
                <h4 className="font-bold mt-2">
                  Made With Love
                </h4>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;