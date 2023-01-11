import React from 'react'
import { PostsList } from '@features/Posts';
import { useLoaderData } from 'react-router-dom';

const PostsPage = () => {
    const loaderData = useLoaderData();

    return (
        <PostsList postsList={loaderData} />
    );
};

export default PostsPage;

export const loader = async () => {
    const response = await fetch("https://dummyjson.com/posts?limit=5");
    if (!response.ok) {
        throw { message: "Failed to fetch posts", status: 500 };
    }
    return response.json();
};
