import React, { useState } from "react";

const FiltersPanel = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
  showFilters,
  toggleFilters, // Passed from Home
}) => {
  const [expandedSection, setExpandedSection] = useState("categories");

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div
      className={`fixed md:static bg-white shadow-lg z-50 h-full md:h-auto w-3/4 md:w-auto transform ${
        showFilters ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300`}
    >
      {/* Accordion Sections */}
      <div className="border-b">
        <button
          className="w-full text-left px-4 py-2 font-semibold bg-gray-100"
          onClick={() => toggleSection("categories")}
        >
          Categories
        </button>
        {expandedSection === "categories" && (
          <div className="px-4 py-2">
            <select
              className="w-full p-2 border rounded-md"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                toggleFilters(); // Close panel on selection
              }}
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="border-b">
        <button
          className="w-full text-left px-4 py-2 font-semibold bg-gray-100"
          onClick={() => toggleSection("price")}
        >
          Sort by Price
        </button>
        {expandedSection === "price" && (
          <div className="px-4 py-2">
            <select
              className="w-full p-2 border rounded-md"
              value={sortOrder}
              onChange={(e) => {
                setSortOrder(e.target.value);
                toggleFilters(); // Close panel on selection
              }}
            >
              <option value="">Sort by</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default FiltersPanel;
