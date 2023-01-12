import { Button, Spinner } from "@components/ui";
import { PostsList } from "@features/Posts";
import { getPosts } from "@utils/api";
import { Suspense } from "react";
import { Await, defer, Link, useLoaderData } from "react-router-dom";

const PostsPage = () => {
  const loaderData = useLoaderData();

  return (
    <>
      <Link to="/new-post">
        <Button>Add post</Button>
      </Link>
      <h3>Our posts</h3>
      <Suspense fallback={<Spinner />}>
        <Await
          resolve={loaderData.posts}
          errorElement={<p>Something gone wrong!</p>}
        >
          {(loadedPosts) => <PostsList postsList={loadedPosts} />}
        </Await>
      </Suspense>
    </>
  );
};

export default PostsPage;

export const loader = async () => {
  return defer({ posts: getPosts() });
};
