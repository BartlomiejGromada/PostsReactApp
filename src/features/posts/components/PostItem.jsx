import React from 'react';
import styles from "@features/posts/components/PostItem.module.css";
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <p className={styles.postTitle}>{post.title}</p>
            </div>
        </Link>
    )
}

export default PostItem