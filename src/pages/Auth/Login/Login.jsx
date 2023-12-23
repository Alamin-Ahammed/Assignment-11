import { useNavigate } from "react-router-dom";
import Pagination from "../../../components/Pagination/Pagination";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="login-container">
        <form className="login-form">
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
          <p className="forgot-password">
            <a href="#">Forgot password?</a>
          </p>
        </form>
        <div className="register_text">
          <p>Don't Have Account?</p>
          <a onClick={()=> navigate('/registration')}>Create One</a>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default Login;
