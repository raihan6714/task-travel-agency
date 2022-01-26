import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../../../hooks/useFirebae";
import logo_sticky from "../../../../images/logo_sticky.png";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } =
    useFirebase();

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  return (
    <div id="login_bg">
      <nav id="menu" className="fake_menu"></nav>
      {/* <div id="preloader">
                <div data-loader="circle-side"></div>
            </div> */}
      <div id="login" className="mb-5">
        <aside>
          <figure>
            <Link to="index.html">
              <img
                src={logo_sticky}
                width="155"
                height="36"
                data-retina="true"
                alt=""
                className="logo_sticky"
              />
            </Link>
          </figure>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
              />
              <i className="icon_mail_alt"></i>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
              />
              <i className="icon_lock_alt"></i>
            </div>
            <div className="clearfix add_bottom_30">
              <div className="checkboxes float-left">
                <label className="container_check">
                  Remember me
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="float-right mt-1">
                <Link
                  id="forgot"
                  to="{{javascript:void(0)}}"
                  className="text-decoration-none"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <Link
              to="/"
              className="btn_1 rounded full-width text-decoration-none"
            >
              Login to Panagea
            </Link>
            <div className="text-center add_top_10">
              New to Panagea?{" "}
              <strong>
                <Link to="/register">Sign up!</Link>
              </strong>
            </div>

            <div className="divider">
              <span>Or</span>
            </div>

            <div className="d-flex flex-column mt-4">
              <Button
                onClick={handleGoogleSignIn}
                className="btn btn-success mb-2"
              >
                Login with Google
              </Button>
              <Button className="btn btn-primary mb-2">
                Login with Facebook
              </Button>
              <Button className="btn btn-info mb-2">Login with Linkedin</Button>
            </div>
          </form>
          <div className="copy">© 2022 Rahan</div>
        </aside>
      </div>
    </div>
  );
};

export default Login;
