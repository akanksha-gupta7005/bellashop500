import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      className="bg-white rounded-3xl overflow-hidden shadow-md
                 hover:shadow-2xl hover:-translate-y-2
                 transition-all duration-300 group"
    >

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover
                     group-hover:scale-110 transition duration-500"
        />

        <span
          className="absolute top-4 left-4 px-4 py-1
                     rounded-full text-sm font-semibold
                     text-white"
          style={{ backgroundColor: "#800080" }}
        >
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex justify-between items-start gap-3">

          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {product.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {product.description}
            </p>
          </div>

          <span
            className="font-bold text-lg whitespace-nowrap"
            style={{ color: "#FF00FF" }}
          >
            ₹{product.price}
          </span>

        </div>

        <div className="flex items-center justify-between mt-5">

          <span className="text-yellow-500">
            ★★★★★
          </span>

          <button
            className="px-5 py-2 rounded-full text-white
                       font-semibold hover:scale-105
                       transition duration-300"
            style={{ backgroundColor: "#800080" }}
          >
            Shop Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;