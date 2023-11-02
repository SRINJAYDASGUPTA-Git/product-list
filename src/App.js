import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { fetchFromAPI } from "./api/fetchFromAPI";
const fakeProd = await fetchFromAPI("products");

function App() {
  return (
    <div className="text-center text-lg p-1 ">
      <ProductList products={fakeProd} />
    </div>
  );
}

export default App;
