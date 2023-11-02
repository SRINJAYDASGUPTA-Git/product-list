import React from "react";

const Pagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex gap-2 cursor-pointer items-center justify-center">
      <button
        onClick={() => {
          if (currentPage > 1) {
            paginate(currentPage - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <span key={number} onClick={() => paginate(number)}>
          {number}
        </span>
      ))}
      <button
        onClick={() => {
          if (currentPage < pageNumbers.length) {
            paginate(currentPage + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
