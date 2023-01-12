import ReactRouterImage from "@assets/images/react-router.png";

const WelcomePage = () => {
  return (
    <>
      <h3>Welcome page</h3>
      <p>Example project with React Router @6.4</p>
      <img
        src={ReactRouterImage}
        alt="react router logo"
        id="react-router-logo"
      />
    </>
  );
};

export default WelcomePage;
