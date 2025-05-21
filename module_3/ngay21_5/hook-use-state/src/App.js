import logo from './logo.svg';
import './App.css';
import Example1 from "./ThucHanh/Example1";
import Example2 from "./ThucHanh/Example2";
import NewLettersForm from "./ThucHanh/NewLettersForm";
import Product from "./ThucHanh/Product";
import SearchBar from "./BTTH/B1_TimKiemNguoiDung/SearchBar";
import {useState} from "react";
import TodoList from "./BTTH/Bai2_QLyDanhSachCV/TodoList";
import TodoForm from "./BTTH/Bai2_QLyDanhSachCV/TodoForm";
import Cart from "./BTTH/B3_TangGiamSP/Cart";
import CommentSection from "./BTTH/B4_GuiBinhLuan/CommentSection";
import Login from "./BTTH/B5_Login/Login";
import MenuBar from "./BTTH/B6_ChuyenTrangBangMenu/MenuBar";
import RegisterPage from "./BTTH/B7_formDangKy/RegisterPage";
import FeatureToggle from "./BTTH/B8_BatTatTinhNang/FeatureToggle";


function App() {

  // bài 1
  // const users = ['Nguyễn Văn Anh',
  //     'Trần Thị Bình',
  //     'Lê Văn Cao',
  //     'Phạm Thị Dung'];
  //   const [keyword, setKeyword] = useState('');
  //
  //   // Lọc người dùng theo từ khóa
  //   const filteredUsers = users.filter(user =>
  //       user.toLowerCase().includes(keyword.toLowerCase())
  //   );

    // bài 2
    //     const [tasks, setTasks] = useState([]);
    //
    // const addTask = (newTask) => {
    //     if (newTask.trim() !== '') {
    //         setTasks([...tasks, newTask]);
    //     }
    // };

    // bài 3
    //  const [products, setProducts] = useState([
    //     { id: 1, name: 'Táo', quantity: 1 },
    //     { id: 2, name: 'Cam', quantity: 2 },
    //     { id: 3, name: 'Chuối', quantity: 0 }
    // ]);
    //
    // const updateQuantity = (id, delta) => {
    //     setProducts(products.map(product =>
    //         product.id === id
    //             ? { ...product, quantity: Math.max(0, product.quantity + delta) }
    //             : product
    //     ));
    // };

    // bài 4
    // const [comments, setComments] = useState([]);
    //
    // const addComment = (text) => {
    //     if (text.trim() !== '') {
    //         setComments([...comments, text]);
    //     }
    // };

  // bài 6
  // const [selected, setSelected] = useState('Home');







  return (
    // <Example1 />
    //   <Example2 />
    //   <NewLettersForm />
    //   <Product />

      // bài 1
      // <div>
      //       <h2>Tìm kiếm người dùng</h2>
      //       <SearchBar onKeywordChange={setKeyword} />
      //       <ul>
      //           {filteredUsers.map((user, index) => (
      //               <li key={index}>{user}</li>
      //           ))}
      //       </ul>
      //   </div>


      // baài 2
      //   <div>
      //       <h2>Quản lý danh sách công việc</h2>
      //       <TodoForm onAddTask={addTask} />
      //       <TodoList tasks={tasks} />
      //   </div>

      // bài 3
      // <div>
      //       <h2>Giỏ hàng</h2>
      //       <Cart products={products} onUpdateQuantity={updateQuantity} />
      //   </div>


      // bài 4
      // <div>
      //       <h2>Bình luận</h2>
      //       <CommentSection comments={comments} onAddComment={addComment} />
      //   </div>

      // bài 5
      // <Login/>


      // bài 6
    //   <div>
    //   <h2>Chuyển trang bằng Menu</h2>
    //   <MenuBar selected={selected} onSelect={setSelected} />
    // </div>

      // bài 7
      //   <RegisterPage/>

      // bài 8
      <FeatureToggle/>
  );
}

export default App;
