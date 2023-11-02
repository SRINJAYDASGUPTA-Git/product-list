import React from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const categories = await fetchFromAPI("products/categories");
console.log(categories);
const Filters = ({ onCategoryChange, onSortChange }) => {
  return (
    <div className="filters">
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" onChange={(e) => onCategoryChange(e.target.value)}>
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

      <label htmlFor="sort">Sort by Price:</label>
      <select id="sort" onChange={(e) => onSortChange(e.target.value)}>
        <option value="filter">Filter</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </div>
  );
};

export default Filters;
