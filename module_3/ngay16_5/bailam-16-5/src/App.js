import logo from './logo.svg';
import './App.css';
import React from 'react';
// import FormRegister from './components2/formRegister';
// import Example1 from "./components/Example1";
import HelloReact from "./BtapTH/HelloReact";
import TheName from "./BtapTH/TheName";
import ShowAge from "./BtapTH/ShowAge";
import Greeting from "./BtapTH/Greeting";
import Parent from "./BtapTH/Bai5/Parent";
import LoginStatus from "./BtapTH/LoginStatus";
import PostList from "./BtapTH/Bai7/PostList";
import SearchBar from "./BtapTH/SearchBar";
import Alert from "./BtapTH/Alert";
import Navbar from "./BtapTH/Bai10/Navbar";
import ContactForm from "./BtapTH/Bai11/ContactForm";
import Welcome from "./BTapTrenJames/Welcome";
import AddComponent from "./BTapTrenJames/AddComponent";
import AddComponent1 from "./BTapTrenJames/AddComponent1";
import Alert1 from "./BTapTrenJames/Alert1";
import StudentInfoComponent from "./BTapTrenJames/StudentInfoComponent";

function App() {

    // Bài 10
    // const menuLinks = ['Trang chủ', 'Giới thiệu', 'Sản phẩm', 'Liên hệ'];

  return (
    // <Example1 />
    // <FormRegister />
    // <HelloReact /> //Bài 1

    //Bài 2
    // <div>
    //   <TheName name="Dương nè!!!!!!" />
    // </div>

    //Bài 3
    // <div>
    //   <ShowAge age={21} />
    // </div>

      //Bài 4
    // <div>
    //   <Greeting message="Xin chào heheh!" />
    // </div>


      //Bài 5
      // <Parent />


      // Bài6
    // <div>
    //   <LoginStatus isLoggedIn={true} />
    //   <LoginStatus isLoggedIn={false} />
    // </div>

    // Bài 7
    // <PostList />

      // Bài 8
      // <SearchBar />


      //Bài 9
    // <div>
    //   <Alert1 type="success" message="Thành công!" />
    //   <Alert1 type="warning" message="Cảnh báo: Kiểm tra lại thông tin!" />
    //   <Alert1 type="error" message="Lỗi: Không thể kết nối máy chủ!" />
    // </div>

      // Bài 10
    //   <div>
    //   <Navbar links={menuLinks} />
    // </div>

      // Bài 11
      //   <ContactForm />


      // thực hành trên James
      // Sử dụng Props trong Component
      // <Welcome name="Admin" />

      //Xây dựng Class component
      // <AddComponent firstNumber={1} secondNumber={2} />

      //Xây dựng Function component
      //   <AddComponent1 firstNumber={2} secondNumber={3} />

      //Xây dựng Alert1 component
      //   <Alert1 text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />


      //Xây dựng component hiển thị danh sách sinh viên
      <StudentInfoComponent />







  );
}

export default App;
