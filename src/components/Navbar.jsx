import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Collection", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold"
          style={{ color: "#800080" }}
        >
          Bella<span style={{ color: "#FF00FF" }}>Steps</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium text-gray-700 hover:text-[#FF00FF] transition duration-300"
            >
              {item}
            </a>
          ))}

          <button
            className="px-5 py-2 rounded-full text-white font-semibold
                       bg-[#800080] hover:bg-[#FF00FF]
                       transition duration-300 shadow-md"
          >
            Shop Now
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          style={{ color: "#800080" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 gap-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="font-medium text-gray-700 hover:text-[#FF00FF]"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                window.open("https://www.amazon.in", "_blank");
              }}
              className="w-full py-2 rounded-full text-white font-semibold bg-[#800080]"
            >
              Shop Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
