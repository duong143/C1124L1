// import logo from './logo.svg';
// import './App.css';
// import FormSimple from "./ThucHanh/FormSimple";
// import GiftForm from "./ThucHanh/GiftForm";
// import NewsletterForm from "./BTTH/NewsletterForm";
// import CommentForm from "./BTTH/CommentForm";
// import PersonalInfoForm from "./BTTH/PersonalInfoForm";
// import FavoriteFoodForm from "./BTTH/FavoriteFoodForm";
// import AdvancedRegisterForm from "./BTTH/AdvancedRegisterForm";
// import RegisterCourseForm from "./BTTH/RegisterCourseForm";
// import RequestConsultForm from "./BTTH/RequestConsultForm";
// import BirthdayCakeForm from "./BTTH/BirthdayCakeForm";
// import ScholarshipForm from "./BTTH/ScholarshipForm";
// import ProductReviewForm from "./BTTH/ProductReviewForm";
//
// function App() {
//   return (
//     // <FormSimple />
//     //   <GiftForm />
//       //bài 1
//       // <NewsletterForm />
//
//       // bài 2
//       // <CommentForm />
//
//       // bài 3
//       // <PersonalInfoForm />
//
//       //bài 4
//       // <FavoriteFoodForm />
//
//       // bài 5
//       // <AdvancedRegisterForm />
//
//       // bài 6
//       // <RegisterCourseForm />
//
//       //BÀI 7
//       // <RequestConsultForm />
//
//       // bài 8
//       // <BirthdayCakeForm />
//
//       //bài 9
//       // <ScholarshipForm />
//
//       //bài 10
//       // <ProductReviewForm />
//   );
// }
//
// export default App;


// bài làm trên James
// Form đăng ký tài khoản mới
// import React, { useState } from "react";
// import "./App.css";
//
// export default function App() {
//   const [form, setForm] = useState({});
//
//   function handleChange(event) {
//     setForm({
//       ...form,
//       [event.target.name]: event.target.value
//     });
//   }
//
//   function handleSubmit() {
//     const isValid =
//       form.username && form.email && form.password && form.confirmPassword;
//     alert(isValid ? "Sign in success!!!" : "Please fill out all the fields!!!");
//   }
//
//   return (
//     <div>
//       <h1>Sign up</h1>
//       <form>
//         <div className="custom-input">
//           <label>Username </label>
//           <input
//             name="username"
//             value={form.username || ""}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="custom-input">
//           <label>Email </label>
//           <input
//             name="email"
//             value={form.email || ""}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="custom-input">
//           <label>Password </label>
//           <input
//             type="password"
//             name="password"
//             value={form.password || ""}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="custom-input">
//           <label>Confirm password </label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={form.confirmPassword || ""}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="button" onClick={handleSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

//Validate Form đăng ký
// import React, { useState } from "react";
// import "./App.css";
//
// export default function App() {
//   const MESSAGE_ERROR = {
//     username: "Username error",
//     email: "Email error",
//     password: "Password error",
//     confirmPassword: "Password must be the same"
//   };
//
//   const REGEX = {
//     username: /^[a-zA-Z]{2,}$/,
//     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//     password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
//   };
//
//   const [form, setForm] = useState({});
//
//   function handleChange(event) {
//     let error = "";
//     if (event.target.name === "password") {
//       if (form.confirmPassword && form.confirmPassword.value) {
//         error =
//           event.target.value === form.confirmPassword.value
//             ? ""
//             : MESSAGE_ERROR[event.target.name];
//       } else {
//         error = REGEX[event.target.name].test(event.target.value)
//           ? ""
//           : MESSAGE_ERROR[event.target.name];
//       }
//     } else if (event.target.name === "confirmPassword") {
//       error =
//         event.target.value === form.password.value
//           ? ""
//           : MESSAGE_ERROR[event.target.name];
//     } else {
//       error = REGEX[event.target.name].test(event.target.value)
//         ? ""
//         : MESSAGE_ERROR[event.target.name];
//     }
//     setForm({
//       ...form,
//       [event.target.name]: { value: event.target.value, error: error }
//     });
//   }
//
//   function handleSubmit() {
//     const isFilled =
//       form.username &&
//       form.username.value &&
//       form.email &&
//       form.email.value &&
//       form.password &&
//       form.password.value &&
//       form.confirmPassword &&
//       form.confirmPassword.value;
//     const isError =
//       isFilled &&
//       (form.username.error ||
//         form.email.error ||
//         form.password.error ||
//         form.confirmPassword.error);
//
//     alert(
//       isFilled && !isError
//         ? "Sign up successfully!!!"
//         : "Please fill out all the fields!!!"
//     );
//   }
//
//   return (
//     <div>
//       <h1>Sign up</h1>
//       <form>
//         <div
//           className={`custom-input ${form.username &&
//             form.username.error &&
//             "custom-input-error"}`}
//         >
//           <label>Username </label>
//           <input
//             name="username"
//             value={(form.username && form.username.value) || ""}
//             onChange={handleChange}
//           />
//           {form.username && form.username.error && (
//             <p className="error">{form.username.error}</p>
//           )}
//         </div>
//         <div
//           className={`custom-input ${form.email &&
//             form.email.error &&
//             "custom-input-error"}`}
//         >
//           <label>Email </label>
//           <input
//             name="email"
//             value={(form.email && form.email.value) || ""}
//             onChange={handleChange}
//           />
//           {form.email && form.email.error && (
//             <p className="error">{form.email.error}</p>
//           )}
//         </div>
//         <div
//           className={`custom-input ${form.password &&
//             form.password.error &&
//             "custom-input-error"}`}
//         >
//           <label>Password </label>
//           <input
//             type="password"
//             name="password"
//             value={(form.password && form.password.value) || ""}
//             onChange={handleChange}
//           />
//           {form.password && form.password.error && (
//             <p className="error">{form.password.error}</p>
//           )}
//         </div>
//         <div
//           className={`custom-input ${form.confirmPassword &&
//             form.confirmPassword.error &&
//             "custom-input-error"}`}
//         >
//           <label>Confirm password </label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={(form.confirmPassword && form.confirmPassword.value) || ""}
//             onChange={handleChange}
//           />
//           {form.confirmPassword && form.confirmPassword.error && (
//             <p className="error">{form.confirmPassword.error}</p>
//           )}
//         </div>
//         <button type="button" onClick={handleSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// Validate Form Index
// import React, { useState } from "react";
// import "./App.css";
//
// export default function App() {
//   const MESSAGE_ERROR = {
//     email: "Email error",
//     password: "Password error"
//   };
//
//   const REGEX = {
//     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//     password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
//   };
//
//   const [form, setForm] = useState({});
//
//   function handleChange(event) {
//     let error = REGEX[event.target.name].test(event.target.value)
//       ? ""
//       : MESSAGE_ERROR[event.target.name];
//     setForm({
//       ...form,
//       [event.target.name]: { value: event.target.value, error: error }
//     });
//   }
//
//   function handleSubmit() {
//     const isFilled =
//       form.email && form.email.value && form.password && form.password.value;
//     const isError = isFilled && (form.email.error || form.password.error);
//     alert(
//       isFilled && !isError
//         ? "Index in successfully!!!"
//         : "Please fill out all the fields!!!"
//     );
//   }
//
//   return (
//     <div>
//       <h1>Index</h1>
//       <form>
//         <div
//           className={`custom-input ${form.email &&
//             form.email.error &&
//             "custom-input-error"}`}
//         >
//           <label>Email </label>
//           <input
//             name="email"
//             value={(form.email && form.email.value) || ""}
//             onChange={handleChange}
//           />
//           {form.email && form.email.error && (
//             <p className="error">Email error</p>
//           )}
//         </div>
//         <div
//           className={`custom-input ${form.password &&
//             form.password.error &&
//             "custom-input-error"}`}
//         >
//           <label>Password </label>
//           <input
//             type="password"
//             name="password"
//             value={(form.password && form.password.value) || ""}
//             onChange={handleChange}
//           />
//           {form.password && form.password.error && (
//             <p className="error">Password error</p>
//           )}
//         </div>
//         <button type="button" onClick={handleSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }


//Validate Form Index with Formik
// import React, { useState } from "react";
// import { Formik } from "formik";
// import "./App.css";
//
// export default function App() {
//   const REGEX = {
//     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
//   };
//
//   const [form, setForm] = useState({});
//
//   function handleChange(event) {
//     setForm({
//       ...form,
//       [event.target.name]: event.target.value
//     });
//   }
//
//   function handleValidate() {
//     const errors = {};
//     if (!form.email) {
//       errors.email = "Required";
//     } else if (!REGEX.email.test(form.email)) {
//       errors.email = "Invalid email address";
//       console.log("code");
//     }
//     if (!form.password) {
//       errors.password = "Required";
//     }
//     return errors;
//   }
//
//   function handleSubmit() {
//     alert("Index in successfully!!!");
//   }
//
//   return (
//     <div>
//       <h1>Sign up</h1>
//       <Formik
//         initialValues={form}
//         validate={handleValidate}
//         onSubmit={handleSubmit}
//       >
//         {({ errors, handleSubmit }) => (
//           <form onSubmit={handleSubmit}>
//             <div
//               className={`custom-input ${
//                 errors.email ? "custom-input-error" : ""
//               }`}
//             >
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email || ""}
//                 onChange={handleChange}
//               />
//               <p className="error">{errors.email}</p>
//             </div>
//             <div
//               className={`custom-input ${
//                 errors.password ? "custom-input-error" : ""
//               }`}
//             >
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={form.password || ""}
//                 onChange={handleChange}
//               />
//               <p className="error">{errors.password}</p>
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// Tạo form liên hệ
// import React, { useState } from "react";
// import { Formik } from "formik";
// import "./App.css";
//
// function App() {
//   const REGEX = {
//     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
//   };
//
//   const [form, setForm] = useState({});
//
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };
//
//   const handleValidate = (values) => {
//     const errors = {};
//
//     if (!values.name) {
//       errors.name = "Required";
//     }
//
//     if (!values.email) {
//       errors.email = "Required";
//     } else if (!REGEX.email.test(values.email)) {
//       errors.email = "Invalid email address";
//     }
//
//     if (!values.phone) {
//       errors.phone = "Required";
//     }
//
//     return errors;
//   };
//
//   const handleSubmit = () => {
//     alert("Add contact successfully!!!");
//   };
//
//   return (
//     <div className="App">
//       <h1>Add Contact</h1>
//       <Formik
//         initialValues={{
//           name: "",
//           email: "",
//           phone: ""
//         }}
//         validate={handleValidate}
//         onSubmit={handleSubmit}
//       >
//         {({ values, errors, touched, handleChange, handleSubmit }) => (
//           <form onSubmit={handleSubmit}>
//             <div className={`custom-input ${errors.name && touched.name ? "custom-input-error" : ""}`}>
//               <label htmlFor="name">Name</label>
//               <input
//                 name="name"
//                 value={values.name}
//                 onChange={handleChange}
//               />
//               {errors.name && touched.name && <p className="error">{errors.name}</p>}
//             </div>
//
//             <div className={`custom-input ${errors.email && touched.email ? "custom-input-error" : ""}`}>
//               <label htmlFor="email">Email</label>
//               <input
//                 name="email"
//                 value={values.email}
//                 onChange={handleChange}
//               />
//               {errors.email && touched.email && <p className="error">{errors.email}</p>}
//             </div>
//
//             <div className={`custom-input ${errors.phone && touched.phone ? "custom-input-error" : ""}`}>
//               <label htmlFor="phone">Phone</label>
//               <input
//                 name="phone"
//                 value={values.phone}
//                 onChange={handleChange}
//               />
//               {errors.phone && touched.phone && <p className="error">{errors.phone}</p>}
//             </div>
//
//             <button type="submit">Submit</button>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// }
//
// export default App;

//Ứng dụng quản lý sách
// import React, { useState } from "react";
// import { Formik } from "formik";
// import "./App.css";
//
// function App() {
//   const [books, setBooks] = useState([]);
//   const [form, setForm] = useState({});
//   const [indexSelected, setIndexSelected] = useState(-1);
//
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };
//
//   const handleValidate = (values) => {
//     const errors = {};
//     if (!values.title) {
//       errors.title = "Required";
//     }
//     if (!values.number) {
//       errors.number = "Required";
//     } else if (isNaN(values.number)) {
//       errors.number = "Must be a number";
//     }
//     return errors;
//   };
//
//   const handleSelect = (book, index) => {
//     setForm(book);
//     setIndexSelected(index);
//   };
//
//   const handleDelete = (index) => {
//     const newBooks = [...books];
//     newBooks.splice(index, 1);
//     setBooks(newBooks);
//   };
//
//   const handleSubmit = () => {
//     const newBooks = [...books];
//     if (indexSelected > -1) {
//       newBooks.splice(indexSelected, 1, form);
//     } else {
//       newBooks.push(form);
//     }
//     setBooks(newBooks);
//     setForm({});
//     setIndexSelected(-1);
//   };
//
//   return (
//     <div className="container">
//       <h1>Quản lý sách</h1>
//       <Formik
//         initialValues={form}
//         enableReinitialize
//         validate={handleValidate}
//         onSubmit={handleSubmit}
//       >
//         {({ handleSubmit, errors }) => (
//           <form onSubmit={handleSubmit}>
//             <div className={`custom-input ${errors.title ? "custom-input-error" : ""}`}>
//               <label>Tiêu đề:</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={form.title || ""}
//                 onChange={handleChange}
//               />
//               <p className="error">{errors.title}</p>
//             </div>
//
//             <div className={`custom-input ${errors.number ? "custom-input-error" : ""}`}>
//               <label>Số lượng:</label>
//               <input
//                 type="text"
//                 name="number"
//                 value={form.number || ""}
//                 onChange={handleChange}
//               />
//               <p className="error">{errors.number}</p>
//             </div>
//
//             <button className="width-auto" type="submit">
//               {indexSelected === -1 ? "Thêm sách" : "Cập nhật"}
//             </button>
//           </form>
//         )}
//       </Formik>
//
//       <h2>Danh sách sách</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Tiêu đề</th>
//             <th>Số lượng</th>
//             <th>Hành động</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((b, i) => (
//             <tr key={i}>
//               <td>{b.title}</td>
//               <td>{b.number}</td>
//               <td className="flex">
//                 <button onClick={() => handleSelect(b, i)}>Edit</button>
//                 <button onClick={() => handleDelete(i)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
//
// export default App;

//Tạo form soạn thảo Email (with validate/upload attachments)
// import React, { useState } from "react";
// import { Formik } from "formik";
// import "./App.css";
//
// function App() {
//   const REGEX = {
//     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//   };
//
//   const [form, setForm] = useState({});
//   const [file, setFile] = useState(null);
//
//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === "file") {
//       setFile(files[0]);
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };
//
//   const handleValidate = (values) => {
//     const errors = {};
//     if (!values.email) {
//       errors.email = "Required";
//     } else if (!REGEX.email.test(values.email)) {
//       errors.email = "Invalid email address";
//     }
//
//     if (!values.title) {
//       errors.title = "Required";
//     }
//
//     if (!values.message) {
//       errors.message = "Required";
//     }
//
//     return errors;
//   };
//
//   const handleSubmit = () => {
//     alert("Sent successfully!!!");
//     console.log("Email data:", form);
//     if (file) {
//       console.log("Attached file:", file.name);
//     }
//     setForm({});
//     setFile(null);
//   };
//
//   return (
//     <div className="container">
//       <h1>Soạn thảo và gửi mail</h1>
//       <Formik
//         initialValues={form}
//         enableReinitialize
//         validate={handleValidate}
//         onSubmit={handleSubmit}
//       >
//         {({ handleSubmit, errors }) => (
//           <form onSubmit={handleSubmit}>
//             {/* Email */}
//             <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
//               <label>To:</label>
//               <input
//                 type="text"
//                 name="email"
//                 value={form.email || ""}
//                 onChange={handleChange}
//               />
//               <p className="error">{errors.email}</p>
//             </div>
//
//             {/* Title */}
//             <div className={`custom-input ${errors.title ? "custom-input-error" : ""}`}>
//               <label>Title:</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={form.title || ""}
//                 onChange={handleChange}
//               />
//               <p className="error">{errors.title}</p>
//             </div>
//
//             {/* Message */}
//             <div className={`custom-input ${errors.message ? "custom-input-error" : ""}`}>
//               <label>Message:</label>
//               <textarea
//                 name="message"
//                 value={form.message || ""}
//                 onChange={handleChange}
//                 rows="5"
//               />
//               <p className="error">{errors.message}</p>
//             </div>
//
//             {/* File upload */}
//             <div className="custom-input">
//               <label>Attach file:</label>
//               <input type="file" onChange={handleChange} />
//               {file && <p>Selected file: {file.name}</p>}
//             </div>
//
//             <button type="submit">Submit</button>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// }
//
// export default App;
// Tạo form khai báo y tế (with validate)
import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

function App() {
  const SEX_LIST = [
    { label: "Nam", value: "male" },
    { label: "Nữ", value: "female" },
  ];

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const updatedValue = type === "checkbox" ? !form[name] : value;
    setForm({ ...form, [name]: updatedValue });
  };

  const handleValidate = (values) => {
    const errors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!values.name) errors.name = "Required";
    if (!values.number) errors.number = "Required";
    if (!values.birthYear) {
      errors.birthYear = "Required";
    } else if (Number(values.birthYear) <= 1900) {
      errors.birthYear = "Năm sinh phải lớn hơn 1900";
    }
    if (!values.nationality) errors.nationality = "Required";
    if (!values.province) errors.province = "Required";
    if (!values.district) errors.district = "Required";
    if (!values.ward) errors.ward = "Required";
    if (!values.address) errors.address = "Required";
    if (!values.phone) errors.phone = "Required";
    if (!values.email) {
      errors.email = "Required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const handleSubmit = () => {
    alert("Khai báo thành công!");
  };

  return (
    <div className="container">
      <h2>Khai báo thông tin y tế</h2>
      <Formik
        initialValues={form}
        enableReinitialize
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            {/** Họ tên */}
            <div className={`custom-input ${errors.name ? "custom-input-error" : ""}`}>
              <label>Họ tên</label>
              <input name="name" value={form.name || ""} onChange={handleChange} />
              <p className="error">{errors.name}</p>
            </div>

            {/** CMND / Hộ chiếu */}
            <div className={`custom-input ${errors.number ? "custom-input-error" : ""}`}>
              <label>Số hộ chiếu / CMND</label>
              <input name="number" value={form.number || ""} onChange={handleChange} />
              <p className="error">{errors.number}</p>
            </div>

            {/** Năm sinh */}
            <div className={`custom-input ${errors.birthYear ? "custom-input-error" : ""}`}>
              <label>Năm sinh</label>
              <input name="birthYear" type="number" value={form.birthYear || ""} onChange={handleChange} />
              <p className="error">{errors.birthYear}</p>
            </div>

            {/** Giới tính */}
            <div className="custom-input">
              <label>Giới tính</label>
              <div className="flex">
                {SEX_LIST.map((sex) => (
                  <label key={sex.value} className="width-auto" style={{ marginRight: "10px" }}>
                    <input
                      type="radio"
                      name="gender"
                      value={sex.value}
                      checked={form.gender === sex.value}
                      onChange={handleChange}
                    />{" "}
                    {sex.label}
                  </label>
                ))}
              </div>
            </div>

            {/** Quốc tịch */}
            <div className={`custom-input ${errors.nationality ? "custom-input-error" : ""}`}>
              <label>Quốc tịch</label>
              <input name="nationality" value={form.nationality || ""} onChange={handleChange} />
              <p className="error">{errors.nationality}</p>
            </div>

            {/** Công ty, bộ phận */}
            <div className="custom-input">
              <label>Công ty làm việc</label>
              <input name="company" value={form.company || ""} onChange={handleChange} />
            </div>
            <div className="custom-input">
              <label>Bộ phận làm việc</label>
              <input name="department" value={form.department || ""} onChange={handleChange} />
            </div>

            {/** Có thẻ BHYT */}
            <div className="custom-input">
              <label>
                <input type="checkbox" name="hasInsurance" checked={form.hasInsurance || false} onChange={handleChange} />
                &nbsp; Có thẻ bảo hiểm y tế
              </label>
            </div>

            {/** Địa chỉ */}
            <div className={`custom-input ${errors.province ? "custom-input-error" : ""}`}>
              <label>Tỉnh thành</label>
              <input name="province" value={form.province || ""} onChange={handleChange} />
              <p className="error">{errors.province}</p>
            </div>
            <div className={`custom-input ${errors.district ? "custom-input-error" : ""}`}>
              <label>Quận / huyện</label>
              <input name="district" value={form.district || ""} onChange={handleChange} />
              <p className="error">{errors.district}</p>
            </div>
            <div className={`custom-input ${errors.ward ? "custom-input-error" : ""}`}>
              <label>Phường / xã</label>
              <input name="ward" value={form.ward || ""} onChange={handleChange} />
              <p className="error">{errors.ward}</p>
            </div>
            <div className={`custom-input ${errors.address ? "custom-input-error" : ""}`}>
              <label>Số nhà, phố, tổ dân phố / thôn / đội</label>
              <input name="address" value={form.address || ""} onChange={handleChange} />
              <p className="error">{errors.address}</p>
            </div>

            {/** Điện thoại */}
            <div className={`custom-input ${errors.phone ? "custom-input-error" : ""}`}>
              <label>Điện thoại</label>
              <input name="phone" value={form.phone || ""} onChange={handleChange} />
              <p className="error">{errors.phone}</p>
            </div>

            {/** Email */}
            <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
              <label>Email</label>
              <input name="email" value={form.email || ""} onChange={handleChange} />
              <p className="error">{errors.email}</p>
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
