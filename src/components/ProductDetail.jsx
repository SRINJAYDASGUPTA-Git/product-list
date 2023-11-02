import React from "react";
import { useParams } from "react-router-dom";
import { getProdById } from "../utils/getProdById";
import Rating from "./Rating";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProdById(parseInt(id));
  console.log(product.rating.rate);

  return (
    <div className="product_details-container">
      <div className="product_details-card shadow-xl shadow-slate-600">
        <img
          src={product.image}
          alt={product.title}
          className="product_details-img"
        />
        <div className="post_details-info text-start">
          <div className="flex flex-col flex-1 w-full base-bold">
            <span className="text-2xl p-4">{product.title}</span>
            <span className="body-medium p-4">{product.description}</span>
            <span className="text-2xl p-4">Price: ${product.price}</span>
          </div>
          <div className="flex gap-1 body-medium ms-5 p-1">
            {product.rating.rate}
            <Rating rating={product.rating.rate} /> {product.rating.count}{" "}
            ratings
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
