import React from "react";
import "bulma/css/bulma.min.css";
import { NavLink } from "react-router-dom";
import Logo from "../../image/1.png";



const Register = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body ">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4">
              <form className="box">
                <div class="field has-text-centered">
                  <NavLink to={"/"}>
                    <img src={Logo} alt="logo" width={100} />
                  </NavLink>
                  <h3 className="title has-text-primary">Register</h3>
                </div>   
                <div class="field">
                  <label for="nama" className="label">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="nama"
                    placeholder="Masukkan Nama"
                  />
                  {/* input role user */}
                  <input type="hidden" />
                </div>
                <div class="field">
                  <label for="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input"
                    id="email"
                    placeholder="Masukkan email"
                  />
                </div>
                <div class="field">
                  <label for="password" className="label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="input"
                    id="password"
                    placeholder="**************"
                  />
                </div>
                <div class="field">
                  <label for="confpassword" className="label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confPassword"
                    className="input"
                    placeholder="**************"
                  />
                </div>
                <div class="field">
                  <button className="button is-success has-text-white is-fullwidth">
                    Register
                  </button>
                </div>
                <div class="field">
                  <p>
                    Sudah Punya Akun?
                    <NavLink to={"/login"}> Login</NavLink> 
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

export default Register;
