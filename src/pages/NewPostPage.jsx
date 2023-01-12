import NewPostForm from "@features/newPost/components/NewPostForm";
import { savePost } from "@utils/api";
import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

const NewPostPage = () => {
  const data = useActionData();
  const navigation = useNavigation();

  const navigate = useNavigate();
  const onCancelHandler = () => {
    navigate("/posts");
  };

  return (
    <>
      <h3>Add post</h3>
      <div id="container">{data && data.status && <p>{data.message}.</p>}</div>
      <NewPostForm
        onCancel={onCancelHandler}
        submitting={navigation.state === "submitting"}
      />
    </>
  );
};

export default NewPostPage;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const post = {
    title: formData.get("title"),
    body: formData.get("body"),
  };

  try {
    await savePost(post);
  } catch (err) {
    if (err.status === 442) {
      return err;
    }
    throw err;
  }

  return redirect("/posts");
};
