import { useState } from "react";

export default function AddPostForm({ addPost }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmitCreateNewPostForm = (e) => {
        e.preventDefault();
        if(!title | !content) return;

        addPost(title, content);
        setTitle("");
        setContent("");
    }

    return (
        <form onSubmit={handleSubmitCreateNewPostForm}>
            <input type="text" name="title" value={title} placeholder="Type title..."
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <br />
            <input type="text" name="content" value={content} placeholder="Type content..."
                onChange={(e) => setContent(e.target.value)}
            />
            <br />
            <br />

            <button type="submit">Create post</button>
        </form>
    );

}