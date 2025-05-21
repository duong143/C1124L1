import React, { useState } from 'react';

function TodoForm({ onAddTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask(task);       // Gửi task lên App
        setTask('');           // Reset input sau khi submit
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nhập công việc..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Thêm</button>
        </form>
    );
}

export default TodoForm;
