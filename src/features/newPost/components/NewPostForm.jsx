import { Button } from "@components/ui";
import styles from "@features/newPost/components/NewPostForm.module.css";
import { Form } from "react-router-dom";

const NewPostForm = ({ onCancel, submitting }) => {
  return (
    <Form className={styles.form} method="post" action="/new-post">
      <fieldset>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required minLength={5} />
      </fieldset>
      <fieldset>
        <label htmlFor="body">Content</label>
        <textarea
          id="body"
          type="text"
          name="body"
          required
          minLength={10}
          rows={5}
        />
      </fieldset>

      <div className={styles.buttons}>
        <Button type="button" onClick={onCancel} className={styles.button}>
          Cancel
        </Button>
        <Button type="submit" className={styles.button} disabled={submitting}>
          {submitting ? "Submitting..." : "Add"}
        </Button>
      </div>
    </Form>
  );
};

export default NewPostForm;
