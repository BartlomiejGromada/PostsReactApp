import sleep from "./sleep";

export const getPosts = async () => {
  await sleep(1000);
  const response = await fetch("https://dummyjson.com/posts?limit=5");
  if (!response.ok) {
    throw new Response("Failed to fetch posts", { status: 500 });
  }
  return response.json();
};

export const getPost = async (postId) => {
  await sleep(1000);
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  if (!response.ok) {
    throw new Response("Failed to fetch post", { status: 500 });
  }
  return response.json();
};

export const savePost = async (post) => {
  if (post.title.trim().length < 5 || post.body.trim().length < 10) {
    throw { message: "Invalid input data provided", status: 442 };
  }

  const response = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: post.title,
      body: post.body,
      userId: 1,
    }),
  });

  if (!response.ok) {
    throw { message: "Could not save post.", status: 500 };
  }
};
