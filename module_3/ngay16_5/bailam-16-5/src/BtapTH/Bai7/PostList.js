import React from 'react';
import PostItem from './PostItem';

function PostList() {
    const posts = [
        {
            title: "Giới thiệu về React",
            date: "2025-05-16",
            excerpt: "đây là dòng 1"
        },
        {
            title: "Component và Props",
            date: "2025-05-15",
            excerpt: "đây là dòng 2"
        },
        {
            title: "State và vòng đời",
            date: "2025-05-14",
            excerpt: "đây là dòng 3"
        }
    ];

    return (
        <div>
            <h2>Danh sách bài viết</h2>
            {posts.map((post, index) => (
                <PostItem
                    key={index}
                    title={post.title}
                    date={post.date}
                    excerpt={post.excerpt}
                />
            ))}
        </div>
    );
}

export default PostList;
