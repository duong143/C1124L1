import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Hello from "./BTAP_james/Hello";
import Home from "./BTAP_james/Home";
import Calculator from "./BTAP_james/Calculator";
import Home1 from "./BTAP_james/Home1";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;



// bài Đếm số lần click vào Button tăng/giảm (State + event)
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 0
//     };
//   }
//
//   increase = () => {
//     this.setState({ number: this.state.number + 1 });
//   };
//   decrease = () => {
//     this.setState({ number: this.state.number - 1 });
//   };
//
//   render() {
//     return (
//       <div style={{ textAlign: "center", padding: 30 }}>
//         <button onClick={this.decrease}>Decrease</button>
//         <span style={{ padding: 10 }}>{this.state.number}</span>
//         <button onClick={this.increase}>Increase</button>
//       </div>
//     );
//   }
// }
//
// export default App;

// bài Đổi màu nền component sau khi xuất hiện
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: 'black'
//     };
//   }
//
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ color: 'pink' });
//     }, 5000);
//   }
//
//   render() {
//     return (
//       <div>
//         <div
//           style={{
//             backgroundColor: this.state.color,
//             paddingTop: 20,
//             width: 400,
//             height: 80,
//             margin: 'auto'
//           }}
//         />
//       </div>
//     );
//   }
// }
//
// export default App;

// bài Hiện thông báo trước khi Component ẩn
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: true
//     };
//   }
//
//   delete = () => {
//     this.setState({ display: false });
//   };
//
//   render() {
//     let comp;
//     if (this.state.display) {
//       comp = <Hello />;
//     }
//     return (
//       <div style={{ textAlign: 'center' }}>
//         {comp}
//         <button onClick={this.delete}>
//           Delete the component
//         </button>
//       </div>
//     );
//   }
// }
//
// export default App;

// bài Kiểm tra User Login/Logout
// class App extends Component{
//   constructor (props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false
//     };
//   }
//
//   handleLogIn = () => {
//     this.setState({ isLoggedIn: true })
//   }
//
//   handleLogOut = () => {
//     this.setState({ isLoggedIn: false })
//   }
//
//   render () {
//     const { isLoggedIn } = this.state
//     if (isLoggedIn) return (<Home onLogOut={this.handleLogOut} />)
//     return (
//       <div style={{textAlign: 'center'}}>
//         <div>
//             <h1>Please Log in</h1>
//             <button onClick={this.handleLogIn}>Log in</button>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default App


//bài Component Expand/Collapse nội dung
// class App extends Component {
//   constructor(props) {
//     super(props);
//     // Khởi tạo state
//     this.state = {
//       isExpand: false
//     };
//   }
//
//   // Hàm xử lý toggle
//   handler = () => {
//     this.setState((prevState) => ({
//       isExpand: !prevState.isExpand
//     }));
//   }
//
//   render() {
//     return (
//       <div style={{ padding: '20px', fontFamily: 'Arial' }}>
//         <h1>Conditional Rendering</h1>
//         {
//           this.state.isExpand ? (
//             <div>
//               <p>
//                 Đây là phần nội dung giới thiệu. Ứng dụng này minh hoạ cách sử dụng điều kiện để hiển thị nội dung trong React class component.
//               </p>
//               <button onClick={this.handler}>Đóng giới thiệu</button>
//             </div>
//           ) : (
//             <button onClick={this.handler}>Xem giới thiệu</button>
//           )
//         }
//       </div>
//     );
//   }
// }
//
// export default App;

//bài Xây dựng ứng dụng máy tính đơn giản
// function App() {
//   return (
//     <div className="App">
//       <Calculator />
//     </div>
//   );
// }
//
// export default App;


//Xử lý sự kiện Login/Logout với form đăng nhập bằng Bootstrap
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       form: {
//         email: "",
//         password: "",
//         isRemember: false
//       },
//       isValid: false,
//       isLoggedIn: false
//     };
//   }
//
//   handleChange = (event) => {
//     this.setState((state) => {
//       const { form } = state;
//       form[event.target.name] = event.target.value;
//       return { form };
//     }, this.checkValidForm);
//   }
//
//   handleChangeCheckbox = () => {
//     this.setState((state) => {
//       const { form } = state;
//       form.isRemember = !form.isRemember;
//       return { form };
//     }, this.checkValidForm);
//   }
//
//   checkValidForm = () => {
//     const { email, password } = this.state.form;
//     const value = email && password;
//     this.setState({ isValid: value });
//   }
//
//   handleSubmit = () => {
//     if (this.state.isValid) {
//       this.setState({ isLoggedIn: true });
//     }
//   }
//
//   handleLogOut = () => {
//     this.setState({ isLoggedIn: false });
//   }
//
//   render() {
//     const { isLoggedIn, form } = this.state;
//
//     if (isLoggedIn) {
//       return <Home1 onLogOut={this.handleLogOut} />;
//     }
//
//     return (
//       <div className="container d-flex align-items-center text-center">
//         <div className="form-signin">
//           <form>
//             <img
//               className="mb-4"
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
//               alt=""
//               width="72"
//               height="57"
//             />
//             <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
//             <div className="form-floating">
//               <input
//                 className="form-control email"
//                 type="email"
//                 name="email"
//                 placeholder="name@example.com"
//                 value={form.email}
//                 onChange={this.handleChange}
//               />
//               <label>Email address</label>
//             </div>
//             <div className="form-floating">
//               <input
//                 className="form-control password"
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={this.handleChange}
//               />
//               <label>Password</label>
//             </div>
//             <div className="checkbox mb-3">
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={form.isRemember}
//                   onChange={this.handleChangeCheckbox}
//                 /> Remember me
//               </label>
//             </div>
//             <button
//               className="w-100 btn btn-lg btn-primary"
//               type="button"
//               onClick={this.handleSubmit}
//             >
//               Sign in
//             </button>
//             <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default App;

// bài Ứng dụng quản lý công việcTodo App
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [],
//       item: ''
//     };
//   }
//
//   handleChange = (event) => {
//     this.setState({ item: event.target.value });
//   }
//
//   handleAddItem = () => {
//     const { item, list } = this.state;
//     if (item.trim() !== '') {
//       this.setState({
//         list: [...list, item],
//         item: ''
//       });
//     }
//   }
//
//   render() {
//     const { list, item } = this.state;
//
//     return (
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <h1>Todo List</h1>
//         <input
//           type="text"
//           placeholder="Nhập công việc..."
//           value={item}
//           onChange={this.handleChange}
//           style={{ padding: '8px', width: '250px' }}
//         />
//         <button onClick={this.handleAddItem} style={{ marginLeft: '10px', padding: '8px 16px' }}>
//           Add
//         </button>
//
//         <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
//           {list.map((todo, index) => (
//             <li key={index} style={{ margin: '8px 0' }}>
//               {todo}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
//
// export default App;

// bài Ứng dụng quản lý học sinh (CRUD sử dụng Table)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      form: { name: '', phone: '', email: '' },
      isValid: false,
      indexSelected: -1
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((state) => {
      const form = { ...state.form, [name]: value };
      return { form };
    }, this.checkInvalidForm);
  }

  checkInvalidForm = () => {
    const { name, phone, email } = this.state.form;
    const isValid = name && phone && email && /^[0-9]+$/.test(phone);
    this.setState({ isValid });
  }

  handleSubmit = () => {
    if (this.state.isValid) {
      const newList = [...this.state.studentList];
      if (this.state.indexSelected > -1) {
        newList.splice(this.state.indexSelected, 1, this.state.form);
      } else {
        newList.push(this.state.form);
      }

      this.setState({
        studentList: newList,
        form: { name: '', phone: '', email: '' },
        isValid: false,
        indexSelected: -1
      });
    } else {
      alert('Vui lòng nhập đủ và đúng định dạng thông tin (Phone phải là số)');
    }
  }

  handleSelect = (studentSelected, index) => {
    this.setState({
      form: { ...studentSelected },
      indexSelected: index
    }, this.checkInvalidForm);
  }

  handleDelete = (index) => {
    const newList = [...this.state.studentList];
    newList.splice(index, 1);
    this.setState({ studentList: newList });
  }

  render() {
    const { studentList, form } = this.state;

    return (
      <div className="container" style={{ padding: '20px' }}>
        <h1>Student List</h1>

        <div>
          <label>Name: </label><br />
          <input name="name" value={form.name} onChange={this.handleChange} /><br />

          <label>Phone: </label><br />
          <input type="text" name="phone" value={form.phone} onChange={this.handleChange} /><br />

          <label>Email: </label><br />
          <input name="email" value={form.email} onChange={this.handleChange} /><br />

          <button onClick={this.handleSubmit}>Submit</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>
                  <button onClick={() => this.handleSelect(student, index)}>Edit</button>{' '}
                  <button onClick={() => this.handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;