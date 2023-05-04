import { Redirect, Route } from "react-router-dom";
import SignUp from "../../components/SignUp/SignUp";

const SignUpAuth = () => {
  return (
    <>
      {" "}
      <Route exact path="/" render={() => <Redirect to="/signup" />} />
      <Route path="/Signup" component={SignUp} exact />


    </>
  );
};

export default SignUpAuth;
