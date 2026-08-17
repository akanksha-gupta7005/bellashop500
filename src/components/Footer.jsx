import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white py-10"
      style={{ backgroundColor: "#800080" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8 items-center">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-extrabold">
              Bella
              <span style={{ color: "#FFB8FF" }}>
                Steps
              </span>
            </h2>

            <p className="text-purple-200 mt-3">
              Walk beautifully. Walk confidently.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 md:justify-center">

            <a
              href="#home"
              className="hover:text-[#FFB8FF] transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-[#FFB8FF] transition"
            >
              About
            </a>

            <a
              href="#collection"
              className="hover:text-[#FFB8FF] transition"
            >
              Collection
            </a>

            <a
              href="#contact"
              className="hover:text-[#FFB8FF] transition"
            >
              Contact
            </a>

          </div>

          {/* Social */}
          <div className="flex gap-3 md:justify-end">

            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF00FF] transition">
              IG
            </button>

            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF00FF] transition">
              FB
            </button>

            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF00FF] transition">
              PI
            </button>

          </div>

        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-purple-200 text-sm">
            © 2026 BellaSteps. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;