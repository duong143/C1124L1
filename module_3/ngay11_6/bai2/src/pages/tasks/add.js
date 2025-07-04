import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      completed
    };

    const existing = JSON.parse(localStorage.getItem('tasks')) || [];
    localStorage.setItem('tasks', JSON.stringify([...existing, newTask]));
    router.push('/tasks');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            id="completed"
          />
          <label className="form-check-label" htmlFor="completed">
            Completed
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}
