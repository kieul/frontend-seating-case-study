import Navbar from "./Navbar"; // Navbar is imported here

const CheckoutPage = () => {
  return (
    <div>
      <Navbar isLoggedIn={false} />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>
        <div className="mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => alert("Proceeding to payment...")}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );

};

export default CheckoutPage;