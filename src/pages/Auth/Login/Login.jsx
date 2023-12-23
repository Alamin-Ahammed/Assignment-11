import Pagination from "../../../components/Pagination/Pagination";
import "./Login.css";

const Login = () => {
 
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
      </div>
      <Pagination />
    </>
  );
};

export default Login;
