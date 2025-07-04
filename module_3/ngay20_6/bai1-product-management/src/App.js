import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ProductList from "./pages/ProductList";
import EditProduct from "./pages/EditProduct";
import ViewProduct from "./pages/ViewProduct";
import NotFound from "./pages/NotFound";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/view/:id" element={<ViewProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
