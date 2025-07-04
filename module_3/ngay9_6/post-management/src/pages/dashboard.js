import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import AddPostForm from "../components/AddPostForm";

export default function Dashboard() {
    const [username, setUsername] = useState('');
    const router = useRouter();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const user = localStorage.getItem("username");

        if (!user) {
            router.push("/")
        } else {
            setUsername(user);
        }
    }, []);

    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem("posts") || '[]');
        setPosts(savedPosts);
    }, []);



    const addPost = (newTitle, newContent) => {
        const newPost = {
            id: Date.now(),
            title: newTitle,
            content: newContent
        };

        setPosts([newPost, ...posts]);
        localStorage.setItem("posts", JSON.stringify([newPost, ...posts]));
    }

    return(
        <Layout>
            <PostList posts={posts} />
            <AddPostForm addPost={addPost} />
        </Layout>
    );
}