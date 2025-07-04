import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (!user) router.push('/');
    const data = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(data);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    router.push('/');
  };

  return (
    <div className="container mt-4">
      <h2>Danh sách sách</h2>
      <button className="btn btn-danger mb-3" onClick={handleLogout}>Đăng xuất</button>
      <Link href="/books/add" className="btn btn-success mb-3 ml-2">Thêm sách</Link>
      <ul className="list-group">
        {books.map((book, index) => (
          <li key={index} className="list-group-item">
            <Link href={`/books/${index}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
