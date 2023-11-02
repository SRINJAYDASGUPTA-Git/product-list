import React, { useState, useEffect } from "react";
import Product from "./Product";
import Filters from "./Filters";
import Pagination from "./Pagination";
import { fetchFromAPI } from "../api/fetchFromAPI";

const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleCategoryChange = async (category) => {
    const newFilteredProducts =
      category === "all"
        ? products
        : await fetchFromAPI(`products/category/${category}`);
    setFilteredProducts(newFilteredProducts);
    setCurrentPage(1);
  };

  const handleSortChange = (sortType) => {
    const sortedProducts = [...filteredProducts];
    if (sortType === "filter") {
      setFilteredProducts(sortedProducts);
      return;
    }
    sortedProducts.sort((a, b) =>
      sortType === "lowToHigh" ? a.price - b.price : b.price - a.price
    );
    setFilteredProducts(sortedProducts);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <h1 className="text-3xl">Product List</h1>
      <Filters
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
      />
      <div className="flex gap-10 flex-wrap space-between justify-center items-center w-full">
        {currentProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default ProductList;
