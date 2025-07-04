import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddBook() {
  const [book, setBook] = useState({ title: '', author: '', description: '' });
  const router = useRouter();

  const handleSubmit = () => {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    router.push('/books');
  };

  return (
    <div className="container mt-4">
      <h2>Thêm sách</h2>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Tựa đề"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Tác giả"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Mô tả"
        value={book.description}
        onChange={(e) => setBook({ ...book, description: e.target.value })}
      />
      <button className="btn btn-primary" onClick={handleSubmit}>Lưu sách</button>
    </div>
  );
}
