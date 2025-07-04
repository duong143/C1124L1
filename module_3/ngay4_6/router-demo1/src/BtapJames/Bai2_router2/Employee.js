
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Employee() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const employees = [
    { id: 1, name: 'Hoa', age: 20 },
    { id: 2, name: 'Khánh', age: 25 },
    { id: 3, name: 'Tú', age: 22 }
  ];

  const handleDetail = (employee) => {
    navigate('/employee-detail', { state: { employee } });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Xin chào: {email}</h2>
      <h3>Danh sách nhân viên</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th><th>Tên</th><th>Tuổi</th><th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>
                <button onClick={() => handleDetail(emp)}>Chi tiết</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
