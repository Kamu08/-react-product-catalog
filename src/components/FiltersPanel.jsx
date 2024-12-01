import React, { useState } from "react";

const FilterPanel = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
}) => {
  const [isMobilePanelVisible, setIsMobilePanelVisible] = useState(false);
  const [expandedSection, setExpandedSection] = useState("categories");

  const toggleMobilePanel = () => {
    setIsMobilePanelVisible(!isMobilePanelVisible);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="relative">
      {/* Show Filters Button for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 bg-indigo-500 text-white px-4 py-2 rounded shadow"
        onClick={toggleMobilePanel}
      >
        {isMobilePanelVisible ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Filter Panel */}
      <div
        className={`fixed md:static bg-white shadow-lg z-50 h-full md:h-auto w-3/4 md:w-auto transform ${
          isMobilePanelVisible ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300`}
      >
        {/* Accordion Section */}
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
                onChange={(e) => setSelectedCategory(e.target.value)}
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
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="">Sort by</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for Mobile View */}
      {isMobilePanelVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobilePanel}
        ></div>
      )}
    </div>
  );
};

export default FilterPanel;
