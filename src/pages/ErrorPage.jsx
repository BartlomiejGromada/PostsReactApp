import SadFace from "@assets/svg/SadFace";
import { NavBar } from "@components/layout/navbar";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <main id="error-content">
        <h1>An error occuredd!</h1>
        <p>{error.message}</p>
        <SadFace />
      </main>
    </>
  );
};

export default ErrorPage;
