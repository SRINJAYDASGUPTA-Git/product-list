import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/Navbar";
const fakeProd = await fetchFromAPI("products");
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="text-center text-lg p-1 ">
        <Routes>
          <Route path="/" exact element={<ProductList products={fakeProd} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
