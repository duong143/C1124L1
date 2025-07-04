import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function MainLayout2() {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Menu con trong MainLayout</h4>
        <NavLink to="product" className="btn btn-outline-primary mr-2">Product</NavLink>
        <NavLink to="contact" className="btn btn-outline-success mr-2">Contact</NavLink>
        <NavLink to="detail" className="btn btn-outline-warning">Detail</NavLink>
      </div>
      <div className="card-body">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout2;
