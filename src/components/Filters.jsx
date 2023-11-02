import React from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const categories = await fetchFromAPI("products/categories");
const Filters = ({ onCategoryChange, onSortChange }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          onChange={(e) => onCategoryChange(e.target.value)}
          className="bg-transparent border border-stone-900 rounded-xl"
        >
          <option value="all">All</option>
          {/*<option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option> */}
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className="flex gap-2">
        <label htmlFor="sort">Sort by Price:</label>
        <select
          id="sort"
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-transparent border border-stone-900 rounded-xl"
        >
          <option value="filter">Filter</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
