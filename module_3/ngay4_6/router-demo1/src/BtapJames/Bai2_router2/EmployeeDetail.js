
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EmployeeDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const employee = location.state?.employee;

  if (!employee) {
    return (
      <div style={{ padding: 20 }}>
        <h3>Không có dữ liệu nhân viên.</h3>
        <button onClick={() => navigate('/employee')}>Quay lại danh sách</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Thông tin chi tiết nhân viên</h2>
      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Tên:</strong> {employee.name}</p>
      <p><strong>Tuổi:</strong> {employee.age}</p>
      <button onClick={() => navigate('/employee')}>Quay lại danh sách</button>
    </div>
  );
}

export default EmployeeDetail;
