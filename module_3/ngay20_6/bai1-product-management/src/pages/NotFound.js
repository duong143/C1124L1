import {Link} from "react-router-dom";

function NotFound(){
   <div style={{ textAlign: 'center', marginTop: '50px' }}>
       <h1>404</h1>
       <p>không thấy trang mà bạn yêu cầu</p>
       <Link to={"/"}>
           <button>quay về trang chủ!!!!!</button>
       </Link>
   </div>
} export default NotFound;