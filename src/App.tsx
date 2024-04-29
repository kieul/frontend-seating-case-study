import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Seat } from "@/components/Seat";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import axios from "axios";
import requests from "./Requests";
import "./App.css";

function App() {
  const isLoggedIn = false;
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [headerImageUrl, setHeaderImageUrl] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventPlace, setEventPlace] = useState("");

  useEffect(() => {
    axios
      .get(requests.requestAPI)
      .then((response) => {
        const data = response.data;
        setEventName(data.namePub);
        setEventDescription(data.description);
        setHeaderImageUrl(data.headerImageUrl);
        setEventDate(data.dateFrom);
        setEventPlace(data.place);
      })
      .catch((error) => console.error("Error fetching event data:", error));
  }, []);

  useEffect(() => {
    axios
      .get(requests.requestEvent)
      .then((response) => {
        const data = response.data;
        setEventName(data.namePub);
      })
      .catch((error) => console.error("Error fetching event data:", error));
  }, []);

  const handleAddToCalendar = () => {
    const eventStartTime = new Date(eventDate);
    eventStartTime.setHours(12, 0, 0);
    const eventEndTime = new Date(eventDate);
    eventEndTime.setHours(18, 0, 0);

    const formatDateTime = (date: Date) =>
      date.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const eventUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventName
    )}&dates=${formatDateTime(eventStartTime)}/${formatDateTime(
      eventEndTime
    )}&details=${encodeURIComponent(
      eventDescription
    )}&location=${encodeURIComponent(eventPlace)}&sf=true&output=xml`;
    window.open(eventUrl, "_blank");
  };

  return (
    <div className="flex flex-col grow">
      <Navbar isLoggedIn={isLoggedIn} />
      <main className="grow flex flex-col justify-center">
        <div className="max-w-screen-lg m-auto p-4 flex flex-col md:flex-row items-start grow gap-3 w-full">
          <div
            className="bg-white rounded-md grow grid p-3 self-stretch shadow-sm"
            style={{
              gridTemplateColumns: "repeat(10, minmax(40px, 1fr))",
              gridAutoRows: "40px",
              gridAutoFlow: "row dense",
            }}
          >
            {Array.from({ length: 40 }, (_, i) => (
              <Seat key={i} />
            ))}
          </div>
          <aside className="w-full md:max-w-sm bg-white rounded-md shadow-sm p-3 flex flex-col gap-2 order-first md:order-none">
            <Link to="/event">
              <img
                src={headerImageUrl}
                alt="Event Header"
                className="rounded-md max-w-full h-auto mx-auto"
              />
            </Link>
            <Link to="/event">
              <h1 className="text-2xl text-zinc-900 font-semibold pt-4">
                {eventName}
              </h1>
            </Link>
            <p className="text-sm text-zinc-500 py-3">{eventDescription}</p>
            <div className="flex flex-col gap-2 pb-4">
              <p className="text-sm">
                Kdy:{" "}
                {new Date(eventDate).toLocaleDateString("cs-CZ", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="text-sm">Místo: {eventPlace}</p>
            </div>
            <Button
              variant="secondary"
              onClick={handleAddToCalendar}
              className="hover:bg-violet-950 hover:text-white transition duration-500"
            >
              Add to calendar
            </Button>
          </aside>
        </div>
      </main>
      {/* bottom cart affix (wrapper) */}
      <Footer />
    </div>
  );
}

export default App;
