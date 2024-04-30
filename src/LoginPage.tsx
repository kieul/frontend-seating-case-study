import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <Navbar isLoggedIn={false} />
      <h1>Login</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginPage;
