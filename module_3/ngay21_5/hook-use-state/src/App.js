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
import Counter from "./BtapJames/Counter";
import Selector from "./BtapJames/Selector";
import MyClock from "./BtapJames/MyClock";
import Timer from "./BtapJames/Timer";
import Counter1 from "./BtapJames/Counter1";
import Counter2 from "./BtapJames/Counter2";


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



  //Xây dựng component Car selection
  // const carList = ['Toyota', 'Honda', 'Ford', 'BMW'];
  // const colorList = ['Red', 'Blue', 'Black', 'White'];
  //
  // const [selectedCar, setSelectedCar] = useState({
  //   car: carList[0],
  //   color: colorList[0]
  // });
  //
  // const handleCarChange = (e) => {
  //   const newCar = e.target.value;
  //   setSelectedCar(prevState => ({
  //     ...prevState,
  //     car: newCar
  //   }));
  // };
  //
  // const handleColorChange = (e) => {
  //   const newColor = e.target.value;
  //   setSelectedCar(prevState => ({
  //     ...prevState,
  //     color: newColor
  //   }));
  // };
  //




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
      // <FeatureToggle/>


      // Bài tập James
      // bài Triển khai useState
      // <Counter />

      //Triển khai useEffect
      // <Selector />

      //Triển khai HookCustom
      // <div className="Container">
      //   <MyClock />
      // </div>

      //Xây dựng component Car selection
    //     <div>
    //   <h1>Choose your car and color</h1>
    //
    //   <div>
    //     <label>Car: </label>
    //     <select value={selectedCar.car} onChange={handleCarChange}>
    //       {carList.map((car, index) => (
    //         <option key={index} value={car}>
    //           {car}
    //         </option>
    //       ))}
    //     </select>
    //   </div>
    //
    //   <div>
    //     <label>Color: </label>
    //     <select value={selectedCar.color} onChange={handleColorChange}>
    //       {colorList.map((color, index) => (
    //         <option key={index} value={color}>
    //           {color}
    //         </option>
    //       ))}
    //     </select>
    //   </div>
    //
    //   <h2>
    //     You selected a {selectedCar.color} – {selectedCar.car}
    //   </h2>
    // </div>

      //Xây dựng Component Timer
      //   <Timer />

      //Xây dựng Component Counter
      <div>
        <Counter1 />
        <Counter2 />

      </div>



  );
}

export default App;
