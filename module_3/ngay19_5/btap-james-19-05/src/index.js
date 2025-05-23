import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// bài Đếm số lần click vào Button tăng/giảm (State + event)
// bài Đổi màu nền component sau khi xuất hiện
// bài Hiện thông báo trước khi Component ẩn
// bài Kiểm tra User Login/Logout
// bài Component Expand/Collapse nội dung
//Xử lý sự kiện Login/Logout với form đăng nhập bằng Bootstrap
// bài Ứng dụng quản lý công việcTodo App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
