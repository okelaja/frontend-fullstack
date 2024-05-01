import React, { useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../image/1.png";
// import { useDispatch, useSelector } from "react-redux";
// import { LoginUser } from "../feature/authSlice";

const Login = () => {

  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { user, isError, isSuccess, isLoading, message } = useSelector(
  //   (state) =>state.auth
  // );

  // const Auth = (e) => {
  //   e.preventDefault();
  //   dispatch(LoginUser({ email, password }));
  // };

  // useEffect(() => {
  //   if (user || isSuccess) {
  //     navigate("/dashboard");
  //   }
  // }, [user, isSuccess, dispatch, navigate]);



  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4 card">
              {/* <form className="box" onSubmit={Auth}> */}
              <form>
                {/* {isError && <p className="has-text-centered">{message}</p>} */}
                <div class="field has-text-centered">
                  <NavLink to={"/"}>
                    <img src={Logo} alt="logo" width={100} />
                  </NavLink>
                  <h3 className="title has-text-primary">Login</h3>
                </div>   
                <div class="field mr-5 ml-5">
                  <label for="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input"
                    // onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan email"
                  />
                </div>
                <div class="field mr-5 ml-5">
                  <label for="password" className="label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="input"
                    // onChange={(e) => setPassword(e.target.value)}
                    placeholder="**************"
                  />
                </div>
                <div class="field mr-5 ml-5">
                  <button type="submit" className="button is-success has-text-white is-fullwidth">
                    {/* {isLoading ? "Loading..." : "Login"} */} Login
                  </button>
                </div>
                <div class="field mr-5 ml-5 mb-5">
                  <p>
                    Belum Punya Akun?
                    <NavLink to={"/register"}> Register</NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
