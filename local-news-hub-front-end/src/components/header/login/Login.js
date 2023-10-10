import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../../services/authService";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import "./Login.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const username = formData.get("email");
    const password = formData.get("password");

    authService
      .login({
        username,
        password,
      })
      .then((user) => {
        // give user data to func from context 'login'
        login(user);

        // navigate to dashboard after login
        navigate("/");
      })
      .catch((error) => alert(error.message));
  }

  return (
    <div className="login">
      <Form className="login__form" onSubmit={onSubmit}>
        {/* <h1 className="login__title">Login</h1> */}
        <h1 className="login__title">Вход</h1>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          {/* <Form.Label>Имейл адрес</Form.Label> */}
          <Form.Control
            type="email"
            // placeholder="Enter email"
            placeholder="Имейл"
            name="email"
            required
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          {/* <Form.Label>Парола</Form.Label> */}
          <Form.Control
            type="password"
            // placeholder="Password"
            placeholder="Парола"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Remember me" /> */}
          {/* <Form.Check type="checkbox" label="Запомни ме" /> */}
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          {/* Login */}
          Вход
        </Button>
        <p className="login__register-link">
          {/* Don't have an account? <Link to="/register">Register here</Link> */}
          Нямате акаунт? <Link to="/register">Регистрирайте се тук</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
