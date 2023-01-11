import { PostDetail } from "@features/postDetail";
import { useLoaderData } from "react-router-dom";

const PostDetailPage = () => {
    const loadedData = useLoaderData();

    return (
        <PostDetail post={loadedData} />
    )
};

export default PostDetailPage;

export const loader = async ({ params }) => {
    const postId = params.id;
    const response = await fetch(`https://dummyjson.com/posts/${postId}`);
    if (!response.ok) {
        throw { message: "Failed to fetch post", status: 500 };
    }
    return response.json();
};