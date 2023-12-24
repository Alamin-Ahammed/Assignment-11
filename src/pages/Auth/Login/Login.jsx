import { useNavigate } from "react-router-dom";
import Pagination from "../../../components/Pagination/Pagination";
import "./Login.css";
import { auth, storage } from "../../../config/firbase-config";
import { getDownloadURL, ref } from "firebase/storage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useUserContext } from "../../../Contexts/UserContext/UserContex";

const Login = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useUserContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const storageRef = storage;

    const userInfoes = await signInWithEmailAndPassword(auth, email, password);
    const {
      user: { uid, displayName, email: userEmail },
    } = userInfoes;

    const imageRef = ref(storageRef, `userImages/${uid}/profile${uid}.jpg`);

    // Get the download URL
    const imgURL = await getDownloadURL(imageRef);
    setUserInfo({ displayName, imgURL, email: userEmail, uid });
    localStorage.setItem('authInfo',JSON.stringify({ displayName, imgURL, email: userEmail, uid }))
    navigate("/");
  };
  return (
    <>
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
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
          <a onClick={() => navigate("/registration")}>Create One</a>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default Login;
