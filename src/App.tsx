import { Seat } from "@/components/Seat.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const isLoggedIn = false;
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [headerImageUrl, setHeaderImageUrl] = useState("");
  const [eventDate, setEventDate] = useState("");

  useEffect(() => {
    fetch("https://nfctron-frontend-seating-case-study-2024.vercel.app/event")
      .then((response) => response.json())
      .then((data) => {
        setEventName(data.namePub);
        setEventDescription(data.description);
        setHeaderImageUrl(data.headerImageUrl);
        setEventDate(data.dateFrom); // Assuming 'dateFrom' is the start date of the event
      })
      .catch((error) => console.error("Error fetching event data:", error));
  }, []);

  const handleAddToCalendar = () => {
    const startDate = new Date(eventDate);
    startDate.setHours(12, 0, 0); // Set start time to 12:00
    const endDate = new Date(eventDate);
    endDate.setHours(18, 0, 0); // Set end time to 18:00

    const formattedStartDate = startDate.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const formattedEndDate = endDate.toISOString().replace(/-|:|\.\d\d\d/g, '');

    const eventUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventName)}&dates=${formattedStartDate}/${formattedEndDate}&details=${encodeURIComponent(eventDescription)}&sf=true&output=xml`;
    window.open(eventUrl, '_blank');
  };

  return (
    <div className="flex flex-col grow">
      {/* header (wrapper) */}
      <nav className="sticky top-0 left-0 right-0 bg-white border-b border-zinc-200 flex justify-center">
        {/* inner content */}
        <div className="max-w-screen-lg p-4 grow flex items-center justify-between gap-3">
          {/* application/author image/logo placeholder */}
          <div className="max-w-[250px] w-full flex">
            <div className="bg-zinc-100 rounded-md size-12" />
          </div>
          {/* app/author title/name placeholder */}
          <div className="bg-zinc-100 rounded-md h-8 w-[200px]" />
          {/* user menu */}
          <div className="max-w-[250px] w-full flex justify-end">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage
                          src={`https://source.boringavatars.com/marble/120/<user-email>?colors=25106C,7F46DB`}
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col text-left">
                        <span className="text-sm font-medium">John Doe</span>
                        <span className="text-xs text-zinc-500">
                          john.doe@nfctron.com
                        </span>
                      </div>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[250px]">
                  <DropdownMenuLabel>John Doe</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem disabled>Logout</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button disabled variant="secondary">
                Login or register
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* main body (wrapper) */}
      <main className="grow flex flex-col justify-center">
        {/* inner content */}
        <div className="max-w-screen-lg m-auto p-4 flex flex-col md:flex-row items-start grow gap-3 w-full">
          {/* seating card */}
          <div
            className="bg-white rounded-md grow grid p-3 self-stretch shadow-sm"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(40px, 1fr))",
              gridAutoRows: "40px",
            }}
          >
            {/*	seating map */}
            {Array.from({ length: 100 }, (_, i) => (
              <Seat key={i} />
            ))}
          </div>

          {/* event info */}
          <aside className="w-full md:max-w-sm bg-white rounded-md shadow-sm p-3 flex flex-col gap-2 order-first md:order-none">
            {/* event header image */}
            <img
              src={headerImageUrl}
              alt="Event Header"
              className="rounded-md h-45 md:h-60"
            />
            {/* event name */}
            <h1 className="text-xl text-zinc-900 font-semibold">{eventName}</h1>
            {/* event description */}
            <p className="text-sm text-zinc-500">{eventDescription}</p>
            {/* add to calendar button */}
            <Button variant="secondary" onClick={handleAddToCalendar}>
              Add to calendar
            </Button>
          </aside>
        </div>
      </main>

      {/* bottom cart affix (wrapper) */}
      <nav className="sticky bottom-0 left-0 right-0 bg-white border-t border-zinc-200 flex justify-center">
        {/* inner content */}
        <div className="max-w-screen-lg p-6 flex justify-between items-center gap-4 grow">
          {/* total in cart state */}
          <div className="flex flex-col">
            <span>Total for [?] tickets</span>
            <span className="text-2xl font-semibold">[?] CZK</span>
          </div>

          {/* checkout button */}
          <Button disabled variant="default">
            Checkout now
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default App;
