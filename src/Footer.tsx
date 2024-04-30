import { Button } from "@/components/ui/button.tsx";
import { useCart } from "@/components/Cart";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { totalTickets, totalPrice, removeFromCart } = useCart();
  const navigate = useNavigate();
  const isLoggedIn = false;

  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate("/checkout");
    } else {
      navigate("/guest");
    }
  };

  const handleRemoveTicket = () => {
    if (totalTickets > 0) {
      removeFromCart();
    }
  };

  return (
    <footer className="sticky bottom-0 left-0 right-0 bg-white border-t border-zinc-200 flex justify-center">
      <div className="max-w-screen-lg p-6 flex justify-between items-center gap-4 grow">
        <div className="flex flex-col">
          <span>
            Total for {totalTickets} tickets
          </span>
          <span className="text-2xl font-semibold">
            {totalPrice} CZK
          </span>
        </div>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
          <Button
            disabled={totalTickets === 0}
            onClick={handleRemoveTicket}
            variant="destructive"
          >
            Remove a ticket
          </Button>
          <Button
            onClick={handleCheckout}
            disabled={totalTickets === 0}
            variant="default"
            className="hover:bg-green-600"
          >
            Checkout now
          </Button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
