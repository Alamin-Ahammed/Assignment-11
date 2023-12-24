import MainLayout from "./MainLayout/MainLayout";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Contexts/UserContext/UserContex";

function App() {
  return (
    <>
      <UserProvider>
        <MainLayout />
      </UserProvider>
      <ToastContainer />
    </>
  );
}

export default App;
