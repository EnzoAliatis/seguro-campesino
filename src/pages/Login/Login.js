import React from "react";
import ImgIess from "../../assets/png/IESS.png";
import LoginForm from "../../components/LoginForm";

import "./Login.scss";

export default function Login(props) {
  const { setRefreshCheckLogin } = props;
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={ImgIess} alt="IMG" />
          </div>

          <LoginForm setRefreshCheckLogin={setRefreshCheckLogin} />
        </div>
      </div>
    </div>
  );
}
