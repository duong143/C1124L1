import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    if (id !== undefined) {
      setBook(books[parseInt(id)]);
    }
  }, [id]);

  if (!book) return <p className="container mt-4">Không tìm thấy sách</p>;

  return (
    <div className="container mt-4">
      <h2>{book.title}</h2>
      <p><strong>Tác giả:</strong> {book.author}</p>
      <p><strong>Mô tả:</strong> {book.description}</p>
      <button className="btn btn-secondary" onClick={() => router.back()}>Quay lại</button>
    </div>
  );
}
