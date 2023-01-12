import Reaction from "@assets/svg/Reaction";
import Tag from "@assets/svg/Tag";
import styles from "@features/postDetail/components/PostDetail.module.css";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post}>
      <div className={styles.title}>
        <div className={styles.titleText}>{post.title}</div>
      </div>
      <div className={styles.body}>{post.body}</div>

      <div className={styles.details}>
        <div className={styles.tags}>
          {post.tags.map((tag, index) => (
            <div key={index} className={styles.tag}>
              <Tag className={styles.tagIcon} />
              <div className={styles.tagName}>{tag}</div>
            </div>
          ))}
        </div>
        <div className={styles.reactions}>
          <Reaction className={styles.reactionIcon} />
          <div className={styles.reactionNumber}>{post.reactions}</div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
