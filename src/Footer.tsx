import { Button } from "@/components/ui/button.tsx";
import { useCart } from "@/components/Cart";

const Footer = () => {
  const { totalTickets, totalPrice, removeFromCart } = useCart();

  const handleRemoveTicket = () => {
    // Assuming each ticket has a fixed price for simplicity
    // This would need to be adjusted if different tickets have different prices
    const ticketPrice = totalPrice / totalTickets;
    removeFromCart(ticketPrice);
  };

  return (
    <footer className="sticky bottom-0 left-0 right-0 bg-white border-t border-zinc-200 flex justify-center">
      <div className="max-w-screen-lg p-6 flex justify-between items-center gap-4 grow">
        <div className="flex flex-col">
          <span>Total for {totalTickets} tickets</span>
          <span className="text-2xl font-semibold">{totalPrice} CZK</span>
        </div>
        <div className="flex space-x-5">
          <Button
            disabled={totalTickets === 0}
            onClick={handleRemoveTicket}
            variant="destructive"
          >
            Remove a ticket
          </Button>
          <Button disabled={totalTickets === 0} variant="default">
            Checkout now
          </Button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
