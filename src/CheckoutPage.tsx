import Navbar from "./Navbar"; // Navbar is imported here
import { Button } from "@/components/ui/button.tsx";

const CheckoutPage = () => {
  return (
    <div>
      <Navbar isLoggedIn={false} />
      <main className="flex justify-center items-center h-screen bg-white-100 m-auto p-6 ">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-l m-auto">
          <h1 className="text-xl font-bold text-gray-900 mb-6">Checkout</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="card-number"
            >
              Card Number
            </label>
            <input
              id="card-number"
              type="text"
              placeholder="0000 0000 0000 0000"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="card-holder"
            >
              Card Holder Name
            </label>
            <input
              id="card-holder"
              type="text"
              placeholder="Full name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex justify-between">
            <div className="mb-4 w-1/2 mr-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="expiration-date"
              >
                Expiration Date
              </label>
              <input
                id="expiration-date"
                type="text"
                placeholder="MM/YY"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 w-1/2 ml-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cv-code"
              >
                CV Code
              </label>
              <input
                id="cv-code"
                type="text"
                placeholder="000"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div>
            <Button
              variant="secondary"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-8"
              onClick={() => alert("Proceeding to payment...")}
            >
              Proceed to Payment
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
