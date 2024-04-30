import { Button } from "@/components/ui/button.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { cn } from "@/lib/utils.ts";
import React, { useState, useEffect, forwardRef } from "react";
import axios from "axios";
import requests from "@/Requests";
import { useCart } from "@/components/Cart";

interface SeatProps extends React.HTMLAttributes<HTMLElement> {}
interface TicketType {
  id: string;
  name: string;
  price: number;
}

interface Seat {
  seatId: string;
  place: number;
  ticketTypeId: string;
}

interface SeatRow {
  seatRow: number;
  seats: Seat[];
}

export const Seat = forwardRef<HTMLDivElement, SeatProps>((props, ref) => {
  const [ticketTypes, setTicketTypes] = useState<TicketType[]>([]);
  const [seatRows, setSeatRows] = useState<SeatRow[]>([]);
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null);
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart, removeFromCart } = useCart();

  const handleAddToCart = () => {
    if (selectedSeat) {
      const ticketType = ticketTypes.find(
        (type) => type.id === selectedSeat.ticketTypeId
      );
      if (ticketType) {
        addToCart(ticketType.price);
        setIsInCart(true);
      }
    }
  };

  const handleRemoveFromCart = () => {
    if (selectedSeat) {
      removeFromCart();
      setIsInCart(false);
      setSelectedSeat(null);
    }
  };

  useEffect(() => {
    axios
      .get(requests.requestEvent)
      .then((response) => {
        setTicketTypes(response.data.ticketTypes);
        setSeatRows(response.data.seatRows);
      })
      .catch((error) => console.error("Failed to fetch seat data:", error));
  }, []);

  return (
    <Popover>
      <PopoverTrigger>
        <div
          className={cn(
            "size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-color",
            props.className
          )}
          ref={ref}
          onClick={() => setSelectedSeat(seatRows[0]?.seats[0])} 
        >
          <span className="text-xs p-2 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-300">
            [n]
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <pre>
          {selectedSeat && (
            <>
              <div key={selectedSeat.place}>
                Seat Place: {selectedSeat.place}
                <br />
                Seat Row:{" "}
                {seatRows.find((row) =>
                  row.seats.some((seat) => seat.seatId === selectedSeat.seatId)
                )?.seatRow || "Loading..."}
                <br />
                Ticket Type:{" "}
                {ticketTypes.find(
                  (type) => type.id === selectedSeat.ticketTypeId
                )?.name || "Loading..."}
                <br />
                Price:{" "}
                {ticketTypes.find(
                  (type) => type.id === selectedSeat.ticketTypeId
                )?.price || "Loading..."}{" "}
                CZK
              </div>
            </>
          )}
        </pre>
        <footer className="flex flex-col">
          {isInCart ? (
            <Button
              onClick={() => {
                handleRemoveFromCart();
                setSelectedSeat(selectedSeat);
              }}
              variant="destructive"
              size="sm"
            >
              Remove from cart
            </Button>
          ) : (
            <Button onClick={handleAddToCart} variant="default" size="sm">
              Add to cart
            </Button>
          )}
        </footer>
      </PopoverContent>
    </Popover>
  );
});
