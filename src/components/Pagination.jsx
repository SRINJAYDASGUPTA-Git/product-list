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
    <div className="flex gap-2 cursor-pointer items-center justify-center mt-5">
      <button
        onClick={() => {
          if (currentPage > 1) paginate(currentPage - 1);
          else paginate(pageNumbers.at(pageNumbers.length - 1));
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <div key={number}>
          {number === currentPage ? (
            <span
              onClick={() => {
                paginate(number);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="border border-black"
            >
              {number}
            </span>
          ) : (
            <span
              onClick={() => {
                paginate(number);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {number}
            </span>
          )}
        </div>
      ))}
      <button
        onClick={() => {
          if (currentPage < pageNumbers.length) {
            paginate(currentPage + 1);
          } else {
            paginate(1);
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
