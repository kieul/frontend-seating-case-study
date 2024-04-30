import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const GuestPage = () => {
  const navigate = useNavigate();

  const handleGuestCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <Navbar isLoggedIn={false} />

      <h1>Guest Checkout</h1>
      <form onSubmit={handleGuestCheckout}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <button type="submit">Continue as Guest</button>
      </form>
    </div>
  );
};

export default GuestPage;
