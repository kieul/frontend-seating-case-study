import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const GuestPage = () => {
  const navigate = useNavigate();

  const handleGuestCheckout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/checkout");
  };

  return (
    <div>
      <Navbar isLoggedIn={false} />
      
      <main className="flex justify-center items-center fixed inset-0">
        <div className=" max-w-4xl p-6 flex flex-col md:flex-row gap-3 m-auto">
          <div className="bg-white rounded-md shadow-sm p-6 grow">
            <h1 className="text-xl font-bold mb-4">Guest Checkout</h1>
            <form onSubmit={handleGuestCheckout} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                Continue as Guest
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GuestPage;

