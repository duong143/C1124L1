import { NavLink, Outlet } from "react-router-dom";

function MainLayout () {
    return(
        <div>
            <br />
            <nav>
                <NavLink to="product">Product</NavLink> | {" "}
                <NavLink to="contact">Contact</NavLink>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}

export default MainLayout;