import React, { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Pink Elegance Heels",
    category: "Heels",
    price: 1999,
    description: "Elegant heels for special occasions.",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Classic White Sneakers",
    category: "Sneakers",
    price: 2499,
    description: "Comfortable sneakers for everyday style.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Elegant Pink Sandals",
    category: "Sandals",
    price: 1499,
    description: "Lightweight sandals with a stylish finish.",
    image:
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Comfort Flats",
    category: "Flats",
    price: 1299,
    description: "Simple and comfortable everyday flats.",
    image:
      "https://images.unsplash.com/photo-1535043934128-cf487d3c5d9b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Party Glam Heels",
    category: "Party Wear",
    price: 2999,
    description: "Beautiful heels for your special nights.",
    image:
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "Casual Fashion Shoes",
    category: "Sneakers",
    price: 1899,
    description: "Trendy shoes for your casual looks.",
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=80",
  },
];

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Heels",
    "Sandals",
    "Flats",
    "Sneakers",
    "Party Wear",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <section
      id="collection"
      className="py-24"
      style={{ backgroundColor: "#fff5ff" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <p
            className="uppercase tracking-[3px] font-semibold"
            style={{ color: "#FF00FF" }}
          >
            Our Collection
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Find Your Perfect Pair
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Explore our latest collection of fashionable footwear
            designed for every occasion.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold
                transition duration-300
                ${
                  activeCategory === category
                    ? "text-white shadow-lg"
                    : "bg-white text-gray-700 hover:text-[#FF00FF]"
                }`}
              style={
                activeCategory === category
                  ? { backgroundColor: "#800080" }
                  : {}
              }
            >
              {category}
            </button>
          ))}

        </div>

        {/* Products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Collection;