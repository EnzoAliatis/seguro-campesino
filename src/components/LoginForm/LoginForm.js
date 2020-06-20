import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { isEmailValid } from "../../utils/validations";
import { login, setTokenApi } from "../../api/auth";

import "./LoginForm.scss";

export default function LoginForm(props) {
  const { setRefreshCheckLogin } = props;
  const [formData, setFormData] = useState(initialFormValue());
  const [signInLoading, setSignInLoading] = useState(false);

  const MySwal = withReactContent(Swal);

  const onSubmit = (e) => {
    e.preventDefault();

    let validCount = 0;
    values(formData).some((value) => {
      value && validCount++;
      return null;
    });

    if (validCount !== size(formData)) {
      // toast.warning("Completa todo los campos del formulario");
    } else {
      if (!isEmailValid(formData.email)) {
        // toast.warning("Email es invalido");
      } else {
        // AQUÍ IRIA LA PERICION A LA API
        // EN CASO QUE SE LOGUEA BIEN
        // setSignInLoading(true);
        // setRefreshCheckLogin(true);
        // EN CASO QUE LAS CREDENCIALES SEAN INVALIDAS
        // MySwal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: "Credeciales incorrectas",
        // });
        // EJEMPLO
        setSignInLoading(true);
        if (login(formData)) {
          console.log("aqui");
          setTokenApi("asadcsrfrthtyjhrt");
          setRefreshCheckLogin(true);
        } else {
          setSignInLoading(false);
          MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: "Credeciales incorrectas",
          });
        }
      }
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Form onChange={onChange} onSubmit={onSubmit}>
        <span className="login100-form-title">Inicio de sesión</span>
        <Form.Group>
          <Form.Control
            type="email"
            name="email"
            placeholder="Correo electronico"
            defaultValue={formData.email}
          />
          <span className="symbol-input100">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            name="password"
            placeholder="Contraseña"
            defaultValue={formData.password}
          />
          <span className="symbol-input100">
            <FontAwesomeIcon icon={faLock} />
          </span>
        </Form.Group>

        <div className="container-login100-form-btn">
          {/* <button className="login100-form-btn">Login</button> */}
          <Button variant="primary" type="submit" className="login100-form-btn">
            {!signInLoading ? "Iniciar sesión" : <Spinner animation="border" />}
          </Button>
        </div>
      </Form>
    </>
  );
}

function initialFormValue() {
  return {
    email: "",
    password: "",
  };
}
