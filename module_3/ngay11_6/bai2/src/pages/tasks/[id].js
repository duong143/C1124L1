import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function TaskDetail() {
  const { id } = useRouter().query;
  const [task, setTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const found = storedTasks.find((t) => t.id === Number(id));
    setTask(found);
  }, [id]);

  if (!task) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <h2>Task Detail</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}</p>
    </div>
  );
}
