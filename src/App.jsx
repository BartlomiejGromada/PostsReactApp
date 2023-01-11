import RootLayout from "@components/layout";
import ErrorPage from "@pages/ErrorPage";
import PostDetailPage, { loader as postDetailLoader } from "@pages/PostDetailPage";
import PostsPage, { loader as postsLoader } from "@pages/PostsPage";
import WelcomePage from "@pages/WelcomePage";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<WelcomePage />} />
      <Route path="/posts" element={<PostsPage />} loader={postsLoader} />
      <Route path="/posts/:id" element={<PostDetailPage />} loader={postDetailLoader} />
      <Route path="/about" element={<p>Bartłomiej Gromada</p>} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default App;
