// import { useParams } from "react-router-dom";
//
// function Product3() {
//   let { categoryId } = useParams();
//   return (
//     <div>
//       <h3>Id selected {categoryId} </h3>
//     </div>
//   );
// }
// export default Product3;

// Router 3
import { useLocation } from "react-router-dom";
function Product() {
  const { state } = useLocation();

  return (
    <div>
      <h3>Id selected {state.categoryId} </h3>
    </div>
  );
}

export default Product;