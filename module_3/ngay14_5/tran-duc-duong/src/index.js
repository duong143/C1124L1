// Nhúng tên của bạn vào React Element tạo bởi React.createElement
// import React from "react";
// import ReactDOM from "react-dom/client";
//
// const name = "Trần Đức Dương";
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
//
// root.render(
//   React.createElement("h1", { style: { textAlign: "center" } }, name)
// );


// Nhúng tên của bạn vào React Element tạo bởi JSX
// import ReactDOM from "react-dom/client";
//
// const name = "Trần Đức Dương";
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
//
// root.render(<h1 style={{ textAlign: "left" }}>{name}</h1>);

//Tạo Element thể hiện danh sách các loại quả
// import ReactDOM from "react-dom/client";
//
// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Apricot",
//   "Black rowan",
//   "Cranberry"
// ];
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
//
// root.render(
//   <div>
//     <h1>List of fruits</h1>
//     <ul>
//       {fruits.map(item => (
//         <li>{item}</li>
//       ))}
//     </ul>
//   </div>
// );


//Hiển thị thời gian hiện tại (dd/mm/yyyy – hh/mm/ss)
// import ReactDOM from "react-dom/client";
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
//
// const tick = () => {
//   root.render(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// };
//
// setInterval(tick, 1000);



// // Tạo Element thể hiện thông tin của Trình duyệt bạn đang sử dụng
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // Lấy thông tin trình duyệt
// const browserDetails = navigator.userAgent;
// // Tạo phần tử JSX để hiển thị
// const element = <h4>Browser's details: {browserDetails}</h4>;
// // Render ra UI
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

//Tạo Element thể hiện bảng thông tin các sinh viên trong lớp học
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
//
// const students = [
//   {
//     company: 'Alfreds Futterkiste',
//     contact: 'Maria Anders',
//     country: 'Germany'
//   },
//   {
//     company: 'Centro comercial Moctezuma',
//     contact: 'Francisco Chang',
//     country: 'Mexico'
//   },
//   {
//     company: 'Ernst Handel',
//     contact: 'Roland Mendel',
//     country: 'Austria'
//   },
//   {
//     company: 'Island Trading',
//     contact: 'Helen Bennett',
//     country: 'UK'
//   },
//   {
//     company: 'Laughing Bacchus Winecellars',
//     contact: 'Yoshi Tannamuri',
//     country: 'Canada'
//   },
//   {
//     company: 'Magazzini Alimentari Riuniti',
//     contact: 'Giovanni Rovelli',
//     country: 'Italy'
//   }
// ];
//
// // JSX bảng sinh viên
// const element = (
//   <div>
//     <h2>Students</h2>
//     <table>
//       <thead>
//         <tr>
//           <th>Company</th>
//           <th>Contact</th>
//           <th>Country</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students.map((student, index) => (
//           <tr key={index}>
//             <td>{student.company}</td>
//             <td>{student.contact}</td>
//             <td>{student.country}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

//Tạo Element thể hiện Profile Card (như hình minh hoạ)
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
//
// const element = (
//   <div className="container">
//     <div className="card">
//       <div className="card--header" />
//       <img
//         className="avatar"
//         src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         alt="avatar"
//       />
//       <div className="card--body">
//         <div>
//           <p className="text-header">Ruma Khan</p>
//           <p className="text-sub">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry
//           </p>
//           <button className="btn third">FOLLOW</button>
//         </div>
//       </div>
//     </div>
//   </div>
// );
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);



// Tạo Element thể hiện Sign in Form sử dụng Bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const element = (
  <div className="container d-flex align-items-center text-center">
    <div className="form-signin">
      <form>
        <img
          className="mb-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
          alt="Bootstrap logo"
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control email"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control password"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
      </form>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
