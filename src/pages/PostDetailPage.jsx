import { Spinner } from "@components/ui";
import { PostDetail } from "@features/postDetail";
import { getPost } from "@utils/api";
import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";

const PostDetailPage = () => {
  const loadedData = useLoaderData();

  return (
    <>
      <h3>Post</h3>
      <Suspense fallback={<Spinner />}>
        <Await
          resolve={loadedData.post}
          errorElement={<p>Something gone wrong!</p>}
        >
          {(loadedPost) => <PostDetail post={loadedPost} />}
        </Await>
      </Suspense>
    </>
  );
};

export default PostDetailPage;

export const loader = async ({ params }) => {
  return defer({ post: getPost(params.id) });
};
