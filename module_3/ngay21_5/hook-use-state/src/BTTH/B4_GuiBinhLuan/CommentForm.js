import React, { useState } from 'react';

function CommentForm({ onSubmitComment }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitComment(text);
        setText(''); // reset sau khi gửi
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nhập bình luận..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Gửi</button>
        </form>
    );
}

export default CommentForm;
