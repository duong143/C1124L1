import React from 'react';

function StudentInfoComponent() {
  const students = [
    { id: 1, name: 'Nguyễn Văn An', age: 20, address: 'Hà Nội' },
    { id: 2, name: 'Trần Thị Bình', age: 21, address: 'Đà Nẵng' },
    { id: 3, name: 'Lê Văn Cao', age: 22, address: 'TP.HCM' },
    { id: 4, name: 'Phạm Thị Dung', age: 20, address: 'Hải Phòng' }
  ];

  return (
    <div style={{ maxWidth: '600px' }}>
      <h2>Danh sách Sinh viên</h2>
      <table style={{ width: '100%', border: '1px solid #ddd'}}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Age</th>
            <th style={styles.th}>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} style={styles.tr}>
              <td style={styles.td}>{student.id}</td>
              <td style={styles.td}>{student.name}</td>
              <td style={styles.td}>{student.age}</td>
              <td style={styles.td}>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  },
  tr: {
    borderBottom: '1px solid #ddd',
  }
};

export default StudentInfoComponent;
