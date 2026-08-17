import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p
            className="uppercase tracking-[3px] font-semibold"
            style={{ color: "#FF00FF" }}
          >
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's Talk Fashion
          </h2>

          <p className="text-gray-500 mt-4">
            Have a question? We'd love to hear from you.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div
            className="rounded-[35px] p-8 md:p-10"
            style={{ backgroundColor: "#800080" }}
          >

            <h3 className="text-3xl font-bold text-white mb-5">
              Get In Touch
            </h3>

            <p className="text-purple-100 leading-7 mb-8">
              Whether you have a question about our collection,
              an order or anything else, our team is ready to help.
            </p>

            <div className="space-y-6 text-white">

              <div className="flex items-center gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-sm text-purple-200">
                    Email
                  </p>
                  <p>hello@bellasteps.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-sm text-purple-200">
                    Phone
                  </p>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-sm text-purple-200">
                    Location
                  </p>
                  <p>New Delhi, India</p>
                </div>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10">

              {["Instagram", "Facebook", "Pinterest"].map(
                (social) => (
                  <button
                    key={social}
                    className="px-4 py-2 rounded-full
                               bg-white/10 hover:bg-[#FF00FF]
                               transition duration-300 text-sm"
                  >
                    {social}
                  </button>
                )
              )}

            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">

            <div>
              <label className="block font-semibold mb-2">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-5 py-4 rounded-2xl
                           border border-gray-200
                           outline-none
                           focus:ring-2 focus:ring-[#FF00FF]"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded-2xl
                           border border-gray-200
                           outline-none
                           focus:ring-2 focus:ring-[#FF00FF]"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full px-5 py-4 rounded-2xl
                           border border-gray-200
                           outline-none resize-none
                           focus:ring-2 focus:ring-[#FF00FF]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full
                         text-white font-bold text-lg
                         hover:scale-[1.02]
                         transition duration-300 shadow-lg"
              style={{ backgroundColor: "#FF00FF" }}
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;