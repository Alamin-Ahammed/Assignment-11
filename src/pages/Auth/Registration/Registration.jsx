import { useNavigate } from "react-router-dom";
import Pagination from "../../../components/Pagination/Pagination";
import "./Registration.css";

const Registration = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="registration-container">
        <form className="registration-form">
          <h1>Register</h1>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />

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

          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Register</button>
        </form>
        <div className="login_text">
          <p>Have an Account?</p>
          <a onClick={()=> navigate('/login')}>Log In</a>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default Registration;
