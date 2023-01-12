import PostItem from "@features/posts/components/PostItem";
import styles from "@features/posts/components/PostsList.module.css";

const PostsList = ({ postsList }) => {
  const posts = postsList.posts;
  return (
    <div className={styles.postsList}>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
