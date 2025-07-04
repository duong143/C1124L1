import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import Product from './components/Product';
import Home from './components/Home';
import Contact from './components/Contact';
import MainLayout from './components/MainLayout';
import ProductList from "./BTTH/Bai2/ProductList";
import ProductDetail from "./BTTH/Bai2/ProductDetail";
import Detail2 from "./BTTH/Bai3/Detail2";
import Product2 from "./BTTH/Bai3/Product2";
import Contact2 from "./BTTH/Bai3/Contact2";
import MainLayout2 from "./BTTH/Bai3/MainLayout2";
import NotFound from "./BTTH/Bai4/NotFound";
import About from "./components/About";
import Category from "./BtapJames/Category";
import Product3 from "./BtapJames/Product3";
import Login_James from "./BtapJames/Bai1_router1/Login_James";
import Home_James from "./BtapJames/Bai1_router1/Home_James";
import Login_james2 from "./BtapJames/Bai2_router2/Login_james2";
import Employee from "./BtapJames/Bai2_router2/Employee";
import EmployeeDetail from "./BtapJames/Bai2_router2/EmployeeDetail";

function App() {
  return (

      // bài 1
    // <div>
    //   <h1>Demo react router</h1>
    //
    //   <nav>
    //     <NavLink to="/home">Home</NavLink> | {" "}
    //     <NavLink to="/main">Main</NavLink>
    //   </nav>
    //
    //   <Routes>
    //     <Route path='/main' element={<MainLayout />}>
    //       <Route index element={<Product />}></Route>
    //       <Route path='/main/contact' element={<Contact />}></Route>
    //       <Route path='/main/product' element={<Product />}></Route>
    //     </Route>
    //     <Route path='/home' element={<Home />}></Route>
    //   </Routes>

    // bài 2
    //     <div>
    //           <h1>Routing động - Product</h1>
    //           <nav>
    //             <NavLink to="/products" style={{ margin: '0 10px' }}>Danh sách sản phẩm</NavLink>
    //           </nav>
    //
    //           <Routes>
    //             <Route path="/products" element={<ProductList />} />
    //             <Route path="/product/:id" element={<ProductDetail />} />
    //             <Route path="*" element={<h2>Không tìm thấy trang</h2>} />
    //           </Routes>
    //         </div>
    //       );



  //     // bài 3
  //     <div className="container mt-4">
  //     <h1 className="text-center mb-4">Nested Routes với Outlet</h1>
  //     <nav className="mb-3">
  //       <NavLink to="/main" className="btn btn-primary mr-2">Vào MainLayout</NavLink>
  //     </nav>
  //
  //     <Routes>
  //       <Route path="/main" element={<MainLayout2 />}>
  //         <Route path="product" element={<Product2 />} />
  //         <Route path="contact" element={<Contact2 />} />
  //         <Route path="detail" element={<Detail2 />} />
  //       </Route>
  //       <Route path="*" element={<h3>Trang không tồn tại</h3>} />
  //     </Routes>
  //   </div>
  // );



      //bài 4
// <div className="container mt-4">
//       <h1>Website đơn giản</h1>
//       <nav>
//         <NavLink to="/" className="btn btn-link">Home</NavLink>
//         <NavLink to="/about" className="btn btn-link">About</NavLink>
//         <NavLink to="/contact" className="btn btn-link">Contact</NavLink>
//       </nav>
//
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//
//         {/* Route cuối cùng - xử lý mọi đường dẫn không hợp lệ */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );

// bài tập james
//       Router 2

  //     <Routes>
  //       <Route path="/" element={<Category />} />
  //       <Route path="/product/:categoryId" element={<Product3 />} />
  //     </Routes>
  // );


      // Router 3

  //     <Routes>
  //       <Route path="/" element={<Category />} />
  //       <Route path="/product" element={<Product />} />
  //     </Routes>
  // );

      // bài 1 router1 james
  //       <Routes>
  //     <Route path="/" element={<Login_James />} />
  //     <Route path="/home" element={<Home_James />} />
  //   </Routes>
  // );



  //      bài 2 james
      <Routes>
      <Route path="/" element={<Login_james2 />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/employee-detail" element={<EmployeeDetail />} />
    </Routes>
  );








      {/* <nav>
        <NavLink to="/home">Home</NavLink> | {" "}
        <NavLink to="/product">Product</NavLink> | {" "}
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route index path='/' element={<Product />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<h1>Page not found!</h1>} />
      </Routes> */}
  // );
}

export default App;