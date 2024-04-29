import { useCart } from "./components/Cart";

const CheckoutPage = () => {
  const { totalTickets, totalPrice } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>
      <div className="mb-6">
        <p className="text-lg text-gray-700">
          Total Tickets: <span className="font-semibold">{totalTickets}</span>
        </p>
        <p className="text-lg text-gray-700">
          Total Price: <span className="font-semibold">{totalPrice} CZK</span>
        </p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => alert("Proceeding to payment...")}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default CheckoutPage;
